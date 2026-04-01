<template>
  <div class="min-h-[calc(100vh-3.5rem)] bg-slate-50 flex items-center justify-center px-4">
    <div class="text-center max-w-md">
      <div class="text-6xl mb-6">✅</div>
      <h1 class="text-2xl font-bold text-gray-900 mb-3">アップグレード完了！</h1>
      <p class="text-gray-500 mb-2">プレミアムプランへの変更が完了しました。</p>
      <p class="text-gray-500 mb-8">AIアドバイスが無制限でご利用いただけます。</p>
      <RouterLink to="/advisor"
        class="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-xl transition-colors">
        AIアドバイスを使う →
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { fetchProfile } from '../stores/auth.js'

onMounted(() => fetchProfile())
</script>
