import { createRouter, createWebHistory } from "vue-router";

import NProgress from "nprogress/nprogress.js";

// import { useAuthStore } from "@/stores";

// Main layouts
import ContentPage from "@/layouts/variations/ContentPage.vue";

const Dashboard = () => import("@/views/app/DashboardView.vue");
const Profile = () => import("@/views/app/User/UserProfile.vue");
const LogIn = () => import("@/views/app/LogIn.vue");

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

router.afterEach((to, from) => {
  NProgress.done();
});
/*eslint-enable no-unused-vars*/

export default router;
