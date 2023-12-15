<!--
/**
* Copyright (c) 2022 Copyright tj All Rights Reserved.
* Author: lanck
* Date: 2023-12-08 15:38
* Desc: 新增优惠券
*/
 -->

<template>
    <pageView>
        <template #head>
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/activity/coupon' }">用户管理</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/activity/coupon/createCoupon' }">新增优惠券</el-breadcrumb-item>
            </el-breadcrumb>
        </template>
        <!-- 基础信息 -->
        <card class="baseinfo-inner" :gutter="16">
            <div class="flex_r_s">
                <!-- inner-left -->
                <div class="flex_c_s flex1">
                    <div class="flex_r input-item">
                        <span class="input-title">优惠券名称</span>
                        <div class="el-input-box"><el-input v-model="infoParams.name" placeholder="请输入" /></div>

                    </div>
                    <div class="flex_r input-item">
                        <span class="input-title">优惠券内容</span>
                        <div class="el-input-box flex_r_s">
                            <span style="margin-right:15px;">满</span>
                            <el-input class="flex1" v-model="infoParams.threshold"></el-input>
                            <span style="margin:0 15px;">减</span>
                            <el-input class="flex1" v-model="infoParams.discount"></el-input>
                        </div>

                    </div>
                    <div class="flex_r input-item">
                        <span class="input-title">发放数量</span>
                        <div class="el-input-box"> <el-input v-model="infoParams.total" placeholder="请输入" type="number" />
                        </div>

                    </div>
                    <div class="flex_r input-item">
                        <span class="input-title">使用时间</span>
                        <div class="el-input-box flex_r_s">
                            <el-date-picker v-model="infoParams.startTime" type="daterange" unlink-panels
                                range-separator="至" start-placeholder="开始时间" end-placeholder="过期时间" />
                        </div>
                    </div>
                </div>

                <!-- inner-right -->
                <div class="flex_c_s flex1">
                    <div class="flex_r input-item">
                        <span class="input-title">优惠券说明</span>
                        <div class="el-input-box"><el-input v-model="infoParams.content" placeholder="请输入" /></div>

                    </div>
                    <div class="flex_r input-item">
                        <span class="input-title">优惠券类型</span>
                        <div class="el-input-box flex_r_s">
                            <el-select v-model="infoParams.userType" placeholder="请选择">
                                <el-option v-for="item in options_deposit" :key="item.value" :label="item.label"
                                    :value="item.value" />
                            </el-select>
                        </div>
                    </div>
                    <div class="flex_r input-item">
                        <span class="input-title">使用范围</span>
                        <div class="el-input-box flex_r_s">
                            <el-select v-model="infoParams.couponType" placeholder="请选择">
                                <el-option v-for="item in options_deposit" :key="item.value" :label="item.label"
                                    :value="item.value" />
                            </el-select>
                        </div>
                    </div>
                    <div class="flex_r input-item">
                        <span class="input-title"></span>
                        <div class="el-input-box flex_r_s">

                        </div>
                    </div>

                </div>
            </div>
            <p class="mt30"></p>
        </card>


        <div class="mt20 flex_r">
            <el-button type="primary" @click="handleBtn('save')">保存</el-button>
            <el-button style="margin-left: 16px;" @click="handleBtn('cancel')">取消</el-button>

        </div>
    </pageView>
</template>

<script setup  lang="ts">
import { reactive, toRefs, onMounted, getCurrentInstance, ref, Ref } from 'vue';
import { useRouter } from 'vue-router'
import { Plus } from '@element-plus/icons-vue'
import type { UploadProps } from 'element-plus'


import coupon from '@/api/coupon';
import card from '@/components/card/index.vue';

const router = useRouter();

const infoParams = reactive({
    applyType: 0, //适用类型
    content: '',// 优惠券说明
    couponType: 0,// 优惠券类型
    discount: 0, // 折扣
    endTime: '', // 有效期结束时间
    maxDiscount: 0, // 最大折扣
    name: '', //名称
    startTime: '',// 开始时间
    threshold: 0, // 使用门槛
    timeLimitType: 0, // 时间类型
    total: 0, // 优惠券总量
    userType: 0  //适用用户 0:不限 1:新用户 2:老用户

})
const options_deposit = [
    {
        value: '300',
        label: '300',
    },
    {
        value: '300',
        label: '300',
    }
]


function handleBtn(handle: 'save' | 'cancel') {
    switch (handle) {

        case 'save':

            router.push({
                path: "/activity/coupon"
            })
            break
        case 'cancel':

            router.push({
                path: "/coupon"
            })


    }
}

</script>
<style lang="scss" >
.baseinfo-inner {


    .el-input-box {
        margin-left: 35px;
        width: 350px;
    }
}

.input-item {
    margin-top: 25px;
    height: 50px;
}

.input-title {
    width: 80px;
    color: #757575;
    margin-left: 15px
}

.avatar-uploader .avatar {
    width: 80px;
    height: 80px;
    display: block;
}

.avatar-uploader .el-upload {
    border: 1px dashed var(--el-border-color);
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
    border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 80px;
    height: 80px;
    text-align: center;
}
</style>