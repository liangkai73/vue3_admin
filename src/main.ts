import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import "element-plus/theme-chalk/dark/css-vars.css"; // dark模式
import "element-plus/theme-chalk/el-var.css";

createApp(App).use(router).mount("#app");
