<template>
  <h1>{{ message }}</h1>
</template>
<script name="Home" lang="ts" setup>
import { test } from "@/apis/test";
import useUserStore from "@/store/user";
const userStore = useUserStore();
const message = ref("Welcome to Home.");
onMounted(() => {
  test().then(res => {
    console.log("当前请求信息：", res);
  })
  console.log(`[HOME]加载===>当前用户ID信息: 【${ userStore.userId }】`);
});
onUnmounted(() => {
  console.log("[HOME]卸载");
});
</script>