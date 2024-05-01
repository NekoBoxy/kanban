import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../views/IndexView.vue'),
      children: [
        {
          path: '/',
          component: () => import("../views/HomeView.vue")
        },
        {
          path: 'login',
          name: 'login',
          component: () => import('../views/LoginView.vue'),
        },
        {
          path: 'logout',
          name: 'logout',
          component: () => import('../views/LogoutView.vue'),
        },
      ]
    },
  ]
})

export default router
