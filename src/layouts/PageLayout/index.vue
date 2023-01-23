<template>
<div class="page-main" :class="{'is-tabbar': isTabbar}">
  <router-view #="{ Component }">
    <transition name="fade" mode="out-in">
      <keep-alive :include="catcheList">
          <component :is="Component" />
      </keep-alive>
    </transition>
  </router-view>
</div>
<Tabbar v-if="isTabbar"></Tabbar>
</template>
<script name="PageLayout" lang="ts" setup>
import { ComputedRef } from "vue";
import { CACHE_PAGE_LIST } from "@/config/website";
import Tabbar from "./components/Tabbar/index.vue";
const catcheList = ref(CACHE_PAGE_LIST);
const route = useRoute();
const isTabbar = computed(() => route.meta.isTabbarPage) as ComputedRef<boolean>;
</script>
<style lang="scss">
#app {
  overflow: auto;
}
.page-main {
  overflow: auto;
  width: 100%;
}
.page-main.is-tabbar {
  height: calc(100% - 50Px);
  height: calc(100% - 50Px - constant(safe-area-inset-bottom));
  height: calc(100% - 50Px - env(safe-area-inset-bottom));
}
</style>
<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>