import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PrinciplesView from '../views/PrinciplesView.vue'
import AdvisorView from '../views/AdvisorView.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomeView },
    { path: '/principles', component: PrinciplesView },
    { path: '/advisor', component: AdvisorView },
  ],
  scrollBehavior: () => ({ top: 0 }),
})
