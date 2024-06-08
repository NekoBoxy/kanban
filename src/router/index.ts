import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../views/IndexView.vue'),
      children: [
        {
          path: '',
          component: () => import("../views/HomeView.vue")
        },
        {
          path: 'login',
          // name: 'login',
          component: () => import('../views/LoginView.vue'),
        },
        {
          path: 'logout',
          // name: 'logout',
          component: () => import('../views/LogoutView.vue'),
        },
        {
          path: 'person',
          // name: 'person',
          component: () => import('../views/PersonView.vue'),
        },
        {
          path: 'boards',
          // name: 'boards',
          component: () => import('../views/BoardsView.vue'),
        },
        {
          path: 'board/:id',
          // name: 'board/:id',
          component: () => import('../views/BoardView.vue'),
        },
      ]
    },
  ]
})

export default router
