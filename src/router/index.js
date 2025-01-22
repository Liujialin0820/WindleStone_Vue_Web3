import { createRouter, createWebHistory } from "vue-router";
import publicRoutes from "./PublicRouters";
import deliverypage from "./DeliveryRouters";
import AdminRouters from "./AdminRouters";
import { useAuthStore } from "@/stores/authStore";

const routes = [...publicRoutes, ...deliverypage, ...AdminRouters];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

const publicPages = publicRoutes.map((route) => route.name); // Extract names from publicRoutes

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  const authRequired = !publicPages.includes(to.name);

  if (authRequired && !authStore.is_logined) {
    return next({ name: "login" });
  }

  next();
});

export default router;
