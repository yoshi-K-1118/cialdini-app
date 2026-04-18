<template>
  <div class="max-w-3xl mx-auto px-4 py-12">
    <h1 class="text-2xl font-bold text-gray-900 mb-2">{{ t('disclaimer.title') }}</h1>
    <p class="text-sm text-gray-400 mb-10">{{ t('disclaimer.updated') }}</p>

    <div class="space-y-8 text-sm text-gray-700 leading-relaxed">
      <section v-for="sec in t('disclaimer.sections')" :key="sec.title">
        <h2 class="text-base font-bold text-gray-900 mb-3">{{ sec.title }}</h2>
        <p v-for="(para, i) in sec.body.split('\n')" :key="i" :class="i < sec.body.split('\n').length - 1 ? 'mb-2' : ''">{{ para }}</p>
      </section>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
