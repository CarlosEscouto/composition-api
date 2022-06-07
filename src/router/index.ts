import Setup from "@/views/Setup";
import { createRouter, createWebHistory } from "vue-router";
import Function from "@/views/Function";
import TSX from "@/views/TSX";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "function",
      component: Function,
    },
    {
      path: "/tsx",
      name: "tsx",
      component: TSX,
    },
    {
      path: "/setup",
      name: "setup",
      component: Setup,
    }
  ],
});

export default router;
