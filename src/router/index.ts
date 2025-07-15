import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/basic-essential',
      name: 'BasicEssential',
      component: () => import('../views/BasicEssential.vue'),
    },
    {
      path: '/basic-component',
      name: 'BasicComponent',
      component: () => import('../views/BasicComponent.vue'),
    },
    {
      path: '/basic-router',
      name: 'BasicRouter',
      component: () => import('../views/ฺBasicRouter.vue'),
    },
    {
      path: '/product/:id',
      name: 'ProductPage',
      component: () => import('../views/ProductPage.vue'),
    },
    {
      path: '/default',
      component: () => import('../layouts/DefaultLayout.vue'),
      children: [
        {
          path: 'home',
          name: 'home',
          component: () => import('../views/HomeView.vue'),
        },
        {
          path: 'about',
          name: 'about',
          component: () => import('../views/AboutView.vue'),
        },
      ]
    },
    {
      path: '/abc',
      redirect: '/basic-essential'
    },
    {
      path: '/about',
      name: 'AboutPage',
      component: () => import('@/views/AboutView.vue'),
      alias: ['/foo', '/bar', '/baz']
    },
    {
      path: '/home',
      name: 'Home',
      component: import('../views/HomeView.vue'),
      meta: { requireAuth: true }
    },
    {
      path: '/login',
      name: 'LoginPage',
      component: () => import('../views/LoginPage.vue'),
    },
  ]
})

const isLogin = false

router.beforeEach((to, form, next) => {
  if (
    to.name !== 'Login' && 
    to.meta?.requireAuth &&
    !isLogin
  ) {
    next({ name: 'LoginPage' })
  } else {
    next()
  }
})

export default router
