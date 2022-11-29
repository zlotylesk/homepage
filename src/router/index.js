import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/#oferta",
      name: "Oferta",
    },
    {
      path: "/#technologie",
      name: "Technologie",
    },
    {
      path: "/#portfolio",
      name: "Portfolio",
    },
    {
      path: "/wirtualne-cv",
      name: "Wirtualne CV",
      component: () => import("../views/VirtualCvView.vue"),
    },
  ],
});

export default router;
