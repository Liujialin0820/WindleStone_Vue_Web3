export default [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/PublicPage/PublicPage.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/LoginPage/LoginPage.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("@/views/LoginPage/RegisterPage.vue"),
  },
  {
    path: "/reset-password",
    name: "reset-password",
    component: () => import("@/views/LoginPage/ResetPassword.vue"),
  },
];
