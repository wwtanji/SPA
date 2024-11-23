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
      path: '/destination/:id/:slug', // Шлях з параметрами
      name: 'destination.show',
      component: () => import('../views/DestinationView.vue'),
      // eslint-disable-next-line no-undef
      props: route=> ({id: parseInt(route.params.id)}),
    },
  ],
})

export default router
