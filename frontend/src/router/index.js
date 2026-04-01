import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PrinciplesView from '../views/PrinciplesView.vue'
import AdvisorView from '../views/AdvisorView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import PricingView from '../views/PricingView.vue'
import SuccessView from '../views/SuccessView.vue'
import { authStore } from '../stores/auth.js'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomeView },
    { path: '/principles', component: PrinciplesView },
    { path: '/advisor', component: AdvisorView, meta: { requiresAuth: true } },
    { path: '/login', component: LoginView },
    { path: '/register', component: RegisterView },
    { path: '/pricing', component: PricingView },
    { path: '/success', component: SuccessView },
  ],
  scrollBehavior: () => ({ top: 0 }),
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !authStore.loading && !authStore.user) {
    next('/login')
  } else {
    next()
  }
})

export default router
