import { createRouter, createWebHistory } from "vue-router";
import LandingView from "../views/LandingView.vue";

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
    component: () => import("../views/AboutView.vue"),
    meta: { title: "About" },
  },
  {
    path: "/resume",
    name: "Resume",
    component: () => import("../views/ResumeView.vue"),
    meta: { title: "Resume" },
  },
  {
    path: "/projects",
    name: "Projects",
    component: () => import("../views/ProjectsView.vue"),
    meta: { title: "Projects" },
  },
  {
    path: "/hobbies",
    name: "Hobbies",
    component: () => import("../views/HobbiesView.vue"),
    meta: { title: "Hobbies" },
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
