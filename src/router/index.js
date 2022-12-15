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
      path: '/coursePro',
      name: 'coursePro',
      component: () => import('../views/CoursePro.vue')
    },
    {
      path: '/courseA_Pro',
      name: 'courseA_Pro',
      component: () => import('../views/CourseA_Pro.vue')
    }



  ]
})

export default router