import { createRouter, createWebHistory } from "vue-router";

import { useAuthStore } from "@/stores";
import NProgress from "nprogress/nprogress.js";

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
