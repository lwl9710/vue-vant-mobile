import { defineStore } from "pinia";
export default defineStore("setting", {
  state() {
    return {
      // tabbar背景颜色
      tabbarBackgroundColor: "#FFF",
      // tabbar文本颜色
      tabbarTextColor: "#000",
      // tabbar选中文本颜色
      tabbarSelectedTextColor: "#1296db"
    }
  }
});