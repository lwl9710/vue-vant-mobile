<template>
<div class="home">
  <van-search
    v-model="searchContent"
    shape="round"
    show-action
    placeholder="请输入搜索关键词"
    @search="onSearch"
  >
    <template #action>
      <span @click="onSearch">搜索</span>
    </template>
  </van-search>
  <BasicContainer top="15">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item @click="router.push({ name: 'Test' })">1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
  </BasicContainer>
  <BasicContainer top="15">
    <h3>Welcome to Home.</h3>
  </BasicContainer>
</div>
</template>
<script name="Home" lang="ts" setup>
import { test } from "@/apis/test";
import useSavePageScroll from "@/hooks/useSavePageScroll";
const searchContent = ref("");
const route = useRoute();
const router = useRouter();
useSavePageScroll(route.fullPath);
function onSearch() {
  console.log("触发搜索事件");
}
onMounted(() => {
  test().then(res => {
    console.log("测试接口调用:", res);
  })
});
onUnmounted(() => {
  console.log("[HOME]卸载");
});
</script>
<style lang="scss" scoped>
.home{
  height: 1000Px;
}
.my-swipe {
  text-align: center;
  line-height: 300px;
  background-color: #39a9ed;
  border-radius: 8px;
}
</style>