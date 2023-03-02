/*
 * @Author: lanck.xie
 * @Date: 2023-02-23 15:04:43
 * @Last Modified by: lanck.xie
 * @Last Modified time: 2023-03-02 17:27:00
 */

import { defineStore } from "pinia";

// useStore 可以是 useUser、useCart 之类的任何东西
// 第一个参数是应用程序中 store 的唯一 id

interface stateInt {
  _APP_TOKEN: string;
  _APP_USER: object | undefined;
}

export default defineStore("globalStore", {
  state: (): stateInt => {
    return {
      // 所有这些属性都将自动推断其类型
      _APP_TOKEN: "",
      _APP_USER: {},
    };
  },
  getters: {
    APP_TOKEN(): string {
      return this._APP_TOKEN;
    },
    APP_USER(): object | undefined {
      return this._APP_USER;
    },
  },
  actions: {
    setToken(token: string) {
      this._APP_TOKEN = token;
    },
    setUserInfo(obj: object | undefined) {
      this._APP_USER = obj;
    },
  },
});
