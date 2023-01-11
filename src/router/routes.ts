import { RouteRecordRaw } from "vue-router";
import TabbarLayout from "@/layouts/TabBarLayout/index.vue";

export default [
  {
    path: "/",
    redirect: "/tabbar/home"
  },
  {
    path: "/tabbar",
    component: TabbarLayout,
    children: [
      {
        name: "Home",
        path: "home",
        component: () => import("@/pages/Home/index.vue"),
        meta: { isTabbarPage: true }
      },
      {
        name: "User",
        path: "user",
        component: () => import("@/pages/User/index.vue"),
        meta: { isTabbarPage: true }
      }
    ]
  }
] as Array<RouteRecordRaw>;