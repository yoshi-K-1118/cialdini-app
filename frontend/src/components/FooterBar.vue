<template>
  <footer class="bg-white border-t border-gray-200 mt-auto">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
        <!-- Brand -->
        <div class="flex items-center gap-2 text-gray-600">
          <svg class="w-5 h-5 text-indigo-600" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="6" r="4"/>
            <path d="M12 12c-5.33 0-8 2.69-8 5v1h16v-1c0-2.31-2.67-5-8-5z"/>
          </svg>
          <span class="text-sm font-semibold text-gray-700">影響力ガイド</span>
          <span class="text-xs text-gray-400">© 2026</span>
        </div>

        <!-- Links -->
        <nav class="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          <RouterLink to="/guide" class="text-xs text-gray-500 hover:text-indigo-600 transition-colors">{{ t('footer.guide') }}</RouterLink>
          <RouterLink to="/contact" class="text-xs text-gray-500 hover:text-indigo-600 transition-colors">{{ t('footer.contact') }}</RouterLink>
          <RouterLink to="/terms" class="text-xs text-gray-500 hover:text-indigo-600 transition-colors">{{ t('footer.terms') }}</RouterLink>
          <RouterLink to="/disclaimer" class="text-xs text-gray-500 hover:text-indigo-600 transition-colors">{{ t('footer.disclaimer') }}</RouterLink>
          <RouterLink to="/privacy" class="text-xs text-gray-500 hover:text-indigo-600 transition-colors">{{ t('footer.privacy') }}</RouterLink>
          <RouterLink to="/pricing" class="text-xs text-gray-500 hover:text-indigo-600 transition-colors">{{ t('footer.pricing') }}</RouterLink>
          <RouterLink to="/legal" class="text-xs text-gray-500 hover:text-indigo-600 transition-colors">{{ t('footer.legal') }}</RouterLink>
        </nav>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
