export default [
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
];
