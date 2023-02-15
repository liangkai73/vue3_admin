import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import "element-plus/theme-chalk/dark/css-vars.css"; // dark模式
import "element-plus/theme-chalk/el-var.css";
import "./styles/index.scss";

import { APP_CONFIG } from "@/themeInit/config";
import { appInit } from "@/utils/init";

appInit(APP_CONFIG);

createApp(App).use(router).mount("#app");
