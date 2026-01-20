import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ShipsView from '@/views/ShipsView.vue'
import CruisesView from '@/views/CruisesView.vue'
import TeamView from '@/views/TeamView.vue'
import ContactView from '@/views/ContactView.vue'

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
      path: '/ships',
      name: 'ships',
      component: ShipsView,
    },
    {
      path: '/ships/:ship',
      name: 'detail_ship',
      component: () => import('@/views/DetailsShipView.vue'),
      props: true,
    },

    {
      path: '/cruises',
      name: 'cruises',
      component: CruisesView,
    },
    {
      path: '/cruises/:cruise',
      name: 'detail_cruise',
      component: () => import('@/views/DetailsCruiseView.vue'),
      props: true,
    },

    {
      path: '/team',
      name: 'team',
      component: TeamView,
    },

    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },
  ],
})

export default router
