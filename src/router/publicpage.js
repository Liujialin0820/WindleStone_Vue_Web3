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
    path: "/login2",
    name: "login2",
    component: () => import("@/views/LoginPage/chat.vue"),
  },
];
