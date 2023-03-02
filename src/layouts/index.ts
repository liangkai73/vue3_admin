/*
 * @Author: lanck.xie
 * @Date: 2023-03-02 10:37:27
 * @Last Modified by:   lanck.xie
 * @Last Modified time: 2023-03-02 10:37:27
 * @desc 导出layout 模板
 */

import { Component } from "vue";
import _default from "./default.vue";
import userInfo from "./userInfo/index.vue";
import home from "./home/index.vue";

export interface _layouts {
  _default: Component;
  userInfo: Component;
  home: Component;
}

export const layouts: _layouts = {
  _default,
  userInfo,
  home,
};
