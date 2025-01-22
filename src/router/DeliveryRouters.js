import DeliveryAccount from "./DeliveryRouter/DeliveryAccountRouter";
import DeliveryCourse from "./DeliveryRouter/DeliveryCourseRouter";
import DeliveryHome from "./DeliveryRouter/DeliveryHomeRouter";
import DeliveryWorkbook from "./DeliveryRouter/DeliveryWorkbookRouter";

export default [
  {
    path: "/lms",
    name: "lms",
    component: () => import("@/views/DeliveryPage/DeliveryPage.vue"),
    children: [
      {
        path: "",
        name: "lmsdefault",
        redirect: { name: "lmshome" },
      },
      {
        path: "home",
        name: "lmshome",
        component: () =>
          import("@/views/DeliveryPage/components/Home/DeliveryHome.vue"),
        children: DeliveryHome,
      },
      {
        path: "account",
        name: "lmsaccount",
        redirect: { name: "lmsaccountsettings" },
        component: () =>
          import("@/views/DeliveryPage/components/Account/DeliveryAccount.vue"),
        children: DeliveryAccount,
      },
      {
        path: "courses",
        name: "lmscourses",
        component: () =>
          import("@/views/DeliveryPage/components/Courses/DeliveryCourses.vue"),
        children: DeliveryCourse,
      },
      {
        path: "workbook",
        name: "lmsworkbook",
        component: () =>
          import(
            "@/views/DeliveryPage/components/Workbook/DeliveryWorkbook.vue"
          ),
        children: DeliveryWorkbook,
      },
    ],
  },
];
