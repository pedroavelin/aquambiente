/**
 * router/index.ts
 *
 * Manual routes for ./src/pages/*.vue
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/pages/index.vue'
import Contact from '@/pages/contact.vue'
import About from '@/pages/about.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Index,
    },
    {
      path: '/contactos',
      component: Contact,
    },
    {
      path: '/about',
      component: About,
    },
  ],
})

export default router
