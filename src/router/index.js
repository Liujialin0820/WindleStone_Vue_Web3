import { createRouter, createWebHistory } from "vue-router";
import publicRoutes from "./publicpage";
import deliverypage from "./deliverypage";
import { useAuthStore } from "@/stores/authStore";

const routes = [...publicRoutes, ...deliverypage];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from) => {
  const authStore = useAuthStore();
  if (!authStore.is_logined && to.name != "login") {
    return { name: "login" };
  }
});

export default router;
