<!--
/**
* Copyright (c) 2022 Copyright tj All Rights Reserved.
* Author: lanck
* Date: 2023-02-13 16:50
* Desc: login page
*/
 -->

<template>
    <div class="flex_r login-content" :style="{ backgroundImage: `url(${bgUrl})` }">
        <div class="login-inner flex_r">
            <div class="login-inner-left"></div>
            <div class="login-inner-right flex1 flex_c_s">
                <h3> Log in</h3>
                <p class="mt10">账号：</p>
                <el-input class="mt10" v-model="loginData.userId" placeholder="Please input user"></el-input>
                <p class="mt10">密码</p>
                <el-input class="mt10" v-model="loginData.password" type="password" placeholder="Please input password"
                    show-password />

                <el-button class="mt20" type="primary" @click="handleLogin">login</el-button>
            </div>

        </div>
    </div>
</template>

<script setup  lang="ts">
import { reactive, toRefs, onMounted, getCurrentInstance } from 'vue'
import { useRouter } from 'vue-router';
import { ElButton, ElInput, ElIcon } from 'element-plus'
import bgUrl from '@/assets/images/login_bg.jpeg'

const loginData = reactive({
    userId: '',
    password: ''
})

const router = useRouter();

const handleLogin = (e: any) => {
    router.push({
        path: 'userInfo'
    })
}
</script>
<style scoped  lang="scss">
.login-content {
    width: 100%;
    height: 100%;
    background-size: 100% 100%;
    background-repeat: no-repeat;
}

.login-inner {
    width: 860px;
    height: 450px;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 0px 12px 0px;

}

.login-inner-left {
    width: 380px;
    height: 100%;
    background: rgba(0, 0, 0, 0.5)
}

.login-inner-right {
    box-sizing: border-box;
    padding: 50px;
    height: 100%;
    background: #fff;

}
</style>