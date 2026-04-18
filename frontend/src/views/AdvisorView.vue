<template>
  <div class="flex h-[calc(100vh-3.5rem)]">
    <!-- Sidebar (desktop) -->
    <aside class="hidden md:flex flex-col w-64 bg-white border-r border-gray-200 p-4 flex-shrink-0">
      <h2 class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">{{ t('advisor.contextLabel') }}</h2>
      <div class="space-y-2 mb-6">
        <button
          v-for="(meta, key) in scenarioLabels" :key="key"
          @click="selectedContext = key"
          :class="['w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all border text-left',
            selectedContext === key ? 'bg-indigo-50 border-indigo-300 text-indigo-700' : 'bg-white border-gray-100 text-gray-700 hover:bg-gray-50']"
        >
          <span class="text-lg">{{ meta.emoji }}</span>
          <span>{{ meta.label }}</span>
        </button>
      </div>

      <!-- Usage info -->
      <div v-if="authStore.profile" class="mb-4">
        <div v-if="authStore.profile.is_premium"
          class="bg-amber-50 rounded-xl p-3 text-xs text-amber-700 font-semibold flex items-center gap-1.5">
          {{ t('advisor.premiumBadge') }}
        </div>
        <div v-else class="bg-gray-50 rounded-xl p-3 text-xs text-gray-600">
          <div class="font-semibold mb-1">{{ t('advisor.remainingLabel') }}</div>
          <div class="flex items-center gap-2">
            <div class="flex-1 bg-gray-200 rounded-full h-1.5">
              <div class="bg-indigo-500 h-1.5 rounded-full transition-all"
                :style="{ width: `${Math.min((authStore.profile.monthly_usage / 5) * 100, 100)}%` }"></div>
            </div>
            <span class="font-mono font-bold" :class="authStore.profile.monthly_usage >= 5 ? 'text-red-500' : 'text-gray-700'">
              {{ Math.max(5 - authStore.profile.monthly_usage, 0) }}/5
            </span>
          </div>
          <RouterLink v-if="authStore.profile.monthly_usage >= 5" to="/pricing"
            class="mt-2 block text-center text-indigo-600 font-semibold hover:underline">
            {{ t('advisor.upgradeLink') }}
          </RouterLink>
        </div>
      </div>

      <div class="bg-indigo-50 rounded-xl p-3 text-xs text-indigo-700 leading-relaxed">
        <div class="font-bold mb-1">{{ t('advisor.aboutTitle') }}</div>
        {{ t('advisor.aboutDesc') }}
      </div>
    </aside>

    <!-- Main Chat Area -->
    <div class="flex-1 flex flex-col min-w-0">
      <!-- Mobile Context Tabs -->
      <div class="md:hidden flex gap-2 px-3 py-2 overflow-x-auto border-b border-gray-200 bg-white flex-shrink-0">
        <button
          v-for="(meta, key) in scenarioLabels" :key="key"
          @click="selectedContext = key"
          :class="['flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-colors',
            selectedContext === key ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-gray-600 border-gray-200']"
        >
          <span>{{ meta.emoji }}</span><span>{{ meta.label }}</span>
        </button>
      </div>

      <!-- Chat Header -->
      <div class="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between flex-shrink-0">
        <div class="flex items-center gap-2">
          <span class="text-xl">🤖</span>
          <div>
            <div class="font-semibold text-gray-900 text-sm">{{ t('advisor.headerTitle') }}</div>
            <div class="text-xs text-gray-400">{{ scenarioLabels[selectedContext].emoji }} {{ t('advisor.headerMode', { label: scenarioLabels[selectedContext].label }) }}</div>
          </div>
        </div>
        <!-- Mobile usage badge -->
        <div v-if="authStore.profile" class="md:hidden text-xs">
          <span v-if="authStore.profile.is_premium" class="bg-amber-400 text-amber-900 font-bold px-2 py-0.5 rounded-full">✨ PRO</span>
          <span v-else :class="authStore.profile.monthly_usage >= 5 ? 'text-red-500 font-bold' : 'text-gray-500'">
            {{ t('advisor.remainingLabel') }} {{ Math.max(5 - authStore.profile.monthly_usage, 0) }}
          </span>
        </div>
      </div>

      <!-- Limit reached banner -->
      <div v-if="limitReached" class="bg-amber-50 border-b border-amber-200 px-4 py-3 flex items-center justify-between flex-shrink-0">
        <div class="text-sm text-amber-800">
          <span class="font-semibold">{{ t('advisor.limitBanner') }}</span>
        </div>
        <RouterLink to="/pricing"
          class="ml-3 flex-shrink-0 bg-indigo-600 text-white text-xs font-semibold px-3 py-1.5 rounded-lg hover:bg-indigo-700 transition-colors">
          {{ t('advisor.upgradeBtn') }}
        </RouterLink>
      </div>

      <!-- Messages -->
      <div ref="messagesEl" class="flex-1 overflow-y-auto px-4 py-4 space-y-4">
        <div v-for="(msg, i) in messages" :key="i"
          :class="msg.role === 'user' ? 'flex justify-end' : 'flex justify-start'">
          <div v-if="msg.role === 'user'"
            class="max-w-xs sm:max-w-md bg-indigo-600 text-white rounded-2xl rounded-tr-sm px-4 py-3 text-sm leading-relaxed">
            {{ msg.content }}
          </div>
          <div v-else
            class="max-w-sm sm:max-w-xl bg-white rounded-2xl rounded-tl-sm shadow-sm border border-gray-100 px-4 py-3">
            <div class="prose-ai text-sm" v-html="renderMarkdown(msg.content)"></div>
          </div>
        </div>

        <!-- Streaming -->
        <div v-if="isStreaming" class="flex justify-start">
          <div class="max-w-sm sm:max-w-xl bg-white rounded-2xl rounded-tl-sm shadow-sm border border-gray-100 px-4 py-3">
            <div v-if="currentMessage" class="prose-ai text-sm" v-html="renderMarkdown(currentMessage)"></div>
            <div v-else class="flex items-center gap-1 py-1">
              <div class="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style="animation-delay:0ms"></div>
              <div class="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style="animation-delay:150ms"></div>
              <div class="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style="animation-delay:300ms"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Input Area -->
      <div class="border-t border-gray-200 bg-white px-4 py-3 flex-shrink-0">
        <div class="text-xs text-gray-400 mb-2">{{ t('advisor.exampleLabel') }} {{ placeholderExamples[selectedContext] }}</div>
        <div class="flex gap-2 items-end">
          <textarea
            ref="textareaEl"
            v-model="userInput"
            @keydown.meta.enter="sendMessage"
            @keydown.ctrl.enter="sendMessage"
            rows="3"
            :disabled="isStreaming || limitReached"
            class="flex-1 resize-none border border-gray-200 rounded-xl px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-transparent disabled:opacity-50 disabled:bg-gray-50"
            :placeholder="t('advisor.placeholder')"
          ></textarea>
          <button @click="sendMessage" :disabled="isStreaming || !userInput.trim() || limitReached"
            class="flex-shrink-0 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold px-4 py-2 rounded-xl transition-colors text-sm h-fit">
            {{ t('advisor.sendBtn') }}
          </button>
        </div>
        <div class="text-xs text-gray-300 mt-1">{{ t('advisor.hint') }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { authStore, supabase, fetchProfile } from '../stores/auth.js'

const { t, locale } = useI18n()
const router = useRouter()
const selectedContext = ref('business')
const userInput = ref('')

const scenarioLabels = computed(() => ({
  business:    { label: t('advisor.contexts.business.label'),    emoji: '💼' },
  romance:     { label: t('advisor.contexts.romance.label'),     emoji: '💕' },
  friendship:  { label: t('advisor.contexts.friendship.label'),  emoji: '👫' },
  negotiation: { label: t('advisor.contexts.negotiation.label'), emoji: '🤝' },
}))

const placeholderExamples = computed(() => ({
  business:    t('advisor.placeholders.business'),
  romance:     t('advisor.placeholders.romance'),
  friendship:  t('advisor.placeholders.friendship'),
  negotiation: t('advisor.placeholders.negotiation'),
}))

const messages = ref([
  {
    role: 'ai',
    content: t('advisor.welcomeMsg'),
  },
])
const isStreaming = ref(false)
const currentMessage = ref('')
const messagesEl = ref(null)
const textareaEl = ref(null)
const limitReached = ref(false)

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
      if (line.trim()) html += `<p>${escapeHtml(line)}</p>`
    }
  }
  if (inList) html += '</ul>'
  return html
}

function escapeHtml(text) {
  return text
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
}

async function scrollToBottom() {
  await nextTick()
  if (messagesEl.value) messagesEl.value.scrollTop = messagesEl.value.scrollHeight
}

async function sendMessage() {
  const text = userInput.value.trim()
  if (!text || isStreaming.value || limitReached.value) return

  messages.value.push({ role: 'user', content: text })
  userInput.value = ''
  isStreaming.value = true
  currentMessage.value = ''
  await scrollToBottom()

  try {
    const session = (await supabase.auth.getSession()).data.session
    const token = session?.access_token
    const apiBase = import.meta.env.VITE_API_BASE_URL || ''
    const response = await fetch(`${apiBase}/api/advice/stream`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      body: JSON.stringify({ situation: text, context: selectedContext.value, locale: locale.value }),
    })

    if (response.status === 401) {
      messages.value.push({ role: 'ai', content: t('advisor.errorLogin') })
      isStreaming.value = false
      return
    }
    if (response.status === 403) {
      limitReached.value = true
      messages.value.push({ role: 'ai', content: t('advisor.errorLimit') })
      isStreaming.value = false
      await fetchProfile()
      return
    }
    if (!response.ok) throw new Error(`HTTP error: ${response.status}`)

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
            await fetchProfile()
            await scrollToBottom()
            return
          }
          try {
            const parsed = JSON.parse(data)
            if (parsed.text) { currentMessage.value += parsed.text; await scrollToBottom() }
          } catch (e) {}
        }
      }
    }
    if (currentMessage.value) {
      messages.value.push({ role: 'ai', content: currentMessage.value })
      currentMessage.value = ''
    }
  } catch (err) {
    messages.value.push({ role: 'ai', content: `## ${t('advisor.errorGeneral')}\n\n${err.message}` })
  } finally {
    isStreaming.value = false
    currentMessage.value = ''
    await scrollToBottom()
  }
}
</script>
