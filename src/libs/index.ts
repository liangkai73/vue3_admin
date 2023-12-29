/*
 * @Author: lanck.xie
 * @Date: 2023-02-15 15:42:47
 * @Last Modified by: lanck.xie
 * @Last Modified time: 2023-12-26 12:19:12
 * @desc 通用组件注册
 */
import svgIcon from "./svgIcon/index.vue";

import { App, Component } from "vue";
import // ElButton,
// ElRow,
// ElCol,
// ElPagination,
// ElInput,
// ElRadio,
// ElSelect,
// ElOption,
// ElTable,
// ElTableColumn,
"element-plus";

const components: {
  [propName: string]: Component;
} = {
  svgIcon,
  // ElButton,
  // ElRow,
  // ElCol,
  // ElInput,
  // ElPagination,
  // ElRadio,
  // ElSelect,
  // ElOption,
  // ElTable,
  // ElTableColumn,
};

export default {
  install: (app: App) => {
    for (const key in components) {
      app.component(key, components[key]);
    }
  },
};
