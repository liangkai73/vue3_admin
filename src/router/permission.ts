/*
 * @Author: lanck.xie
 * @Date: 2023-03-02 10:48:02
 * @Last Modified by: lanck.xie
 * @Last Modified time: 2023-03-09 09:57:01
 * @desc 路由权限相关
 */
import router from "./index";
import { globalStore, localStore, mixStore } from "@/utils/store";
import { WHITELIST, LOGIN_PATH } from "./config";

// 白名单
const whiteList = WHITELIST;

// 前置守卫

router.beforeEach(async (to, from, next) => {
  // 存在 token ，进入主页
  // if (store.state.user.token) {
  const _globalStore = globalStore();
  // 快捷访问
  //   TODO: 这里还没有做TOKEN有效期校验
  if (mixStore.token) {
    if (to.path === LOGIN_PATH) {
      next("/");
    } else {
      next();
    }
  } else {
    // 没有token的情况下，可以进入白名单
    if (whiteList.indexOf(to.path) > -1) {
      next();
    } else {
      next(LOGIN_PATH);
    }
  }
});

export default router;
