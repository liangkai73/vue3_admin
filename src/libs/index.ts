/*
 * @Author: lanck.xie
 * @Date: 2023-02-15 15:42:47
 * @Last Modified by: lanck.xie
 * @Last Modified time: 2023-02-16 15:35:30
 * @desc 通用组件注册
 */
import svgIcon from "./svgIcon/index.vue";
import { App } from "vue";

export default {
  install(app: App) {
    app.component("svg-icon", svgIcon);
  },
};
