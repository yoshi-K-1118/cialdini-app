<template>
  <div class="min-h-[calc(100vh-3.5rem)] bg-slate-50 flex items-center justify-center px-4 py-12">
    <div class="w-full max-w-md">
      <div class="text-center mb-8">
        <svg class="w-12 h-12 text-indigo-600 mx-auto mb-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
        </svg>
        <h1 class="text-2xl font-bold text-gray-900">{{ t('resetPassword.title') }}</h1>
        <p class="text-sm text-gray-500 mt-2">{{ t('resetPassword.desc') }}</p>
      </div>

      <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <!-- 成功 -->
        <div v-if="successMsg" class="bg-indigo-50 text-indigo-700 text-sm rounded-xl px-4 py-4 text-center">
          <div class="text-2xl mb-2">✅</div>
          <div class="font-semibold">{{ successMsg }}</div>
          <RouterLink to="/login" class="inline-block mt-4 text-indigo-600 hover:underline text-sm font-medium">
            {{ t('resetPassword.goToLogin') }}
          </RouterLink>
        </div>

        <!-- リンク期限切れ / トークンエラー -->
        <div v-else-if="tokenError" class="bg-red-50 text-red-600 text-sm rounded-xl px-4 py-4 text-center">
          <div class="font-semibold mb-3">{{ t('resetPassword.error') }}</div>
          <RouterLink to="/forgot-password" class="inline-block text-indigo-600 hover:underline font-medium">
            {{ t('resetPassword.requestAgain') }}
          </RouterLink>
        </div>

        <!-- セッション確立中 -->
        <div v-else-if="!sessionReady" class="text-center text-sm text-gray-500 py-4">
          {{ t('resetPassword.verifying') }}
        </div>

        <!-- パスワード変更フォーム -->
        <form v-else @submit.prevent="handleReset" class="space-y-5">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1.5">{{ t('resetPassword.newPassword') }}</label>
            <input v-model="newPassword" type="password" required minlength="6" autocomplete="new-password"
              class="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-transparent"
              placeholder="••••••••" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1.5">{{ t('resetPassword.confirmPassword') }}</label>
            <input v-model="confirmPassword" type="password" required minlength="6" autocomplete="new-password"
              class="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-transparent"
              placeholder="••••••••" />
          </div>

          <div v-if="errorMsg" class="bg-red-50 text-red-600 text-sm rounded-xl px-4 py-3">
            {{ errorMsg }}
          </div>

          <button type="submit" :disabled="loading"
            class="w-full bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white font-semibold py-2.5 rounded-xl transition-colors text-sm">
            {{ loading ? t('resetPassword.loading') : t('resetPassword.submit') }}
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { supabase } from '../stores/auth.js'

const { t } = useI18n()
const newPassword = ref('')
const confirmPassword = ref('')
const loading = ref(false)
const errorMsg = ref('')
const successMsg = ref('')
const sessionReady = ref(false)
const tokenError = ref(false)

let unsubscribe = null

onMounted(async () => {
  const params = new URLSearchParams(window.location.search)
  const token_hash = params.get('token_hash')
  const type = params.get('type')
  const code = params.get('code')

  if (code) {
    // PKCE フロー
    const { error } = await supabase.auth.exchangeCodeForSession(code)
    if (error) {
      console.error('exchangeCodeForSession error:', error.message, error.status)
      tokenError.value = true
    } else {
      sessionReady.value = true
    }
  } else if (token_hash && type) {
    // OTP token_hash フロー
    const { error } = await supabase.auth.verifyOtp({ token_hash, type })
    if (error) {
      console.error('verifyOtp error:', error.message, error.status)
      tokenError.value = true
    } else {
      sessionReady.value = true
    }
  } else {
    // hash フラグメント方式のフォールバック（PASSWORD_RECOVERY イベント待機）
    const { data } = supabase.auth.onAuthStateChange((event) => {
      if (event === 'PASSWORD_RECOVERY') {
        sessionReady.value = true
      }
    })
    unsubscribe = data.subscription
  }
})

onUnmounted(() => {
  unsubscribe?.unsubscribe()
})

async function handleReset() {
  errorMsg.value = ''
  if (newPassword.value !== confirmPassword.value) {
    errorMsg.value = t('resetPassword.mismatch')
    return
  }
  loading.value = true
  try {
    const { error } = await supabase.auth.updateUser({ password: newPassword.value })
    if (error) {
      console.error('updateUser error:', error.message, error.status)
      errorMsg.value = error.status === 422
        ? t('resetPassword.errorSamePassword')
        : t('resetPassword.error')
    } else {
      successMsg.value = t('resetPassword.successMsg')
    }
  } catch (e) {
    console.error('updateUser exception:', e)
    errorMsg.value = t('resetPassword.error')
  } finally {
    loading.value = false
  }
}
</script>
