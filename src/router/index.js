import { createRouter, createWebHistory } from 'vue-router'
import publicRoutes from './publicpage';


const routes = [
  ...publicRoutes,
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
