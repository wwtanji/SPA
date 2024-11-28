import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'vue-active-link',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('../views/NotFoundView.vue'),

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
          component: () => import('../views/ExperienceView.vue'),
          props: (route) => ({ ...route.params, id: parseInt(route.params.id) })
        }
      ]
    }
  ],
})

export default router
