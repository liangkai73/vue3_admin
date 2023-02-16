/* eslint-disable */
export default [
{path:'/', component: () => import('@/views/home/index.vue')},{path:'/error/404',name:'404', component: () => import('@/views/error/404.vue')},{path:'/home',name:'home', component: () => import('@/views/home/index.vue')},{path:'/login',name:'login', component: () => import('@/views/login/index.vue')},{path:'/main',name:'main', component: () => import('@/views/main/index.vue')},{path:'/userInfo',name:'userInfo', component: () => import('@/views/userInfo/index.vue')},{path:'/home/homeChild',name:'homeChild', component: () => import('@/views/home/homeChild/index.vue')},{path:"/:catchAll(.*)", component: () => import('@/views/error/404.vue')},]
/* eslint-enable */
