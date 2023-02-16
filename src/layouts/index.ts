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
