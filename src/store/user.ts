import { defineStore } from "pinia";

interface UserInfo {
  id: string
}

interface State {
  userInfo: UserInfo
}

export default defineStore("user", {
  state(): State {
    return {
      userInfo: {
        id: ""
      }
    }
  },
  getters: {
    userId: state => state.userInfo.id
  },
  actions: {
    setUserInfo(userInfo: UserInfo) {
      this.userInfo = userInfo;
    }
  }
})