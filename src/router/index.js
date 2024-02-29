import { createRouter, createWebHistory } from 'vue-router'
import { HomeView, LoginView } from '@/views'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/',
      name: 'home',
      component: HomeView
    }
  ]
})

export default router
