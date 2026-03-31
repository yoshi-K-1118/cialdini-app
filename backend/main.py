from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import StreamingResponse
from pydantic import BaseModel
import anthropic
import json
import asyncio
from dotenv import load_dotenv
import os

load_dotenv()

app = FastAPI()

ALLOWED_ORIGINS = os.environ.get("ALLOWED_ORIGINS", "*").split(",")

app.add_middleware(
    CORSMiddleware,
    allow_origins=ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

client = anthropic.AsyncAnthropic()

CONTEXT_LABELS = {
    "business": "ビジネス・職場",
    "romance": "恋愛",
    "friendship": "友人・人間関係",
    "negotiation": "交渉・説得",
}


class AdvisorRequest(BaseModel):
    situation: str
    context: str = "business"


@app.get("/api/health")
async def health():
    key = os.environ.get("ANTHROPIC_API_KEY", "")
    return {"status": "ok", "api_key_set": bool(key), "api_key_prefix": key[:10] + "..." if key else "none"}


@app.post("/api/advice/stream")
async def advice_stream(request: AdvisorRequest):
    context_label = CONTEXT_LABELS.get(request.context, "ビジネス・職場")

    system_prompt = """あなたはロバート・チャルディーニ博士の「影響力の武器」に精通した専門家です。
ユーザーが提示した状況を、チャルディーニの7つの影響力の法則（返報性・コミットメントと一貫性・社会的証明・権威・好意・希少性・統一性）の観点から分析し、実践的なアドバイスを提供してください。

必ず以下の構造で回答してください：

## 使うべき法則
状況に最も適した法則を1〜3つ選び、なぜその法則が有効かを簡潔に説明してください。

## 具体的なアドバイス（箇条書き3-5個）
- 実践できる具体的な行動を箇条書きで記述してください
- 各アドバイスは明確で、すぐに実行できる内容にしてください

## 実際に使えるセリフ例（2-3例）
実際の会話で使えるセリフを2〜3つ、自然な日本語で示してください。

## 注意点
この状況でやってはいけないこと、または倫理的に注意すべき点を簡潔に述べてください。

回答は日本語で、温かみのある専門家のトーンで書いてください。"""

    user_message = f"状況（コンテキスト：{context_label}）：\n{request.situation}"

    async def generate():
        try:
            async with client.messages.stream(
                model="claude-sonnet-4-6",
                max_tokens=1500,
                system=system_prompt,
                messages=[{"role": "user", "content": user_message}],
            ) as stream:
                async for text in stream.text_stream:
                    payload = json.dumps({"text": text}, ensure_ascii=False)
                    yield f"data: {payload}\n\n"
        except Exception as e:
            error_payload = json.dumps({"error": str(e)}, ensure_ascii=False)
            yield f"data: {error_payload}\n\n"
        finally:
            yield "data: [DONE]\n\n"

    return StreamingResponse(
        generate(),
        media_type="text/event-stream",
        headers={
            "Cache-Control": "no-cache",
            "X-Accel-Buffering": "no",
        },
    )
