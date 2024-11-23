/* eslint-disable no-unused-vars */
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'vue-active-link',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/destination/:id/:slug',
      name: 'destination.show',
      component: () => import('../views/DestinationView.vue'),
      props: (route) => ({ ...route.params, id: parseInt(route.params.id) }),
      children: [
        {
          path: '/destination/:id/:slug/:experienceSlug',
          name: 'experience.show',
          component: () => import('../views/ExperienceShow.vue'),
          props: route => ({ ...route.params, id: parseInt(route.params.id) })
        }
      ]
    }
  ],
})

export default router
