import { RouteRecordRaw } from "vue-router";

export default [
  {
    name: "Home",
    path: "/",
    component: () => import("@/pages/Home/index.vue")
  },
  {
    name: "About",
    path: "/about",
    component: () => import("@/pages/About/index.vue")
  }
] as Array<RouteRecordRaw>;