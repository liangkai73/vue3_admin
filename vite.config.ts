import { defineConfig } from "vite";
import { join } from "path";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      // 代理所有 /api 的请求，该求情将被代理到 target 中
      "/api": {
        // 代理请求之后的请求地址
        target: "http://127.0.0.1:4523/m1/2268281-0-default/",
        // 跨域
        changeOrigin: true,
      },
      "/pro-api": {
        // 代理请求之后的请求地址
        target: "https://mock.apifox.cn/m1/2268281-0-default/",
        // 跨域
        changeOrigin: true,
      },
    },
  },
  plugins: [vue()],
  resolve: {
    alias: {
      "@": join(__dirname, "/src"),
    },
  },
});
