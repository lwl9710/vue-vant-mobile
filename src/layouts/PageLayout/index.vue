<template>
  <div class="page-main" :class="{'is-tabbar': isTabbar}">
    <router-view #="{ Component }">
      <keep-alive :include="catcheList">
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
  <Tabbar :show="isTabbar"></Tabbar>
</template>
<script name="TabBarLayout" lang="ts" setup>
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
  height: calc(100% - 53Px);
}
</style>