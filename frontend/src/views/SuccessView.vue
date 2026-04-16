<template>
  <div class="min-h-[calc(100vh-3.5rem)] bg-slate-50 flex items-center justify-center px-4">
    <div class="text-center max-w-md">
      <div class="text-6xl mb-6">✅</div>
      <h1 class="text-2xl font-bold text-gray-900 mb-3">{{ t('success.title') }}</h1>
      <p class="text-gray-500 mb-2">{{ t('success.desc1') }}</p>
      <p class="text-gray-500 mb-8">{{ t('success.desc2') }}</p>
      <RouterLink to="/advisor"
        class="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-xl transition-colors">
        {{ t('success.btn') }}
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { fetchProfile } from '../stores/auth.js'

const { t } = useI18n()
onMounted(() => fetchProfile())
</script>
