import { createRouter, createWebHistory } from 'vue-router'
import { HomeView, LoginView, UsersView, UserData } from '@/views'
import { useUserStore } from '@/stores/userStore'
import { LayoutView } from '@/components'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: LayoutView,
      meta: {
        requiresAuth: true
      },
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView
        },
        {
          path: '/users',
          name: 'usersList',
          component: UsersView,

        },
        {
          path: '/users/:id',
          name: 'userdetails',
          component: UserData,

        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    }
  ]
})
router.beforeEach((to, from, next) => {
  const userStore = useUserStore()
  if (to.meta.requiresAuth && !userStore.user.isAdmin) {
    next({ name: 'login' })
  } else {
    next()
  }
})

export default router
