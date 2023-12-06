/*
 * @Author: lanck.xie
 * @Date: 2023-03-02 10:37:27
 * @Last Modified by: lanck.xie
 * @Last Modified time: 2023-12-01 17:11:49
 * @desc 导出layout 模板
 */

import { Component } from "vue";
import login from "./login.vue";
import userInfo from "./userInfo/index.vue";
import home from "./home/index.vue";
import dev from "./dev/index.vue";

const _default = home;
export interface _layouts {
  _default: Component;
  // userInfo: Component;
  home: Component;
  dev: Component;
  login: Component;
}

export const layouts: _layouts = {
  _default,
  // userInfo,
  home,
  dev,
  login: login,
};
