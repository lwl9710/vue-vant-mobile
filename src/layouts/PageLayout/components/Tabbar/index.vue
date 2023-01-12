<template>
<div class="tabbar-safe-area"></div>
<ul v-show="props.show" class="tabbar">
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
const props = defineProps<{ show: boolean }>();
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
</script>
<style lang="scss" scoped>
.tabbar-safe-area, .tabbar {
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
}
.tabbar-safe-area {
  height: 46Px;
}
.tabbar {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 100;
  display: flex;
  padding: 3Px 0;
  width: 100%;
  background-color: #FFF;
  box-shadow: 0 -1Px 1Px #EEE;
  transform: translateZ(100Px);
  .tabbar-item {
    flex: 1;
    text-align: center;
    font-size: 14Px;
    .icon {
      img {
        width: 26Px;
        height: 26Px;
      }
      .selected {
        display: none;
      }
    }
    .label {
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