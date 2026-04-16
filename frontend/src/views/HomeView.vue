<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-indigo-600 to-violet-600 text-white py-20 px-4">
      <div class="max-w-3xl mx-auto text-center">
        <div class="flex justify-center mb-6">
          <svg class="w-20 h-20 text-white opacity-90" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="6" r="4"/>
            <path d="M12 12c-5.33 0-8 2.69-8 5v1h16v-1c0-2.31-2.67-5-8-5z"/>
          </svg>
        </div>
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
          {{ t('home.heroTitle') }}
        </h1>
        <p class="text-indigo-100 text-base sm:text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
          {{ t('home.heroDesc') }}
        </p>
        <div class="flex flex-col sm:flex-row gap-3 justify-center">
          <RouterLink
            to="/principles"
            class="inline-block bg-white text-indigo-700 font-semibold px-6 py-3 rounded-xl shadow hover:bg-indigo-50 transition-colors"
          >
            {{ t('home.learnBtn') }}
          </RouterLink>
          <RouterLink
            to="/advisor"
            class="inline-block border-2 border-white text-white font-semibold px-6 py-3 rounded-xl hover:bg-white hover:text-indigo-700 transition-colors"
          >
            {{ t('home.advisorBtn') }}
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- 7 Principles Grid -->
    <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="text-center mb-10">
        <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">{{ t('home.principlesTitle') }}</h2>
        <p class="text-gray-500 text-sm sm:text-base">{{ t('home.principlesDesc') }}</p>
      </div>
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        <RouterLink
          v-for="p in principles"
          :key="p.id"
          to="/principles"
          class="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md hover:border-indigo-200 transition-all cursor-pointer group"
        >
          <div class="text-3xl mb-2">{{ p.emoji }}</div>
          <div class="font-bold text-gray-900 text-sm mb-1 group-hover:text-indigo-700 transition-colors">{{ p.name }}</div>
          <div class="text-xs text-gray-400 mb-2">{{ p.subtitle }}</div>
          <div class="text-xs text-gray-600 leading-relaxed line-clamp-2">{{ p.description.split('。')[0] }}。</div>
        </RouterLink>
      </div>
    </section>

    <!-- How to use -->
    <section class="bg-white py-16 px-4">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-10">
          <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">{{ t('home.howTitle') }}</h2>
          <p class="text-gray-500 text-sm sm:text-base">{{ t('home.howDesc') }}</p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div class="text-center">
            <div class="w-14 h-14 bg-indigo-100 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4">✏️</div>
            <div class="text-sm font-bold text-indigo-600 mb-1">{{ t('home.step1') }}</div>
            <div class="font-bold text-gray-900 mb-2">{{ t('home.step1Title') }}</div>
            <div class="text-sm text-gray-500 leading-relaxed">{{ t('home.step1Desc') }}</div>
          </div>
          <div class="text-center">
            <div class="w-14 h-14 bg-violet-100 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4">📖</div>
            <div class="text-sm font-bold text-violet-600 mb-1">{{ t('home.step2') }}</div>
            <div class="font-bold text-gray-900 mb-2">{{ t('home.step2Title') }}</div>
            <div class="text-sm text-gray-500 leading-relaxed">{{ t('home.step2Desc') }}</div>
          </div>
          <div class="text-center">
            <div class="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4">🚀</div>
            <div class="text-sm font-bold text-emerald-600 mb-1">{{ t('home.step3') }}</div>
            <div class="font-bold text-gray-900 mb-2">{{ t('home.step3Title') }}</div>
            <div class="text-sm text-gray-500 leading-relaxed">{{ t('home.step3Desc') }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-indigo-600 py-16 px-4">
      <div class="max-w-2xl mx-auto text-center">
        <div class="text-4xl mb-4">🤖</div>
        <h2 class="text-2xl sm:text-3xl font-bold text-white mb-3">
          {{ t('home.ctaTitle') }}
        </h2>
        <p class="text-indigo-200 mb-8 text-sm sm:text-base">
          {{ t('home.ctaDesc') }}
        </p>
        <RouterLink
          to="/advisor"
          class="inline-block bg-white text-indigo-700 font-bold px-8 py-3 rounded-xl shadow hover:bg-indigo-50 transition-colors"
        >
          {{ t('home.ctaBtn') }}
        </RouterLink>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { principles } from '../data/principles.js'
const { t } = useI18n()
</script>
