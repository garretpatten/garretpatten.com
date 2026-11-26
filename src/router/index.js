import { createRouter, createWebHistory } from "vue-router";
import LandingView from "../views/LandingView.vue";
import AboutView from "../views/AboutView.vue";
import ResumeView from "../views/ResumeView.vue";
import ProjectsView from "../views/ProjectsView.vue";
import ContributionsView from "../views/ContributionsView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: LandingView,
    meta: { title: "Home" },
  },
  {
    path: "/about",
    name: "About",
    component: AboutView,
    meta: { title: "About" },
  },
  {
    path: "/resume",
    name: "Resume",
    component: ResumeView,
    meta: { title: "Resume" },
  },
  {
    path: "/projects",
    name: "Projects",
    component: ProjectsView,
    meta: { title: "Projects" },
  },
  {
    path: "/contributions",
    name: "Open Source",
    component: ContributionsView,
    meta: { title: "Open Source Contributions" },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(_, __, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }

    return { top: 0, left: 0 };
  },
});

export default router;
