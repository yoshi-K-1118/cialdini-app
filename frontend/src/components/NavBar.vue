<template>
  <nav class="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-14">
        <!-- Logo -->
        <RouterLink to="/" class="flex items-center gap-2 font-bold text-gray-900 hover:text-indigo-700 transition-colors">
          <svg class="w-6 h-6 text-indigo-600" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="6" r="4"/>
            <path d="M12 12c-5.33 0-8 2.69-8 5v1h16v-1c0-2.31-2.67-5-8-5z"/>
          </svg>
          <span class="text-base">影響力ガイド</span>
        </RouterLink>

        <!-- Nav links -->
        <div class="flex items-center gap-1">
          <RouterLink
            to="/principles"
            :class="['hidden md:block px-3 py-1.5 rounded-md text-sm font-medium transition-colors',
              $route.path === '/principles' ? 'bg-indigo-50 text-indigo-700' : 'text-gray-600 hover:bg-gray-100']"
          >📚 法則を学ぶ</RouterLink>

          <RouterLink
            to="/advisor"
            :class="['hidden md:block px-3 py-1.5 rounded-md text-sm font-medium transition-colors',
              $route.path === '/advisor' ? 'bg-indigo-50 text-indigo-700' : 'text-gray-600 hover:bg-gray-100']"
          >🤖 AIに相談</RouterLink>

          <!-- Not logged in -->
          <template v-if="!authStore.loading && !authStore.user">
            <RouterLink to="/login" class="px-2 py-1.5 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-100 transition-colors">
              <span class="hidden sm:inline">ログイン</span>
              <span class="sm:hidden">ログイン</span>
            </RouterLink>
            <RouterLink to="/register" class="ml-1 px-2 py-1.5 rounded-md text-sm font-semibold bg-indigo-600 text-white hover:bg-indigo-700 transition-colors">
              <span class="hidden sm:inline">無料で始める</span>
              <span class="sm:hidden">登録</span>
            </RouterLink>
          </template>

          <!-- Logged in -->
          <template v-else-if="authStore.user">
            <!-- Usage badge -->
            <span v-if="authStore.profile?.is_premium"
              class="hidden sm:inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-bold bg-amber-400 text-amber-900">
              ✨ PRO
            </span>
            <span v-else-if="authStore.profile"
              class="hidden sm:inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
              {{ authStore.profile.monthly_usage }}/5回
            </span>

            <!-- User dropdown -->
            <div class="relative ml-1" ref="dropdownRef">
              <button @click="dropdownOpen = !dropdownOpen"
                class="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">
                <span class="hidden sm:inline truncate max-w-[120px]">{{ authStore.user.email?.split('@')[0] }}</span>
                <span class="text-gray-400">▾</span>
              </button>
              <div v-if="dropdownOpen"
                class="absolute right-0 mt-1 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-1 z-50">
                <RouterLink to="/pricing" @click="dropdownOpen = false"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                  💳 プランを見る
                </RouterLink>
                <hr class="my-1 border-gray-100">
                <button @click="handleSignOut"
                  class="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50">
                  ログアウト
                </button>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { authStore, signOut } from '../stores/auth.js'

const router = useRouter()
const dropdownOpen = ref(false)
const dropdownRef = ref(null)

async function handleSignOut() {
  dropdownOpen.value = false
  try {
    await signOut()
  } catch (e) {
    authStore.user = null
    authStore.profile = null
  }
  router.push('/')
}

function handleClickOutside(e) {
  if (dropdownRef.value && !dropdownRef.value.contains(e.target)) {
    dropdownOpen.value = false
  }
}

onMounted(() => document.addEventListener('click', handleClickOutside))
onUnmounted(() => document.removeEventListener('click', handleClickOutside))
</script>
