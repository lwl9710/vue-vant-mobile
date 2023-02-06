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
    meta: { isTabbarPage: true, title: "首页" }
  },
  {
    name: "User",
    path: "user",
    component: () => import("@/pages/User/index.vue"),
    meta: { isTabbarPage: true, title: "我的" }
  },
  {
    name: "Test",
    path: "test",
    component: () => import("@/pages/Test/index.vue")
  }
] as Array<RouteRecordRaw>;