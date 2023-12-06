import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import components from "./libs";

import "element-plus/theme-chalk/dark/css-vars.css"; // dark模式
import "element-plus/theme-chalk/el-var.css";
import "element-plus/theme-chalk/el-icon.css";
import "@/assets/icons/iconfont.js";
import "./styles/index.scss";

import { APP_CONFIG } from "@/themeInit/config";
import { appInit } from "@/utils/init";

// 路由守卫
import "@/router/permission";

/* 自定义全局组件 */
import libs from "@/libs";
// 自定义指令
import { animateRender } from "@/views/dev/testPage/animateRender";

appInit(APP_CONFIG);

const APP_NODE = createApp(App);

APP_NODE.directive("aRender", animateRender);

APP_NODE.use(components).use(router).use(createPinia()).use(libs).mount("#app");
(window as any).APP_NODE = APP_NODE;
