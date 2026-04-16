import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import './assets/main.css'
import { initAuth } from './stores/auth.js'
import { i18n } from './i18n.js'

initAuth()
createApp(App).use(router).use(i18n).mount('#app')
