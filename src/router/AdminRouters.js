export default [
  {
    path: "/admin",
    name: "admin",
    component: () => import("@/views/AdminPage/AdminPage.vue"),
    children: [
      {
        path: "adsmanagement",
        name: "adsmanagement",
        component: () =>
          import(
            "@/views/AdminPage/PublicPageAdmin/AdsManagement/AdsManagement.vue"
          ),
      },
    ],
  },
];
