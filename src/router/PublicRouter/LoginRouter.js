export default [
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/PublicPage/LoginPage/LoginPage.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("@/views/PublicPage/LoginPage/RegisterPage.vue"),
  },
  {
    path: "/reset-password",
    name: "reset-password",
    component: () => import("@/views/PublicPage/LoginPage/ResetPassword.vue"),
  },
  {
    path: "/active-email",
    name: "active-email",
    component: () => import("@/views/PublicPage/LoginPage/ActiveEmail.vue"),
  },
];
