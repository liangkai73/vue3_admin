export default [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/main/index.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/index.vue"),
  },
  {
    path: "/userInfo",
    name: "userInfo",
    component: () => import("@/views/userInfo/index.vue"),
  },
  {
    path: "/*",
    name: "404",
    component: () => import("@/views/404.vue"),
  },
];
