import { createI18n } from 'vue-i18n'
import ja from './locales/ja.js'
import en from './locales/en.js'

const savedLocale = localStorage.getItem('locale') || 'ja'

export const i18n = createI18n({
  legacy: false,
  locale: savedLocale,
  fallbackLocale: 'ja',
  messages: { ja, en },
})
