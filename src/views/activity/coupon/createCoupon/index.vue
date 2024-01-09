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
                <el-breadcrumb-item :to="{ path: '/activity/coupon/createCoupon' }">
                    <span v-if='pageType == "add"'>新增优惠券模板</span>
                    <span v-if='pageType == "edit"'>修改优惠券模板</span>
                    <span v-if='pageType == "readonly"'>优惠券模板详情</span>
                </el-breadcrumb-item>
            </el-breadcrumb>
        </template>
        <!-- 基础信息 -->
        <card class="baseinfo-inner" :gutter="16">
            <div class="flex_r_s" style="height: 380px;">
                <!-- inner-left -->
                <div class="flex_c_s flex1" style="height: 100%;justify-content:start">
                    <div class="flex_r input-item">
                        <span class="input-title">优惠券名称</span>
                        <div class="el-input-box"><el-input :disabled="pageType == 'readonly'" v-model="infoParams.name"
                                placeholder="请输入" /></div>

                    </div>
                    <div class="flex_r input-item">
                        <span class="input-title">优惠券类型</span>
                        <div class="el-input-box flex_r_s">
                            <el-select v-model="infoParams.couponType" :disabled="pageType == 'readonly'"
                                @change="selectCouponType" placeholder="请选择">
                                <el-option v-for="item in options_couponType" :key="item.value" :label="item.label"
                                    :value="item.value" />
                            </el-select>
                        </div>
                    </div>

                    <div class="flex_r input-item">
                        <span class="input-title">发放数量</span>
                        <div class="el-input-box"> <el-input v-model="infoParams.total" :disabled="pageType == 'readonly'"
                                placeholder="请输入" type="number" />
                        </div>

                    </div>
                    <div class="flex_r input-item">
                        <span class="input-title">时间类型</span>
                        <div class="el-input-box flex_r_s">
                            <el-select v-model="infoParams.timeLimitType" :disabled="pageType == 'readonly'"
                                @change="selectTimelimit" placeholder="请选择">
                                <el-option v-for="item in options_timeLimitType" :key="item.value" :label="item.label"
                                    :value="item.value" />
                            </el-select>
                        </div>
                    </div>
                    <div class="flex_r input-item" v-if="infoParams.timeLimitType == 2">
                        <span class="input-title">使用时间</span>
                        <div class="el-input-box flex_r_s">
                            <el-date-picker v-model="infoParams.dateArr" :disabled="pageType == 'readonly'" type="daterange"
                                unlink-panels range-separator="至" start-placeholder="开始时间" end-placeholder="过期时间" />
                        </div>
                    </div>
                </div>

                <!-- inner-right -->
                <div class="flex_c_s flex1" style="height: 100%;justify-content:start">
                    <div class="flex_r input-item">
                        <span class="input-title">优惠券说明</span>
                        <div class="el-input-box"><el-input v-model="infoParams.content" :disabled="pageType == 'readonly'"
                                placeholder="请输入" /></div>

                    </div>
                    <div class="flex_r input-item" v-if="infoParams.couponType == 0">
                        <span class="input-title">优惠券内容</span>
                        <div class="el-input-box flex_r_s">
                            <span style="margin-right:15px;">满</span>
                            <el-input class="flex1" :disabled="pageType == 'readonly'"
                                v-model="infoParams.threshold"></el-input>
                            <span style="margin:0 15px;">减</span>
                            <el-input class="flex1" :disabled="pageType == 'readonly'"
                                v-model="infoParams.discount"></el-input>
                        </div>

                    </div>
                    <div class="flex_r input-item" v-if="infoParams.couponType == 1">
                        <span class="input-title">优惠券内容</span>
                        <div class="el-input-box flex_r_s">
                            <el-input class="flex1" :disabled="pageType == 'readonly'"
                                v-model="infoParams.discount"></el-input>
                            <span style="margin:0 15px;">折</span>
                        </div>

                    </div>
                    <div class="flex_r input-item">
                        <span class="input-title">使用范围</span>
                        <div class="el-input-box flex_r_s">
                            <el-select v-model="infoParams.userType" :disabled="pageType == 'readonly'" placeholder="请选择">
                                <el-option v-for="item in options_userType" :key="item.value" :label="item.label"
                                    :value="item.value" />
                            </el-select>
                        </div>
                    </div>
                    <div class="flex_r input-item">
                        <span class="input-title">活动时间</span>
                        <div class="el-input-box flex_r_s">
                            <el-date-picker v-model="infoParams.dateArr2" :disabled="pageType == 'readonly'"
                                type="daterange" unlink-panels range-separator="至" start-placeholder="开始时间"
                                end-placeholder="过期时间" />
                        </div>
                    </div>
                    <!-- <div class="flex_r input-item">
                        <span class="input-title"></span>
                        <div class="el-input-box flex_r_s">

                        </div>
                    </div> -->


                </div>
            </div>
            <p class="mt30"></p>
        </card>

        <!-- <card class="mt10" :gutter="15">
            {{ infoParams }}
        </card> -->


        <div class="mt20 flex_r" v-if="pageType != 'readonly'">
            <el-button type="primary" @click="handleBtn('save')">保存</el-button>
            <el-button style="margin-left: 16px;" @click="handleBtn('cancel')">取消</el-button>
        </div>
    </pageView>
</template>

<script setup  lang="ts">
import { reactive, toRefs, onMounted, getCurrentInstance, ref, Ref } from 'vue';
import { useRouter } from 'vue-router'
import api from '@/api';

import card from '@/components/card/index.vue';

const router = useRouter();

let infoParams = reactive({
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
    userType: 0, //适用用户 0:不限 1:新用户 2:老用户
    dateArr: '',  //[]
    dateArr2: '',// []
    closeTime: '',
    openTime: ''
})
const options_userType = [
    {
        value: 0,
        label: '不限制',
    },
    {
        value: 1,
        label: '新用户',
    },
    {
        value: 2,
        label: '老用户',
    }
]

const options_couponType = [
    {
        value: 0,
        label: '满减',
    },
    {
        value: 1,
        label: '满折',
    }
]

const options_timeLimitType = [
    {
        value: 0,
        label: '领券当天',
    },
    {
        value: 1,
        label: '领券隔天',
    }
    ,
    {
        value: 2,
        label: '指定时间',
    }
]

let pageType: 'add' | 'edit' | 'readonly' = 'add'
let editId = '';

function handleBtn(handle: 'save' | 'cancel') {
    switch (handle) {

        case 'save':
            if (pageType == 'add') {
                addCoupon().then(res => {
                    ElMessage({ type: 'success', message: '优惠券模板新增成功。' })
                    router.push({
                        path: "/activity/coupon"
                    })
                })
            }
            else if (pageType == 'edit') {
                putCoupon(editId).then(res => {
                    ElMessage({ type: 'success', message: '优惠券模板修改成功。' })
                    router.push({
                        path: "/activity/coupon"
                    })
                })

            }
            break
        case 'cancel':

            router.push({
                path: "/activity/coupon"
            })


    }
}
// 新增优惠券模板
function addCoupon() {
    const temParams = Object.assign({}, infoParams, {
        startTime: infoParams.dateArr[0] ? new Date(infoParams.dateArr[0]).getTime() : '',
        endTime: infoParams.dateArr[1] ? new Date(infoParams.dateArr[1]).getTime() : '',
        openTime: infoParams.dateArr2[0] ? new Date(infoParams.dateArr2[0]).getTime() : '',
        closeTime: infoParams.dateArr2[1] ? new Date(infoParams.dateArr2[1]).getTime() : '',
    })
    return api.coupon.postCouponTem((temParams as any)).then(res => {
        return Promise.resolve(res)
    }).catch(err => {
        return Promise.reject(err)
    })
}
// 修改优惠券模板
function putCoupon(id: string) {
    const temParams = Object.assign({}, infoParams, {
        startTime: infoParams.dateArr[0] ? new Date(infoParams.dateArr[0]).getTime() : '',
        endTime: infoParams.dateArr[1] ? new Date(infoParams.dateArr[1]).getTime() : '',
        openTime: infoParams.dateArr2[0] ? new Date(infoParams.dateArr2[0]).getTime() : '',
        closeTime: infoParams.dateArr2[1] ? new Date(infoParams.dateArr2[1]).getTime() : '',
    })
    return api.coupon.putCouponTem(id, (temParams as any)).then(res => {
        return Promise.resolve(res)
    }).catch(err => {
        return Promise.reject(err)
    })
}
// 时间类型change时间
function selectTimelimit(e: any) {
    // console.log(e);
    if (e != 2) {
        infoParams.dateArr = ''
    }
}
// 优惠券类型选择event
function selectCouponType(e: any) {
    infoParams.discount = 0;
    infoParams.threshold = 0;

}
// 获取优惠券模板
function getCouponInfo(id: string) {
    api.coupon.getCouponTem(id).then(res => {
        infoParams = Object.assign(infoParams, res, {
            dateArr: [res.startTime ? new Date(res.startTime) : '', res.endTime ? new Date(res.endTime) : ''],  //[]
            dateArr2: [res.openTime, res.closeTime]
        })
    })
}
// page初始化 
function init() {
    const route = useRoute();

    if (route.query.id) {
        if (route.query.type == 'readonly') {
            pageType = 'readonly';
        } else {
            pageType = 'edit';
        }
        editId = route.query.id as string
        getCouponInfo((editId as string))
    } else {
        pageType = 'add'
    }
}
init()
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