<template>
  <h1>{{ message }}</h1>
</template>
<script lang="ts" setup>
import { showToast } from "vant";
import useUserStore from "@/store/user";
const userStore = useUserStore();
const message = ref("Welcome to Home.");
onMounted(() => {
  showToast("首页加载完成");
  console.log(`[HOME]加载===>当前用户ID信息: 【${ userStore.userId }】`);
});
onUnmounted(() => {
  console.log("[HOME]卸载");
});
</script>