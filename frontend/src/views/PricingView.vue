<template>
  <div class="max-w-4xl mx-auto px-4 py-16">
    <div class="text-center mb-12">
      <h1 class="text-3xl font-bold text-gray-900 mb-3">{{ t('pricing.title') }}</h1>
      <p class="text-gray-500">{{ t('pricing.desc') }}</p>
    </div>

    <div class="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
      <!-- Free Plan -->
      <div class="bg-white rounded-2xl border-2 border-gray-200 p-8 flex flex-col">
        <div class="mb-6">
          <h2 class="text-lg font-bold text-gray-900 mb-1">{{ t('pricing.freePlan') }}</h2>
          <div class="flex items-end gap-1">
            <span class="text-4xl font-bold text-gray-900">{{ t('pricing.freePrice') }}</span>
            <span class="text-gray-400 mb-1">{{ t('pricing.perMonth') }}</span>
          </div>
        </div>
        <ul class="space-y-3 mb-8 flex-1">
          <li class="flex items-center gap-2 text-sm text-gray-700">
            <span class="text-emerald-500 font-bold">✓</span> {{ t('pricing.feature1') }}
          </li>
          <li class="flex items-center gap-2 text-sm text-gray-700">
            <span class="text-emerald-500 font-bold">✓</span> {{ t('pricing.feature2') }}
          </li>
          <li class="flex items-center gap-2 text-sm text-gray-400">
            <span class="font-bold">✗</span> {{ t('pricing.feature3') }}
          </li>
        </ul>
        <RouterLink v-if="!authStore.user" to="/register"
          class="block text-center bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2.5 rounded-xl transition-colors text-sm">
          {{ t('pricing.startFree') }}
        </RouterLink>
        <button v-else disabled
          class="block w-full text-center bg-gray-100 text-gray-400 font-semibold py-2.5 rounded-xl cursor-not-allowed text-sm">
          {{ t('pricing.currentPlan') }}
        </button>
      </div>

      <!-- Premium Plan -->
      <div class="bg-indigo-600 rounded-2xl border-2 border-indigo-600 p-8 flex flex-col relative overflow-hidden">
        <div class="absolute top-4 right-4 bg-amber-400 text-amber-900 text-xs font-bold px-2 py-1 rounded-full">
          {{ t('pricing.recommended') }}
        </div>
        <div class="mb-6">
          <h2 class="text-lg font-bold text-white mb-1">{{ t('pricing.premiumPlan') }}</h2>
          <div class="flex items-end gap-1">
            <span class="text-4xl font-bold text-white">{{ t('pricing.premiumPrice') }}</span>
            <span class="text-indigo-200 mb-1">{{ t('pricing.perMonth') }}</span>
          </div>
        </div>
        <ul class="space-y-3 mb-8 flex-1">
          <li class="flex items-center gap-2 text-sm text-indigo-100">
            <span class="text-white font-bold">✓</span> {{ t('pricing.feature1') }}
          </li>
          <li class="flex items-center gap-2 text-sm text-indigo-100">
            <span class="text-white font-bold">✓</span> {{ t('pricing.feature3') }}
          </li>
          <li class="flex items-center gap-2 text-sm text-indigo-100">
            <span class="text-white font-bold">✓</span> {{ t('pricing.feature4') }}
          </li>
        </ul>
        <template v-if="authStore.profile?.is_premium">
          <button disabled
            class="w-full text-center bg-white/30 text-white font-semibold py-2.5 rounded-xl cursor-not-allowed text-sm">
            ✨ {{ t('pricing.currentPlan') }}
          </button>
          <button @click="handleManage" :disabled="portalLoading"
            class="w-full text-center bg-transparent border border-white/50 hover:bg-white/10 disabled:opacity-70 text-white font-semibold py-2.5 rounded-xl transition-colors text-sm mt-2">
            {{ portalLoading ? t('pricing.processing') : t('pricing.manageSubscription') }}
          </button>
        </template>
        <button v-else @click="handleUpgrade" :disabled="checkoutLoading"
          class="w-full text-center bg-white hover:bg-indigo-50 disabled:opacity-70 text-indigo-700 font-semibold py-2.5 rounded-xl transition-colors text-sm">
          {{ checkoutLoading ? t('pricing.processing') : t('pricing.upgrade') }}
        </button>
      </div>
    </div>

    <!-- FAQ -->
    <div class="mt-16 max-w-2xl mx-auto">
      <h2 class="text-xl font-bold text-gray-900 mb-6 text-center">{{ t('pricing.faqTitle') }}</h2>
      <div class="space-y-4">
        <div v-for="faq in t('pricing.faq')" :key="faq.q" class="bg-white rounded-xl p-5 border border-gray-100">
          <div class="font-semibold text-gray-900 text-sm mb-2">{{ faq.q }}</div>
          <div class="text-gray-500 text-sm leading-relaxed">{{ faq.a }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { authStore, supabase } from '../stores/auth.js'

const { t, locale } = useI18n()
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
      body: JSON.stringify({ user_id: authStore.user.id, email: authStore.user.email, locale: locale.value }),
    })
    const data = await res.json()
    if (data.url) window.location.href = data.url
  } catch (e) {
    alert(t('pricing.error'))
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
    alert(t('pricing.error'))
  }
  portalLoading.value = false
}
</script>
