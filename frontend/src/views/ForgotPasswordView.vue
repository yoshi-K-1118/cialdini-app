<template>
  <div class="min-h-[calc(100vh-3.5rem)] bg-slate-50 flex items-center justify-center px-4 py-12">
    <div class="w-full max-w-md">
      <div class="text-center mb-8">
        <svg class="w-12 h-12 text-indigo-600 mx-auto mb-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
        </svg>
        <h1 class="text-2xl font-bold text-gray-900">{{ t('forgotPassword.title') }}</h1>
        <p class="text-sm text-gray-500 mt-2">{{ t('forgotPassword.desc') }}</p>
      </div>

      <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <div v-if="successMsg" class="bg-indigo-50 text-indigo-700 text-sm rounded-xl px-4 py-4 text-center">
          <div class="text-2xl mb-2">📧</div>
          <div class="font-semibold">{{ successMsg }}</div>
          <RouterLink to="/login" class="inline-block mt-4 text-indigo-600 hover:underline text-sm font-medium">
            {{ t('forgotPassword.backToLogin') }}
          </RouterLink>
        </div>

        <form v-else @submit.prevent="handleSubmit" class="space-y-5">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1.5">{{ t('forgotPassword.email') }}</label>
            <input v-model="email" type="email" required autocomplete="email"
              class="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-transparent"
              placeholder="example@email.com" />
          </div>

          <div v-if="errorMsg" class="bg-red-50 text-red-600 text-sm rounded-xl px-4 py-3">
            {{ errorMsg }}
          </div>

          <button type="submit" :disabled="loading"
            class="w-full bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white font-semibold py-2.5 rounded-xl transition-colors text-sm">
            {{ loading ? t('forgotPassword.loading') : t('forgotPassword.submit') }}
          </button>
        </form>

        <p v-if="!successMsg" class="text-center text-sm text-gray-500 mt-6">
          <RouterLink to="/login" class="text-indigo-600 font-medium hover:underline">
            {{ t('forgotPassword.backToLogin') }}
          </RouterLink>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { supabase } from '../stores/auth.js'

const { t } = useI18n()
const email = ref('')
const loading = ref(false)
const errorMsg = ref('')
const successMsg = ref('')

async function handleSubmit() {
  loading.value = true
  errorMsg.value = ''
  const { error } = await supabase.auth.resetPasswordForEmail(email.value, {
    redirectTo: `${window.location.origin}/reset-password`,
  })
  if (error) {
    errorMsg.value = t('forgotPassword.error')
  } else {
    successMsg.value = t('forgotPassword.successMsg')
  }
  loading.value = false
}
</script>
