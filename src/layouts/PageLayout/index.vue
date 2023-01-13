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
import Tabbar from "./components/Tabbar/index.vue";
const catcheList = ref([ "Home", "User" ]);
const route = useRoute();
const isTabbar = computed(() => route.meta.isTabbarPage) as ComputedRef<boolean>;
</script>
<style lang="scss">
.page-main {
  overflow: auto;
}
.page-main.is-tabbar {
  height: calc(100% - 46Px);
}
</style>
<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>