<template>
  <div class="max-w-3xl mx-auto px-4 py-12">
    <h1 class="text-2xl font-bold text-gray-900 mb-2">{{ t('privacy.title') }}</h1>
    <p class="text-sm text-gray-400 mb-10">{{ t('privacy.updated') }}</p>

    <div class="space-y-8 text-sm text-gray-700 leading-relaxed">
      <section v-for="sec in t('privacy.sections')" :key="sec.title">
        <h2 class="text-base font-bold text-gray-900 mb-3">{{ sec.title }}</h2>

        <!-- Body text -->
        <p v-if="sec.body" class="mb-2">{{ sec.body }}</p>

        <!-- Bullet list -->
        <ul v-if="sec.items" class="list-disc pl-5 space-y-1">
          <li v-for="item in sec.items" :key="item"><span v-html="item"></span></li>
        </ul>

        <!-- Third-party service cards -->
        <div v-if="sec.services" class="space-y-3">
          <div v-for="svc in sec.services" :key="svc.name" class="bg-gray-50 rounded-xl p-4">
            <div class="font-semibold text-gray-800 mb-1">{{ svc.name }}</div>
            <p class="text-gray-600">{{ svc.desc }}</p>
          </div>
        </div>

        <!-- Contact section with link -->
        <p v-if="sec.bodyWithLink">
          {{ sec.contactPre }}<RouterLink to="/contact" class="text-indigo-600 hover:underline">{{ t('privacy.contactLink') }}</RouterLink>{{ sec.contactPost }}
        </p>
      </section>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
