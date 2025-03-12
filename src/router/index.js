import HomeView from '@/views/HomeView.vue'
import ProjectPage from '@/views/ProjectPage.vue'
import ProjectView from '@/views/ProjectView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectView,
    },
    {
      path: '/projects/:title([^/]+)',
      name: 'ProjectPage',
      component: ProjectPage,
      props: route => ({ TitleEn: route.params.title }), // Pass only TitleEn prop
    },
  ],
})

export default router
