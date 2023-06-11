import { createRouter, createWebHistory } from 'vue-router'
import principal from '../views/principal.vue'
import deportes from '../views/deportes.vue'
import galeria from '../views/galeria.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'principal',
      component: principal
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //component: () => import('../views/AboutView.vue')
    },
    {
      path: '/deportes',
      name: 'deportes',
      component: deportes
    },
    {
      path: '/galeria',
      name: 'galeria',
      component: galeria
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
})

export default router
