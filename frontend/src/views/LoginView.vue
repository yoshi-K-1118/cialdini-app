<template>
  <div class="min-h-[calc(100vh-3.5rem)] bg-slate-50 flex items-center justify-center px-4 py-12">
    <div class="w-full max-w-md">
      <div class="text-center mb-8">
        <svg class="w-12 h-12 text-indigo-600 mx-auto mb-3" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="6" r="4"/>
          <path d="M12 12c-5.33 0-8 2.69-8 5v1h16v-1c0-2.31-2.67-5-8-5z"/>
        </svg>
        <h1 class="text-2xl font-bold text-gray-900">ログイン</h1>
        <p class="text-gray-500 text-sm mt-1">アカウントにサインインしてください</p>
      </div>

      <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <form @submit.prevent="handleLogin" class="space-y-5">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1.5">メールアドレス</label>
            <input v-model="email" type="email" required autocomplete="email"
              class="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-transparent"
              placeholder="example@email.com" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1.5">パスワード</label>
            <input v-model="password" type="password" required autocomplete="current-password"
              class="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-transparent"
              placeholder="••••••••" />
          </div>

          <div v-if="errorMsg" class="bg-red-50 text-red-600 text-sm rounded-xl px-4 py-3">
            {{ errorMsg }}
          </div>

          <button type="submit" :disabled="loading"
            class="w-full bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white font-semibold py-2.5 rounded-xl transition-colors text-sm">
            {{ loading ? 'ログイン中...' : 'ログイン' }}
          </button>
        </form>

        <p class="text-center text-sm text-gray-500 mt-6">
          アカウントをお持ちでない方は
          <RouterLink to="/register" class="text-indigo-600 font-medium hover:underline">新規登録</RouterLink>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from '../stores/auth.js'

const router = useRouter()
const email = ref('')
const password = ref('')
const loading = ref(false)
const errorMsg = ref('')

async function handleLogin() {
  loading.value = true
  errorMsg.value = ''
  const { error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  })
  if (error) {
    errorMsg.value = 'メールアドレスまたはパスワードが正しくありません'
  } else {
    router.push('/advisor')
  }
  loading.value = false
}
</script>
