<!--
/**
* Copyright (c) 2022 Copyright tj All Rights Reserved.
* Author: lanck
* Date: 2023-02-13 16:50
* Desc: login page
*/
 -->

<template>
    <!-- <div class="flex_r login-content" :style="{ backgroundImage: `url(${bgUrl})` }"> -->
    <div class="flex_r login-content login-content-bg ">
        <div class="login-inner flex_r">
            <div class="login-inner-left"></div>
            <div class="login-inner-right flex1 flex_c_s">
                <img src="@/assets/images/logo-1024@2x.png" style="width:220px;margin-bottom: 25px;">
                <p class="mt10">账号：</p>
                <el-input class="mt10" v-model="loginData.name" placeholder="请输入账号"></el-input>
                <p class="mt10">密码</p>
                <el-input class="mt10" v-model="loginData.pwd" type="password" placeholder="请输入密码" show-password />

                <el-button :loading="loading" class="mt40" type="primary" @click="handleLogin">登录</el-button>
            </div>

        </div>
    </div>
</template>

<script setup  lang="ts">
import { reactive, toRefs, onMounted, getCurrentInstance, ref } from 'vue'
import { useRouter } from 'vue-router';
import { ElButton, ElInput, ElIcon } from 'element-plus'
import { globalStore } from "@/utils/store/index"
import { transfer } from '@/components/transfer'
import api from '@/api'
import bgUrl from '@/assets/images/login_bg.jpeg'

const loginData = reactive({
    name: '',
    pwd: ''
})

const router = useRouter();

const gloabStore = globalStore();

// 登录动作
const loading = ref(false)


// 登录
const handleLogin = (e: any) => {
    loading.value = true;
    // setTimeout(() => {
    //     loading.value = false;
    //     transfer({ title: 'welcom to Ppaila!' }).then(() => {
    //         router.push({
    //             path: 'home'
    //         })
    //     })
    // }, 1000)


    api.login.postLogin(loginData).then((r) => {
        TODO: // 临时关
        // 唤起转场
        transfer({ title: 'welcom to Login!' }).then(() => {
            loading.value = false;
            router.push({
                path: 'home'
            })
        })
        // console.log('login')
    }).catch((err) => {
        loading.value = false;
    })


}
</script>
<style scoped  lang="scss">
@import url('./bg.scss');

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

// .login-content-bg {
//     background-image: radial-gradient(circle at 86% 7%,
//             rgba(40, 40, 40, 0.04) 0%,
//             rgba(40, 40, 40, 0.04) 50%,
//             rgba(200, 200, 200, 0.04) 50%,
//             rgba(200, 200, 200, 0.04) 100%),
//         radial-gradient(circle at 15% 16%,
//             rgba(99, 99, 99, 0.04) 0%,
//             rgba(99, 99, 99, 0.04) 50%,
//             rgba(45, 45, 45, 0.04) 50%,
//             rgba(45, 45, 45, 0.04) 100%),
//         radial-gradient(circle at 75% 99%,
//             rgba(243, 243, 243, 0.04) 0%,
//             rgba(243, 243, 243, 0.04) 50%,
//             rgba(37, 37, 37, 0.04) 50%,
//             rgba(37, 37, 37, 0.04) 100%),
//         linear-gradient(rgb(34, 222, 237), rgb(135, 89, 215));
// }
</style>