<template>
  <router-view #="{ Component }">
    <keep-alive :include="catcheList">
      <component :is="Component" />
    </keep-alive>
  </router-view>
  <Tabbar></Tabbar>
</template>
<script name="TabBarLayout" lang="ts" setup>
import Tabbar from "./components/Tabbar/index.vue";
const catcheList = ref([ "Home", "User" ]);
</script>