<template>
<div class="tabbar-safe-area"></div>
<ul v-show="isTabbar" class="tabbar">
  <li class="tabbar-item" :class="{ active: route.name === tabbar.pageName }" v-for="tabbar in tabbarList" :key="tabbar.pageName" @click="clickToPage(tabbar.pageName)">
    <p class="icon">
      <img class="normal" :src="tabbar.iconPath" alt="" />
      <img class="selected" :src="tabbar.selectedIconPath" alt="" />
    </p>
    <p class="label">{{ tabbar.text }}</p>
  </li>
</ul>
</template>
<script lang="ts" setup>
import { Ref } from "vue";
import Home from "@/assets/images/tabbar/home.png";
import HomeActive from "@/assets/images/tabbar/home-active.png";
import User from "@/assets/images/tabbar/user.png";
import UserActive from "@/assets/images/tabbar/user-active.png";

interface TabbarItem {
  text: string,
  pageName: string,
  iconPath: string,
  selectedIconPath: string
}

const router = useRouter();
const route = useRoute();
const isTabbar = computed(() => route.meta.isTabbarPage);
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
</script>
<style lang="scss" scoped>
.tabbar-safe-area {
  height: 53Px;
}
.tabbar {
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  width: 100%;
  background-color: #FFF;
  border-top: 1Px solid #EEE;
  .tabbar-item {
    flex: 1;
    text-align: center;
    font-size: 16Px;
    .icon {
      img {
        width: 32Px;
        height: 32Px;
      }
      .selected {
        display: none;
      }
    }
    .label {
      padding-top: 4Px;
      line-height: 1em;
    }
    &.active {
      .icon {
        .normal {
          display: none;
        }
        .selected {
          display: inline-block;
        }
      }
      .label {
        color: #1296db;
      }
    }
  }
}
</style>