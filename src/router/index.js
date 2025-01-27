import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Project from "@/views/Project.vue";
import ProjectSingle from "@/views/ProjectSingle.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/project",
      name: "project",
      component: Project,
    },
    {
      path: "/projectsingle",
      name: "projectsingle",
      component: ProjectSingle,
    },
  ],
});

export default router;
