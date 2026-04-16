<template>
  <div class="min-h-[calc(100vh-3.5rem)] bg-slate-50 flex items-center justify-center px-4 py-12">
    <div class="w-full max-w-md">
      <div class="text-center mb-8">
        <svg class="w-12 h-12 text-indigo-600 mx-auto mb-3" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="6" r="4"/>
          <path d="M12 12c-5.33 0-8 2.69-8 5v1h16v-1c0-2.31-2.67-5-8-5z"/>
        </svg>
        <h1 class="text-2xl font-bold text-gray-900">{{ t('register.title') }}</h1>
      </div>

      <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <div v-if="successMsg" class="bg-indigo-50 text-indigo-700 text-sm rounded-xl px-4 py-4 text-center">
          <div class="text-2xl mb-2">📧</div>
          <div class="font-semibold">{{ successMsg }}</div>
        </div>

        <form v-else @submit.prevent="handleRegister" class="space-y-5">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1.5">{{ t('register.email') }}</label>
            <input v-model="email" type="email" required autocomplete="email"
              class="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-transparent"
              placeholder="example@email.com" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1.5">{{ t('register.password') }}</label>
            <input v-model="password" type="password" required minlength="6" autocomplete="new-password"
              class="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-transparent"
              placeholder="••••••••" />
          </div>

          <div v-if="errorMsg" class="bg-red-50 text-red-600 text-sm rounded-xl px-4 py-3">
            {{ errorMsg }}
          </div>

          <button type="submit" :disabled="loading"
            class="w-full bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white font-semibold py-2.5 rounded-xl transition-colors text-sm">
            {{ loading ? t('register.loading') : t('register.submit') }}
          </button>
        </form>

        <p class="text-center text-sm text-gray-500 mt-6">
          {{ t('register.hasAccount') }}
          <RouterLink to="/login" class="text-indigo-600 font-medium hover:underline">{{ t('register.login') }}</RouterLink>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { supabase } from '../stores/auth.js'

const { t, locale } = useI18n()
const email = ref('')
const password = ref('')
const loading = ref(false)
const errorMsg = ref('')
const successMsg = ref('')

async function handleRegister() {
  loading.value = true
  errorMsg.value = ''
  const { error } = await supabase.auth.signUp({
    email: email.value,
    password: password.value,
  })
  if (error) {
    errorMsg.value = t('register.error')
  } else {
    successMsg.value = locale.value === 'ja' ? '確認メールを送信しました' : 'Confirmation email sent. Please check your inbox.'
  }
  loading.value = false
}
</script>
