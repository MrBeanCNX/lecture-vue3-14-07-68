import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/basic-essential',
      name: 'BasicEssential',
      component: () => import('../views/BasicEssential.vue'),
    },
    {
      path: '/basic-component',
      name: 'BasicComponent',
      component: () => import('../views/BasicComponent.vue'),
    }
  ]
})

export default router
