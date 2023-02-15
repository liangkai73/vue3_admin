import { Component } from "vue";
import _default from "./default.vue";
import userInfo from "./userInfo/index.vue";

export interface _layouts {
  _default: Component;
  userInfo: Component;
}

export const layouts: _layouts = {
  _default,
  userInfo,
};
