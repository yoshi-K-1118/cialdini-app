<template>
  <div class="max-w-4xl mx-auto px-4 py-16">
    <div class="text-center mb-12">
      <h1 class="text-3xl font-bold text-gray-900 mb-3">シンプルな料金プラン</h1>
      <p class="text-gray-500">まずは無料でお試し。いつでもアップグレード・解約できます。</p>
    </div>

    <div class="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
      <!-- Free Plan -->
      <div class="bg-white rounded-2xl border-2 border-gray-200 p-8 flex flex-col">
        <div class="mb-6">
          <h2 class="text-lg font-bold text-gray-900 mb-1">フリープラン</h2>
          <div class="flex items-end gap-1">
            <span class="text-4xl font-bold text-gray-900">¥0</span>
            <span class="text-gray-400 mb-1">/月</span>
          </div>
        </div>
        <ul class="space-y-3 mb-8 flex-1">
          <li class="flex items-center gap-2 text-sm text-gray-700">
            <span class="text-emerald-500 font-bold">✓</span> 7つの法則の解説（無制限）
          </li>
          <li class="flex items-center gap-2 text-sm text-gray-700">
            <span class="text-emerald-500 font-bold">✓</span> AIアドバイス 月5回まで
          </li>
          <li class="flex items-center gap-2 text-sm text-gray-400">
            <span class="font-bold">✗</span> AIアドバイス無制限
          </li>
        </ul>
        <RouterLink v-if="!authStore.user" to="/register"
          class="block text-center bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2.5 rounded-xl transition-colors text-sm">
          無料で始める
        </RouterLink>
        <button v-else disabled
          class="block w-full text-center bg-gray-100 text-gray-400 font-semibold py-2.5 rounded-xl cursor-not-allowed text-sm">
          現在のプラン
        </button>
      </div>

      <!-- Premium Plan -->
      <div class="bg-indigo-600 rounded-2xl border-2 border-indigo-600 p-8 flex flex-col relative overflow-hidden">
        <div class="absolute top-4 right-4 bg-amber-400 text-amber-900 text-xs font-bold px-2 py-1 rounded-full">
          おすすめ
        </div>
        <div class="mb-6">
          <h2 class="text-lg font-bold text-white mb-1">プレミアムプラン</h2>
          <div class="flex items-end gap-1">
            <span class="text-4xl font-bold text-white">¥980</span>
            <span class="text-indigo-200 mb-1">/月</span>
          </div>
        </div>
        <ul class="space-y-3 mb-8 flex-1">
          <li class="flex items-center gap-2 text-sm text-indigo-100">
            <span class="text-white font-bold">✓</span> 7つの法則の解説（無制限）
          </li>
          <li class="flex items-center gap-2 text-sm text-indigo-100">
            <span class="text-white font-bold">✓</span> AIアドバイス 無制限
          </li>
          <li class="flex items-center gap-2 text-sm text-indigo-100">
            <span class="text-white font-bold">✓</span> 優先サポート
          </li>
        </ul>
        <template v-if="authStore.profile?.is_premium">
          <button disabled
            class="w-full text-center bg-white/30 text-white font-semibold py-2.5 rounded-xl cursor-not-allowed text-sm">
            ✨ 現在のプラン
          </button>
          <button @click="handleManage" :disabled="portalLoading"
            class="w-full text-center bg-transparent border border-white/50 hover:bg-white/10 disabled:opacity-70 text-white font-semibold py-2.5 rounded-xl transition-colors text-sm mt-2">
            {{ portalLoading ? '処理中...' : 'サブスクリプションを管理する' }}
          </button>
        </template>
        <button v-else @click="handleUpgrade" :disabled="checkoutLoading"
          class="w-full text-center bg-white hover:bg-indigo-50 disabled:opacity-70 text-indigo-700 font-semibold py-2.5 rounded-xl transition-colors text-sm">
          {{ checkoutLoading ? '処理中...' : 'アップグレードする →' }}
        </button>
      </div>
    </div>

    <!-- FAQ -->
    <div class="mt-16 max-w-2xl mx-auto">
      <h2 class="text-xl font-bold text-gray-900 mb-6 text-center">よくある質問</h2>
      <div class="space-y-4">
        <div v-for="faq in faqs" :key="faq.q" class="bg-white rounded-xl p-5 border border-gray-100">
          <div class="font-semibold text-gray-900 text-sm mb-2">{{ faq.q }}</div>
          <div class="text-gray-500 text-sm leading-relaxed">{{ faq.a }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { authStore, supabase } from '../stores/auth.js'

const router = useRouter()
const checkoutLoading = ref(false)
const portalLoading = ref(false)

async function handleUpgrade() {
  if (!authStore.user) {
    router.push('/register')
    return
  }
  checkoutLoading.value = true
  try {
    const token = (await supabase.auth.getSession()).data.session?.access_token
    const apiBase = import.meta.env.VITE_API_BASE_URL || ''
    const res = await fetch(`${apiBase}/api/stripe/create-checkout`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify({ user_id: authStore.user.id, email: authStore.user.email }),
    })
    const data = await res.json()
    if (data.url) window.location.href = data.url
  } catch (e) {
    alert('エラーが発生しました。もう一度お試しください。')
  }
  checkoutLoading.value = false
}

async function handleManage() {
  portalLoading.value = true
  try {
    const token = (await supabase.auth.getSession()).data.session?.access_token
    const apiBase = import.meta.env.VITE_API_BASE_URL || ''
    const res = await fetch(`${apiBase}/api/stripe/create-portal`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}` },
    })
    const data = await res.json()
    if (data.url) window.location.href = data.url
  } catch (e) {
    alert('エラーが発生しました。もう一度お試しください。')
  }
  portalLoading.value = false
}

const faqs = [
  { q: 'いつでも解約できますか？', a: 'はい。マイページからいつでも解約できます。解約後は次回の請求日まで引き続きご利用いただけます。' },
  { q: '支払い方法は何が使えますか？', a: 'クレジットカード・デビットカード（Visa、Mastercard、American Express）に対応しています。' },
  { q: '無料プランのまま使い続けられますか？', a: 'はい。月5回のAIアドバイスと法則の解説は無料でずっとご利用いただけます。' },
  { q: 'プレミアムに変更後、すぐに使えますか？', a: 'はい。支払い完了後すぐにAIアドバイスが無制限でご利用いただけます。' },
]
</script>
