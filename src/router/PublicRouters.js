import LoginRouter from "./PublicRouter/LoginRouter";

export default [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/PublicPage/PublicPage.vue"),
  },
  ...LoginRouter,
];
