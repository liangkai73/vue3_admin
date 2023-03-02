/*
 * @Author: lanck.xie
 * @Date: 2023-02-23 15:04:43
 * @Last Modified by: lanck.xie
 * @Last Modified time: 2023-02-23 17:14:47
 */

import { defineStore } from "pinia";

// useStore 可以是 useUser、useCart 之类的任何东西
// 第一个参数是应用程序中 store 的唯一 id
export default defineStore("globalStore", {
  state: () => {
    return {
      // 所有这些属性都将自动推断其类型
      _APP_TOKEN: "",
    };
  },
  getters: {
    APP_TOKEN(): string {
      return this._APP_TOKEN;
    },
  },
  actions: {
    setToken(token: string) {
      this._APP_TOKEN = token;
    },
  },
});
