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
      },
      {
        path: "account",
        name: "lmsaccount",
        redirect: { name: "lmsaccountsettings" },
        component: () =>
          import("@/views/DeliveryPage/components/Account/DeliveryAccount.vue"),
        children: [
          {
            path: "",
            name: "lmsaccountsettings",
            component: () =>
              import(
                "@/views/DeliveryPage/components/Account/components/AccountMain/AccountSettings.vue"
              ),
          },
          {
            path: "mydetails",
            name: "lmsaccountmydetails",
            component: () =>
              import(
                "@/views/DeliveryPage/components/Account/components/AccountMain/MyDetails.vue"
              ),
          },
          {
            path: "transactions",
            name: "lmsaccounttransactions",
            component: () =>
              import(
                "@/views/DeliveryPage/components/Account/components/AccountMain/AccountTransactions.vue"
              ),
          },
          {
            path: "contactus",
            name: "lmsaccountcontactus",
            component: () =>
              import(
                "@/views/DeliveryPage/components/Account/components/AccountMain/CustomerService.vue"
              ),
          },
        ],
      },
      {
        path: "courses",
        name: "lmscourses",
        component: () =>
          import("@/views/DeliveryPage/components/Courses/DeliveryCourses.vue"),
      },
      {
        path: "workbook",
        name: "lmsworkbook",
        component: () =>
          import(
            "@/views/DeliveryPage/components/Workbook/DeliveryWorkbook.vue"
          ),
      },
    ],
  },
];
