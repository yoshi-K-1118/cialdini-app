<template>
  <div class="flex h-[calc(100vh-3.5rem)]">
    <!-- Sidebar (desktop) -->
    <aside class="hidden md:flex flex-col w-64 bg-white border-r border-gray-200 p-4 flex-shrink-0">
      <h2 class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">コンテキスト</h2>
      <div class="space-y-2 mb-6">
        <button
          v-for="(meta, key) in scenarioLabels"
          :key="key"
          @click="selectedContext = key"
          :class="[
            'w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all border text-left',
            selectedContext === key
              ? 'bg-indigo-50 border-indigo-300 text-indigo-700'
              : 'bg-white border-gray-100 text-gray-700 hover:bg-gray-50'
          ]"
        >
          <span class="text-lg">{{ meta.emoji }}</span>
          <span>{{ meta.label }}</span>
        </button>
      </div>

      <div class="bg-indigo-50 rounded-xl p-3 text-xs text-indigo-700 leading-relaxed">
        <div class="font-bold mb-1">🤖 AIアドバイザーとは</div>
        チャルディーニの7つの法則を元に、あなたの状況を分析。具体的なアドバイスと実際に使えるセリフ例を提案します。
      </div>
    </aside>

    <!-- Main Chat Area -->
    <div class="flex-1 flex flex-col min-w-0">
      <!-- Mobile Context Tabs -->
      <div class="md:hidden flex gap-2 px-3 py-2 overflow-x-auto border-b border-gray-200 bg-white flex-shrink-0">
        <button
          v-for="(meta, key) in scenarioLabels"
          :key="key"
          @click="selectedContext = key"
          :class="[
            'flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-colors',
            selectedContext === key
              ? 'bg-indigo-600 text-white border-indigo-600'
              : 'bg-white text-gray-600 border-gray-200'
          ]"
        >
          <span>{{ meta.emoji }}</span>
          <span>{{ meta.label }}</span>
        </button>
      </div>

      <!-- Chat Header -->
      <div class="bg-white border-b border-gray-200 px-4 py-3 flex items-center gap-2 flex-shrink-0">
        <span class="text-xl">🤖</span>
        <div>
          <div class="font-semibold text-gray-900 text-sm">チャルディーニAIアドバイザー</div>
          <div class="text-xs text-gray-400">
            {{ scenarioLabels[selectedContext].emoji }} {{ scenarioLabels[selectedContext].label }}モード
          </div>
        </div>
      </div>

      <!-- Messages -->
      <div ref="messagesEl" class="flex-1 overflow-y-auto px-4 py-4 space-y-4">
        <div
          v-for="(msg, i) in messages"
          :key="i"
          :class="msg.role === 'user' ? 'flex justify-end' : 'flex justify-start'"
        >
          <!-- User message -->
          <div
            v-if="msg.role === 'user'"
            class="max-w-xs sm:max-w-md bg-indigo-600 text-white rounded-2xl rounded-tr-sm px-4 py-3 text-sm leading-relaxed"
          >
            {{ msg.content }}
          </div>

          <!-- AI message -->
          <div
            v-else
            class="max-w-sm sm:max-w-xl bg-white rounded-2xl rounded-tl-sm shadow-sm border border-gray-100 px-4 py-3"
          >
            <div class="prose-ai text-sm" v-html="renderMarkdown(msg.content)"></div>
          </div>
        </div>

        <!-- Streaming message -->
        <div v-if="isStreaming" class="flex justify-start">
          <div class="max-w-sm sm:max-w-xl bg-white rounded-2xl rounded-tl-sm shadow-sm border border-gray-100 px-4 py-3">
            <div v-if="currentMessage" class="prose-ai text-sm" v-html="renderMarkdown(currentMessage)"></div>
            <!-- Loading dots -->
            <div v-else class="flex items-center gap-1 py-1">
              <div class="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style="animation-delay: 0ms"></div>
              <div class="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style="animation-delay: 150ms"></div>
              <div class="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style="animation-delay: 300ms"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Input Area -->
      <div class="border-t border-gray-200 bg-white px-4 py-3 flex-shrink-0">
        <div class="text-xs text-gray-400 mb-2">
          例: {{ placeholderExamples[selectedContext] }}
        </div>
        <div class="flex gap-2 items-end">
          <textarea
            ref="textareaEl"
            v-model="userInput"
            @keydown.meta.enter="sendMessage"
            @keydown.ctrl.enter="sendMessage"
            rows="3"
            :disabled="isStreaming"
            class="flex-1 resize-none border border-gray-200 rounded-xl px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-transparent disabled:opacity-50"
            placeholder="状況を入力してください..."
          ></textarea>
          <button
            @click="sendMessage"
            :disabled="isStreaming || !userInput.trim()"
            class="flex-shrink-0 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold px-4 py-2 rounded-xl transition-colors text-sm h-fit"
          >
            送信
          </button>
        </div>
        <div class="text-xs text-gray-300 mt-1">⌘+Enter または Ctrl+Enter で送信</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, nextTick } from 'vue'
import { scenarioLabels } from '../data/principles.js'

const selectedContext = ref('business')
const userInput = ref('')
const messages = ref([
  {
    role: 'ai',
    content: `## ようこそ！チャルディーニAIアドバイザーです 🧍

チャルディーニ博士の7つの影響力の法則を活用して、あなたの状況に最適なアドバイスをご提案します。

- ビジネスや職場での人間関係・プレゼン・交渉
- 恋愛や気になる人へのアプローチ
- 友人・知人との関係強化
- 重要な交渉・説得のシナリオ

左のメニュー（またはタブ）でコンテキストを選んで、悩んでいる状況を自由に書いてみてください。`,
  },
])
const isStreaming = ref(false)
const currentMessage = ref('')
const messagesEl = ref(null)
const textareaEl = ref(null)

const placeholderExamples = {
  business: '「上司に新しい企画を通したいのですが、なかなか聞いてもらえません」',
  romance: '「気になる人がいるのですが、どうやってアプローチすればいいかわかりません」',
  friendship: '「友人グループで自分だけ意見が通りにくくて悩んでいます」',
  negotiation: '「取引先に価格交渉をしたいのですが、うまく切り出せません」',
}

function renderMarkdown(text) {
  const lines = text.split('\n')
  let html = ''
  let inList = false

  for (const line of lines) {
    if (line.startsWith('## ')) {
      if (inList) { html += '</ul>'; inList = false }
      html += `<h2>${escapeHtml(line.slice(3))}</h2>`
    } else if (line.startsWith('- ')) {
      if (!inList) { html += '<ul>'; inList = true }
      html += `<li>${escapeHtml(line.slice(2))}</li>`
    } else {
      if (inList) { html += '</ul>'; inList = false }
      if (line.trim()) {
        html += `<p>${escapeHtml(line)}</p>`
      }
    }
  }

  if (inList) html += '</ul>'
  return html
}

function escapeHtml(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
}

async function scrollToBottom() {
  await nextTick()
  if (messagesEl.value) {
    messagesEl.value.scrollTop = messagesEl.value.scrollHeight
  }
}

async function sendMessage() {
  const text = userInput.value.trim()
  if (!text || isStreaming.value) return

  messages.value.push({ role: 'user', content: text })
  userInput.value = ''
  isStreaming.value = true
  currentMessage.value = ''
  await scrollToBottom()

  try {
    const apiBase = import.meta.env.VITE_API_BASE_URL || ''
    const response = await fetch(`${apiBase}/api/advice/stream`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ situation: text, context: selectedContext.value }),
    })

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`)
    }

    const reader = response.body.getReader()
    const decoder = new TextDecoder()
    let buffer = ''

    while (true) {
      const { done, value } = await reader.read()
      if (done) break
      buffer += decoder.decode(value, { stream: true })
      const lines = buffer.split('\n')
      buffer = lines.pop()

      for (const line of lines) {
        if (line.startsWith('data: ')) {
          const data = line.slice(6).trim()
          if (data === '[DONE]') {
            messages.value.push({ role: 'ai', content: currentMessage.value })
            currentMessage.value = ''
            isStreaming.value = false
            await scrollToBottom()
            return
          }
          try {
            const parsed = JSON.parse(data)
            if (parsed.text) {
              currentMessage.value += parsed.text
              await scrollToBottom()
            }
          } catch (e) {
            // ignore parse errors
          }
        }
      }
    }

    // If stream ended without [DONE]
    if (currentMessage.value) {
      messages.value.push({ role: 'ai', content: currentMessage.value })
      currentMessage.value = ''
    }
  } catch (err) {
    messages.value.push({
      role: 'ai',
      content: `## エラーが発生しました\n\nAPIへの接続に失敗しました。バックエンドが起動しているか確認してください。\n\nエラー詳細: ${err.message}`,
    })
  } finally {
    isStreaming.value = false
    currentMessage.value = ''
    await scrollToBottom()
  }
}
</script>
