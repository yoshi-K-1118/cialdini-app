import os, json, stripe
from datetime import datetime, timezone
from fastapi import FastAPI, Header, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import StreamingResponse, JSONResponse
from pydantic import BaseModel
import anthropic
from supabase import create_client
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

FREE_TIER_LIMIT = 5

ALLOWED_ORIGINS = [o.strip() for o in os.environ.get("ALLOWED_ORIGINS", "*").split(",") if o.strip()]
app.add_middleware(CORSMiddleware, allow_origins=ALLOWED_ORIGINS,
    allow_credentials=True, allow_methods=["*"], allow_headers=["*"])

claude = anthropic.AsyncAnthropic()
supabase = create_client(os.environ["SUPABASE_URL"], os.environ["SUPABASE_SERVICE_KEY"])
stripe.api_key = os.environ["STRIPE_SECRET_KEY"]

CONTEXT_LABELS_JA = {"business":"ビジネス・職場","romance":"恋愛","friendship":"友人・人間関係","negotiation":"交渉・説得"}
CONTEXT_LABELS_EN = {"business":"Business / Workplace","romance":"Romance","friendship":"Friendship / Social","negotiation":"Negotiation / Persuasion"}

class AdvisorRequest(BaseModel):
    situation: str
    context: str = "business"
    locale: str = "ja"

class CheckoutRequest(BaseModel):
    user_id: str
    email: str

class ContactRequest(BaseModel):
    name: str
    email: str
    category: str
    message: str

# --- Auth helper ---
async def get_current_user(authorization: str = Header(None)):
    if not authorization or not authorization.startswith("Bearer "):
        raise HTTPException(status_code=401, detail="認証が必要です")
    token = authorization.split(" ")[1]
    try:
        res = supabase.auth.get_user(token)
        return res.user
    except Exception:
        raise HTTPException(status_code=401, detail="無効なトークンです")

# --- Usage helper ---
async def check_and_increment_usage(user_id: str) -> dict:
    """Returns {"allowed": bool, "usage": int, "is_premium": bool}"""
    res = supabase.table("profiles").select("*").eq("id", user_id).single().execute()
    profile = res.data

    if profile["is_premium"]:
        return {"allowed": True, "usage": -1, "is_premium": True}

    # Reset monthly usage if new month
    reset_at_str = profile.get("usage_reset_at", "")
    try:
        reset_at = datetime.fromisoformat(reset_at_str.replace("Z", "+00:00"))
    except Exception:
        reset_at = datetime.now(timezone.utc)

    now = datetime.now(timezone.utc)
    if now.year != reset_at.year or now.month != reset_at.month:
        supabase.table("profiles").update({
            "monthly_usage": 0,
            "usage_reset_at": now.isoformat()
        }).eq("id", user_id).execute()
        profile["monthly_usage"] = 0

    if profile["monthly_usage"] >= FREE_TIER_LIMIT:
        return {"allowed": False, "usage": profile["monthly_usage"], "is_premium": False}

    supabase.table("profiles").update({
        "monthly_usage": profile["monthly_usage"] + 1
    }).eq("id", user_id).execute()

    return {"allowed": True, "usage": profile["monthly_usage"] + 1, "is_premium": False}

# --- Endpoints ---
@app.get("/api/health")
async def health():
    return {"status": "ok"}

@app.get("/api/user/profile")
async def get_profile(authorization: str = Header(None)):
    user = await get_current_user(authorization)
    res = supabase.table("profiles").select("*").eq("id", user.id).single().execute()
    return res.data

@app.post("/api/stripe/create-checkout")
async def create_checkout(req: CheckoutRequest, authorization: str = Header(None)):
    await get_current_user(authorization)
    session = stripe.checkout.Session.create(
        customer_email=req.email,
        payment_method_types=["card"],
        line_items=[{"price": os.environ["STRIPE_PRICE_ID"], "quantity": 1}],
        mode="subscription",
        success_url=os.environ["FRONTEND_URL"] + "/success?session_id={CHECKOUT_SESSION_ID}",
        cancel_url=os.environ["FRONTEND_URL"] + "/pricing",
        metadata={"user_id": req.user_id},
    )
    return {"url": session.url}

@app.post("/api/stripe/create-portal")
async def create_portal(authorization: str = Header(None)):
    user = await get_current_user(authorization)
    res = supabase.table("profiles").select("stripe_customer_id").eq("id", user.id).single().execute()
    customer_id = res.data.get("stripe_customer_id")
    if not customer_id:
        raise HTTPException(status_code=400, detail="Stripeカスタマーが見つかりません")
    session = stripe.billing_portal.Session.create(
        customer=customer_id,
        return_url=os.environ["FRONTEND_URL"] + "/pricing",
    )
    return {"url": session.url}

@app.post("/api/stripe/webhook")
async def stripe_webhook(request: Request):
    payload = await request.body()
    sig = request.headers.get("stripe-signature", "")
    try:
        event = stripe.Webhook.construct_event(payload, sig, os.environ["STRIPE_WEBHOOK_SECRET"])
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

    if event["type"] == "checkout.session.completed":
        session = event["data"]["object"]
        user_id = session.get("metadata", {}).get("user_id")
        customer_id = session.get("customer")
        if user_id:
            supabase.table("profiles").update({
                "is_premium": True,
                "stripe_customer_id": customer_id
            }).eq("id", user_id).execute()

    elif event["type"] in ("customer.subscription.deleted", "customer.subscription.paused"):
        customer_id = event["data"]["object"].get("customer")
        if customer_id:
            supabase.table("profiles").update({"is_premium": False}).eq("stripe_customer_id", customer_id).execute()

    return {"received": True}

@app.post("/api/advice/stream")
async def advice_stream(req: AdvisorRequest, authorization: str = Header(None)):
    user = await get_current_user(authorization)
    usage = await check_and_increment_usage(user.id)

    if not usage["allowed"]:
        raise HTTPException(status_code=403, detail="LIMIT_REACHED")

    is_english = req.locale == "en"

    if is_english:
        context_label = CONTEXT_LABELS_EN.get(req.context, "Business / Workplace")
        system_prompt = """You are an expert in Dr. Robert Cialdini's "Influence: The Psychology of Persuasion."
Analyze the situation presented by the user through the lens of Cialdini's 7 principles of influence (Reciprocity, Commitment & Consistency, Social Proof, Authority, Liking, Scarcity, Unity) and provide practical, actionable advice.

Always structure your response as follows:

## Principles to Apply
Select 1-3 principles most relevant to the situation and briefly explain why each is effective here.

## Specific Advice
- List 3-5 concrete, actionable steps the user can take

## Script Examples
Provide 2-3 natural, ready-to-use phrases or scripts for real conversations.

## Important Caution
Briefly note any ethical considerations to keep in mind.

Write in a warm, expert tone in English."""
        user_message = f"Situation (Context: {context_label}):\n{req.situation}"
    else:
        context_label = CONTEXT_LABELS_JA.get(req.context, "ビジネス・職場")
        system_prompt = """あなたはロバート・チャルディーニ博士の「影響力の武器」に精通した専門家です。
ユーザーが提示した状況を、チャルディーニの7つの影響力の法則（返報性・コミットメントと一貫性・社会的証明・権威・好意・希少性・統一性）の観点から分析し、実践的なアドバイスを提供してください。

必ず以下の構造で回答してください：

## 使うべき法則
状況に最も適した法則を1〜3つ選び、なぜその法則が有効かを簡潔に説明してください。

## 具体的なアドバイス
- 実践できる具体的な行動を箇条書きで3〜5つ記述してください

## 実際に使えるセリフ例
実際の会話で使えるセリフを2〜3つ、自然な日本語で示してください。

## 注意点
倫理的に注意すべき点を簡潔に述べてください。

回答は日本語で、温かみのある専門家のトーンで書いてください。"""
        user_message = f"状況（コンテキスト：{context_label}）：\n{req.situation}"

    async def generate():
        try:
            async with claude.messages.stream(
                model="claude-sonnet-4-6",
                max_tokens=1500,
                system=[{
                    "type": "text",
                    "text": system_prompt,
                    "cache_control": {"type": "ephemeral"},
                }],
                messages=[{"role": "user", "content": user_message}],
            ) as stream:
                async for text in stream.text_stream:
                    yield f"data: {json.dumps({'text': text}, ensure_ascii=False)}\n\n"
        except Exception as e:
            yield f"data: {json.dumps({'error': str(e)}, ensure_ascii=False)}\n\n"
        finally:
            yield "data: [DONE]\n\n"

    return StreamingResponse(generate(), media_type="text/event-stream",
        headers={"Cache-Control": "no-cache", "X-Accel-Buffering": "no"})

@app.post("/api/contact")
async def contact(req: ContactRequest):
    # メール送信先（環境変数で設定）
    to_email = os.environ.get("CONTACT_TO_EMAIL", "")
    if not to_email:
        # 環境変数未設定でも受信したことにしてログ出力
        print(f"[CONTACT] from={req.email} name={req.name} category={req.category} msg={req.message[:100]}")
        return {"received": True}

    import smtplib
    from email.mime.text import MIMEText

    body = f"名前: {req.name}\nメール: {req.email}\n種別: {req.category}\n\n{req.message}"
    msg = MIMEText(body, "plain", "utf-8")
    msg["Subject"] = f"[影響力ガイド お問い合わせ] {req.category} - {req.name}"
    msg["From"] = os.environ.get("SMTP_FROM", req.email)
    msg["To"] = to_email

    try:
        with smtplib.SMTP_SSL(os.environ["SMTP_HOST"], int(os.environ.get("SMTP_PORT", 465))) as server:
            server.login(os.environ["SMTP_USER"], os.environ["SMTP_PASS"])
            server.send_message(msg)
    except Exception as e:
        print(f"[CONTACT] mail error: {e}")
        raise HTTPException(status_code=500, detail="送信に失敗しました")

    return {"received": True}
