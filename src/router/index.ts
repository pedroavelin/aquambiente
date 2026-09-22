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
import Academia from '@/pages/academia.vue'
import ProjectsPage from '@/pages/projects.vue'

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
    {
      path: '/academia',
      component: Academia,
    },
    {
      path: '/projects',
      component: ProjectsPage,
    },
    {
      path: '/projectos',
      component: ProjectsPage,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }

    if (to.hash) {
      return {
        el: to.hash,
        top: 110,
        behavior: 'smooth',
      }
    }

    return {
      top: 0,
      left: 0,
      behavior: 'smooth',
    }
  },
})

export default router
