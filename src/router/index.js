import { createRouter, createWebHistory } from 'vue-router'
import LandingView from '../views/LandingView.vue'
import AboutView from '../views/AboutView.vue'
import ResumeView from '../views/ResumeView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import HobbiesView from '../views/HobbiesView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: LandingView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  },
  {
    path: '/resume',
    name: 'Resume',
    component: ResumeView
  },
  {
    path: '/projects',
    name: 'Projects',
    component: ProjectsView
  },
  {
    path: '/hobbies',
    name: 'Hobbies',
    component: HobbiesView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

