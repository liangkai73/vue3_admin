<!--
/**
* Copyright (c) 2022 Copyright tj All Rights Reserved.
* Author: lanck
* Date: 2023-03-16 11:30
* Desc: home - head
*/
 -->

<template>
    <div class="head-container flex_r_s">

        <div class="head-inner flex_r_s">
            <svg-icon icon="menu" />
            <img src="@/assets/images/logo-1024@2x.png" style="margin-left:18px;height: 32px;">
            <span class="flex1"></span>
            <el-dropdown>
                <svg-icon class="cur_P" icon="user" style="font-size:20px" />
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item>超级管理员(admin)</el-dropdown-item>
                        <el-dropdown-item class="cur_P" @click="loginOut">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </div>
</template>

<script setup  lang="ts">
import { reactive, toRefs, onMounted, getCurrentInstance } from 'vue';
import { useRouter } from 'vue-router';
import icon from "@/libs/icon/index.vue";
import api from '@/api'

const router = useRouter();


function loginOut() {
    api.login.loginout()
    router.push({
        path: '/login',
    })
} 
</script>
<style scoped lang="scss" >
.head-container {
    width: 100%;
    height: 50px;
    position: fixed;
    top: 0;
    left: 0;
    // padding: 0 10px;
    box-sizing: border-box;
    border-bottom: 1px solid #e4edf0;
    // padding-left: 0px;
    // background: #e6c9c9;



    .head-inner {
        width: 100%;
        height: 100%;
        padding: 0 26px;
        background: #fff;
        // border-radius: 15px;
    }

}
</style>