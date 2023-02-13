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
];
