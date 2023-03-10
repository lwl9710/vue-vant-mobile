import { RouteRecordRaw } from "vue-router";

export default [
  {
    path: "/",
    redirect: "/home"
  },
  {
    name: "Home",
    path: "home",
    component: () => import("@/pages/Home/index.vue"),
    meta: { isTabbarPage: true, title: "้ฆ้กต" }
  },
  {
    name: "User",
    path: "user",
    component: () => import("@/pages/User/index.vue"),
    meta: { isTabbarPage: true, title: "ๆ็" }
  },
  {
    name: "Test",
    path: "test",
    component: () => import("@/pages/Test/index.vue")
  }
] as Array<RouteRecordRaw>;