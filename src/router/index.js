import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/coursea',
      name: 'coursea',
      component: () => import('../views/CourseA.vue')
    },
    {
      path: '/courseaPro',
      name: 'courseaPro',
      component: () => import('../views/CourseApro.vue')
    }


  ]
})

export default router