import { createRouter, createWebHashHistory } from "vue-router";
import PageLayout from "@/layouts/PageLayout/index.vue";
import routes from "./routes";
import { DEFAULT_TITLE } from "@/config/website";
import NProgress from "nprogress";

const router = createRouter({
  routes: [
    {
      path: "/",
      component: PageLayout,
      children: routes
    }
  ],
  history: createWebHashHistory(),
  scrollBehavior: (to, from, savePosition) => savePosition ? savePosition : { left: 0, top: 0 }
});

router.beforeEach((to, from ,next) => {
  NProgress.start();
  const { pageColor = "#efefef", title = DEFAULT_TITLE } = to.meta || {};
  document.title = title as string;
  document.body.style.backgroundColor = pageColor as string;
  next();
});

router.afterEach(() => {
  NProgress.done();
})

export default router;