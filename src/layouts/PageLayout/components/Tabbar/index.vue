<template>
<div class="tabbar-safe-area"></div>
<ul class="tabbar" :style="{ backgroundColor: settingStore.tabbarBackgroundColor }">
  <template v-for="tabbar in tabbarList" :key="tabbar.pageName">
    <!-- 选中模板 -->
    <li v-if="isActive(tabbar.pageName)" class="tabbar-item" @click="clickToPage(tabbar.pageName)">
      <p class="icon">
        <img class="selected" :src="tabbar.selectedIconPath" alt="" />
      </p>
      <p class="text" :style="{ color: tabbar.selectedTextColor || settingStore.tabbarSelectedTextColor }">{{ tabbar.text }}</p>
    </li>
    <!-- 未选中模板 -->
    <li v-else class="tabbar-item" @click="clickToPage(tabbar.pageName)">
      <p class="icon">
        <img class="normal" :src="tabbar.iconPath" alt="" />
      </p>
      <p class="text" :style="{ color: tabbar.textColor || settingStore.tabbarTextColor }">{{ tabbar.text }}</p>
    </li>
  </template>
</ul>
</template>
<script lang="ts" setup>
import { Ref } from "vue";
import useSettingStore from "@/store/setting";
import Home from "@/assets/images/tabbar/home.png";
import HomeActive from "@/assets/images/tabbar/home-active.png";
import User from "@/assets/images/tabbar/user.png";
import UserActive from "@/assets/images/tabbar/user-active.png";

interface TabbarItem {
  text: string,
  pageName: string,
  iconPath: string,
  selectedIconPath: string
  textColor?: string
  selectedTextColor?: string
}
const settingStore = useSettingStore();
const route = useRoute();
const router = useRouter();
const tabbarList: Ref<Array<TabbarItem>>  = ref([
  {
    text: "首页",
    pageName: "Home",
    iconPath: Home,
    selectedIconPath: HomeActive
  },
  {
    text: "我的",
    pageName: "User",
    iconPath: User,
    selectedIconPath: UserActive
  }
]);
const clickToPage = (pageName: string) => {
  router.push({ name: pageName });
};

const isActive = (pageName: string) => {
  return route.name === pageName;
}
</script>
<style lang="scss" scoped>
.tabbar-safe-area, .tabbar {
  height: 46Px;
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
}
.tabbar {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  width: 100%;
  box-shadow: 0 -1Px 1Px #EEE;
  .tabbar-item {
    flex: 1;
    text-align: center;
    font-size: 14Px;
    .icon {
      img {
        width: 26Px;
        height: 26Px;
      }
    }
    .text {
      line-height: 1em;
    }
  }
}
</style>