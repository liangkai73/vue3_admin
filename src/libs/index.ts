/*
 * @Author: lanck.xie
 * @Date: 2023-02-15 15:42:47
 * @Last Modified by: lanck.xie
 * @Last Modified time: 2023-03-08 11:38:56
 * @desc 通用组件注册
 */
import svgIcon from "./icon/index.vue";
import { App } from "vue";

export default {
  install(app: App) {
    app.component("svg-icon", svgIcon);
  },
};
