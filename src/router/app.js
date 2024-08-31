import { createRouter, createWebHistory } from "vue-router";

import NProgress from "nprogress/nprogress.js";

// Main layouts
import LayoutBackendBoxed from "@/layouts/variations/BackendBoxed.vue";

const Dashboard = () => import("@/views/app/DashboardView.vue");
const Profile = () => import("@/views/app/User/UserProfile.vue");
const LogIn = () => import("@/views/app/LogIn.vue");

// Set all routes
const routes = [
  {
    path: "/",
    component: LayoutBackendBoxed,
    children: [
      {
        path: "/",
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
    path: "/signin",
    name: "signin",
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
