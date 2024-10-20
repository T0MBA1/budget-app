import { createRouter, createWebHistory } from "vue-router";

import { useAuthStore } from "@/stores";
import NProgress from "nprogress/nprogress.js";

// import { useAuthStore } from "@/stores";

// Main layouts
import ContentPage from "@/layouts/variations/ContentPage.vue";

const Dashboard = () => import("@/views/app/DashboardView.vue");
const Profile = () => import("@/views/app/User/UserProfile.vue");
const LogIn = () => import("@/views/app/LogIn.vue");
const Menu = () => import("@/views/app/MenuView.vue");

const AccountList = () =>
  import("@/views/app/MasterData/Account/ListAccount.vue");
const AccountAdd = () =>
  import("@/views/app/MasterData/Account/AddAccount.vue");
const AccountEdit = () =>
  import("@/views/app/MasterData/Account/EditAccount.vue");

// Set all routes
const routes = [
  {
    path: "/",
    component: ContentPage,
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        component: Dashboard,
      },
      {
        path: "/profile",
        name: "profile",
        component: Profile,
      },
      {
        path: "/menu",
        name: "menu",
        component: Menu,
      },
      {
        path: "/account",
        name: "account-index",
        component: AccountList,
      },
      {
        path: "/account/add",
        name: "account-add",
        component: AccountAdd,
      },
      {
        path: "/account/:id",
        name: "account-edit",
        component: AccountEdit,
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: LogIn,
  },
];

// Create Router
const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: "active",
  linkExactActiveClass: "active",
  scrollBehavior() {
    return { left: 0, top: 0 };
  },
  routes,
});

// router.beforeEach(async (to) => {
//   // redirect to login page if not logged in and trying to access a restricted page
//   const publicPages = ["/login"];
//   const authRequired = !publicPages.includes(to.path);
//   const auth = useAuthStore();
//   if (authRequired && !auth.user) {
//     auth.returnUrl = to.fullPath;
//     return "/login";
//   }

//   if (to.name === "login" && auth.user) {
//     return "/";
//   }
// });

// NProgress
/*eslint-disable no-unused-vars*/
NProgress.configure({ showSpinner: false });

router.beforeResolve((to, from, next) => {
  NProgress.start();
  next();
});

router.beforeEach(async (to, from) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const auth = useAuthStore();
  console.log("beforeEach", auth.token, auth.user);

  // if (auth.user) {
  //   if (to.name === "login") {
  //     console.log(1);
  //     return "/";
  //   }
  //   console.log(2);
  // } else {
  //   console.log(3);
  //   return "/login";
  // }

  if (to.name === "login" && auth.user) {
    return "/";
  }
});

router.afterEach(() => {
  NProgress.done();
});
/*eslint-enable no-unused-vars*/

export default router;
