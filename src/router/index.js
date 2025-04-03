import AdminPage from '@/views/AdminPage.vue'
import ContactPage from '@/views/ContactPage.vue'
import HomeView from '@/views/HomeView.vue'
import LoginAdminView from '@/views/LoginAdminView.vue'
import PrivacyView from '@/views/PrivacyView.vue'
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
    {
      path: '/contact',
      name: 'ContactPage',
      component: ContactPage,
    },
    {
      path: '/admin',
      name: 'AdminPage',
      component: AdminPage,
    },
    {
      path: '/admin/login',
      name: 'LoginAdmin',
      component: LoginAdminView,
    },
    {
      path: '/privacy',
      name: 'PravacyPage',
      component: PrivacyView,
    },
  ],
})

export default router
