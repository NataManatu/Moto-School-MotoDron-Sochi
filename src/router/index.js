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
    }


  ]
})

export default router