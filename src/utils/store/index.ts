/*
 * @Author: lanck.xie
 * @Date: 2023-02-23 15:03:54
 * @Last Modified by: lanck.xie
 * @Last Modified time: 2023-03-02 17:36:03
 */
import globalStore from "./globalStore";
import localStore from "./localStore";

export { globalStore, localStore, mixStore };

class appMixStore {
  constructor() {}

  //   获取有效token
  get token(): string {
    const _globalStore = globalStore();
    // 感知 pinia
    if (!_globalStore.APP_TOKEN) {
      // 感知 localStorage
      if (localStore.getToken()) {
        _globalStore.setToken(localStore.getToken());
      } else {
        return "undefined";
      }
    }
    return _globalStore.APP_TOKEN;
  }

  //   设置token
  set token(token: string) {
    const _globalStore = globalStore();
    _globalStore.setToken(token);
    localStore.setToken(token);
  }

  //   获取有效token
  get userInfo(): object | undefined {
    const _globalStore = globalStore();
    // 感知 pinia
    if (!_globalStore.APP_USER) {
      // 感知 localStorage
      if (localStore.getUserInfo()) {
        _globalStore.setUserInfo(localStore.getUserInfo());
      } else {
        return undefined;
      }
    }
    return _globalStore.APP_USER;
  }

  //   设置token
  set userInfo(userInfo: object | undefined) {
    const _globalStore = globalStore();
    if (typeof userInfo == "object") {
      _globalStore.setUserInfo(userInfo);
    }
    localStore.setUserInfo(userInfo);
  }
  //   method
  getToken() {
    return this.token;
  }
  setToken(e: string) {
    this.token = e;
  }
}

const mixStore = new appMixStore();
