<template>
  <div class="max-w-2xl mx-auto px-4 py-12">
    <div class="text-center mb-10">
      <h1 class="text-2xl font-bold text-gray-900 mb-2">{{ t('contact.title') }}</h1>
      <p class="text-gray-500 text-sm">{{ t('contact.desc') }}</p>
    </div>

    <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">

      <!-- Success -->
      <div v-if="submitted" class="text-center py-8">
        <div class="text-5xl mb-4">✅</div>
        <h2 class="text-lg font-bold text-gray-900 mb-2">{{ t('contact.successTitle') }}</h2>
        <p class="text-gray-500 text-sm mb-6">{{ t('contact.successDesc') }}</p>
        <button @click="submitted = false" class="text-indigo-600 font-medium hover:underline text-sm">
          {{ t('contact.continueBtn') }}
        </button>
      </div>

      <form v-else @submit.prevent="handleSubmit" class="space-y-5">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1.5">{{ t('contact.name') }} <span class="text-red-500">*</span></label>
          <input v-model="form.name" type="text" required
            class="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-transparent"
            :placeholder="t('contact.namePlaceholder')" />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1.5">{{ t('contact.email') }} <span class="text-red-500">*</span></label>
          <input v-model="form.email" type="email" required
            class="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-transparent"
            placeholder="example@email.com" />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1.5">{{ t('contact.category') }} <span class="text-red-500">*</span></label>
          <select v-model="form.category" required
            class="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-transparent bg-white">
            <option value="" disabled>{{ t('contact.categoryPlaceholder') }}</option>
            <option value="bug">{{ t('contact.categoryOptions.bug') }}</option>
            <option value="billing">{{ t('contact.categoryOptions.billing') }}</option>
            <option value="account">{{ t('contact.categoryOptions.account') }}</option>
            <option value="feature">{{ t('contact.categoryOptions.feature') }}</option>
            <option value="other">{{ t('contact.categoryOptions.other') }}</option>
          </select>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1.5">{{ t('contact.message') }} <span class="text-red-500">*</span></label>
          <textarea v-model="form.message" required rows="6"
            class="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-transparent resize-none"
            :placeholder="t('contact.messagePlaceholder')"></textarea>
          <div class="text-right text-xs text-gray-400 mt-1">{{ form.message.length }} {{ t('contact.charCount') }}</div>
        </div>

        <div v-if="errorMsg" class="bg-red-50 text-red-600 text-sm rounded-xl px-4 py-3">
          {{ errorMsg }}
        </div>

        <button type="submit" :disabled="loading"
          class="w-full bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white font-semibold py-3 rounded-xl transition-colors text-sm">
          {{ loading ? t('contact.loading') : t('contact.submit') }}
        </button>

        <p class="text-center text-xs text-gray-400">
          {{ t('contact.privacyNote') }}<RouterLink to="/privacy" class="text-indigo-500 hover:underline">{{ t('footer.privacy') }}</RouterLink>{{ t('contact.privacyNote2') }}
        </p>
      </form>
    </div>

    <!-- Alternative contact -->
    <div class="mt-6 bg-gray-50 rounded-2xl p-5 text-center">
      <p class="text-sm text-gray-500 mb-1">{{ t('contact.directEmail') }}</p>
      <p class="text-sm font-medium text-indigo-600">y.k199xtbma@gmail.com</p>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const submitted = ref(false)
const loading = ref(false)
const errorMsg = ref('')

const form = reactive({
  name: '',
  email: '',
  category: '',
  message: '',
})

async function handleSubmit() {
  if (!form.name || !form.email || !form.category || !form.message) return
  loading.value = true
  errorMsg.value = ''

  try {
    const res = await fetch('https://formspree.io/f/mgoplzoy', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        category: form.category,
        message: form.message,
      }),
    })
    if (!res.ok) throw new Error('failed')
    submitted.value = true
    form.name = ''
    form.email = ''
    form.category = ''
    form.message = ''
  } catch (e) {
    errorMsg.value = t('contact.error')
  } finally {
    loading.value = false
  }
}
</script>
