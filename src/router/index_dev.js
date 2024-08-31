import { createRouter, createWebHashHistory } from "vue-router";

import NProgress from "nprogress/nprogress.js";

import LayoutSimple from "@/layouts/variations/Simple.vue";
import LayoutBackendBoxed from "@/layouts/variations/BackendBoxed.vue";

// Backend Boxed: Dashboard
const BackendBoxedDashboard = () =>
  import("@/views/backend-boxed/DashboardView.vue");

// Frontend: Landing
const Landing = () => import("@/views/starter/LandingView.vue");

// Set all routes
const routes = [
  {
    path: "/",
    component: LayoutSimple,
    children: [
      {
        path: "",
        name: "landing",
        component: Landing,
      },
    ],
  },
  /*
  |
  |--------------------------------------------------------------------------
  | Backend Boxed Routes
  |--------------------------------------------------------------------------
  |
  */
  {
    path: "/backend-boxed",
    component: LayoutBackendBoxed,
    children: [
      {
        path: "",
        name: "backend-boxed-dashboard",
        component: BackendBoxedDashboard,
      },
    ],
  },
];

// Create Router
const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: "active",
  linkExactActiveClass: "",
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
