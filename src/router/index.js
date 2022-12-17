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
    },
    {
      path: '/courseContr',
      name: 'courseContr',
      component: () => import('../views/CourseContr.vue')
    },
    {
      path: '/courseA_Contr',
      name: 'courseA_Contr',
      component: () => import('../views/CourseA_Contr.vue')
    },
    {
      path: '/CourseGorod',
      name: 'CourseGorod',
      component: () => import('../views/CourseGorod.vue')
    },
    {
      path: '/CourseIndivid',
      name: 'CourseIndivid',
      component: () => import('../views/CourseIndivid.vue')
    },
    {
      path: '/CourseOneVisit',
      name: 'CourseOneVisit',
      component: () => import('../views/CourseOneVisit.vue')
    },
    {
      path: '/CourseTrialSession',
      name: 'CourseTrialSession',
      component: () => import('../views/CourseTrialSession.vue')
    },
    {
      path: '/CourseMoped',
      name: 'CourseMoped',
      component: () => import('../views/CourseMoped.vue')
    },
    {
      path: '/CourseChild',
      name: 'CourseChild',
      component: () => import('../views/CourseChild.vue')
    }


  ]
})

export default router