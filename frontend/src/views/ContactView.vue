<template>
  <div class="max-w-2xl mx-auto px-4 py-12">
    <div class="text-center mb-10">
      <h1 class="text-2xl font-bold text-gray-900 mb-2">お問い合わせ</h1>
      <p class="text-gray-500 text-sm">ご質問・ご要望・不具合報告はこちらからお送りください</p>
    </div>

    <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">

      <!-- Success -->
      <div v-if="submitted" class="text-center py-8">
        <div class="text-5xl mb-4">✅</div>
        <h2 class="text-lg font-bold text-gray-900 mb-2">送信完了しました</h2>
        <p class="text-gray-500 text-sm mb-6">お問い合わせありがとうございます。通常2〜3営業日以内にご返信いたします。</p>
        <button @click="submitted = false" class="text-indigo-600 font-medium hover:underline text-sm">
          続けてお問い合わせする
        </button>
      </div>

      <form v-else @submit.prevent="handleSubmit" class="space-y-5">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1.5">お名前 <span class="text-red-500">*</span></label>
          <input v-model="form.name" type="text" required
            class="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-transparent"
            placeholder="山田 太郎" />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1.5">メールアドレス <span class="text-red-500">*</span></label>
          <input v-model="form.email" type="email" required
            class="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-transparent"
            placeholder="example@email.com" />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1.5">お問い合わせ種別 <span class="text-red-500">*</span></label>
          <select v-model="form.category" required
            class="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-transparent bg-white">
            <option value="" disabled>選択してください</option>
            <option value="bug">不具合・エラーの報告</option>
            <option value="billing">料金・支払いについて</option>
            <option value="account">アカウントについて</option>
            <option value="feature">機能のご要望</option>
            <option value="other">その他</option>
          </select>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1.5">お問い合わせ内容 <span class="text-red-500">*</span></label>
          <textarea v-model="form.message" required rows="6"
            class="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-transparent resize-none"
            placeholder="お問い合わせ内容を具体的にご記入ください。不具合の場合は、発生状況・使用端末・ブラウザ名もお知らせいただけると助かります。"></textarea>
          <div class="text-right text-xs text-gray-400 mt-1">{{ form.message.length }} 文字</div>
        </div>

        <div v-if="errorMsg" class="bg-red-50 text-red-600 text-sm rounded-xl px-4 py-3">
          {{ errorMsg }}
        </div>

        <button type="submit" :disabled="loading"
          class="w-full bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white font-semibold py-3 rounded-xl transition-colors text-sm">
          {{ loading ? '送信中...' : '送信する' }}
        </button>

        <p class="text-center text-xs text-gray-400">
          送信いただいた内容は<RouterLink to="/privacy" class="text-indigo-500 hover:underline">プライバシーポリシー</RouterLink>に従い適切に取り扱います
        </p>
      </form>
    </div>

    <!-- Alternative contact -->
    <div class="mt-6 bg-gray-50 rounded-2xl p-5 text-center">
      <p class="text-sm text-gray-500 mb-1">メールで直接お問い合わせの場合</p>
      <p class="text-sm font-medium text-indigo-600">support@cialdini-guide.com</p>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

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

  // Formspree または同等のサービスに送信（URLは環境変数等で管理推奨）
  try {
    const apiBase = import.meta.env.VITE_API_BASE_URL || ''
    const res = await fetch(`${apiBase}/api/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
    if (!res.ok) throw new Error('送信に失敗しました')
    submitted.value = true
    form.name = ''
    form.email = ''
    form.category = ''
    form.message = ''
  } catch (e) {
    errorMsg.value = 'エラーが発生しました。時間をおいて再度お試しいただくか、メールにてご連絡ください。'
  } finally {
    loading.value = false
  }
}
</script>
