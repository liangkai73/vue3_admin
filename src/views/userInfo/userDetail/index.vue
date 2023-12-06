<!--
/**
* Copyright (c) 2022 Copyright tj All Rights Reserved.
* Author: lanck
* Date: 2023-12-04 17:19
* Desc: 人员管理-详情
*/
 -->

<template>
    <pageView>
        <template #head>
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/userInfo' }">用户管理</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/userInfo/detail' }">详情</el-breadcrumb-item>
            </el-breadcrumb>
        </template>
        <card title="基本信息" :gutter="16">
            <div class="flex_r_s">
                <div class="flex_c_s flex1" style="height:80px">
                    <div class="flex_r_s">
                        <span style="width:80px;color:#757575">ID</span>
                        <span class="flex1">01</span>
                    </div>
                    <div class="flex_r_s mt20">
                        <span style="width:80px;color:#757575">实名</span>
                        <span class="flex1">张三</span>
                    </div>
                </div>
                <div class="flex_c_s flex1" style="height:80px">
                    <div class="flex_r_s">
                        <span style="width:80px;color:#757575">微信号</span>
                        <span class="flex1">san2009</span>
                    </div>
                    <div class="flex_r_s mt20">
                        <span style="width:80px;color:#757575">绑定微信号</span>
                        <span class="flex1">san2009</span>
                    </div>
                </div>
                <div class="flex_c_s flex1" style="height:80px">
                    <div class="flex_r_s">
                        <span style="width:80px;color:#757575">手机号</span>
                        <span class="flex1">15999808877</span>
                    </div>
                    <div class="flex_r_s mt20">
                        <span style="width:80px;color:#757575">绑定手机号</span>
                        <span class="flex1">15999808877</span>
                    </div>
                </div>
                <div class="flex_c_s flex1" style="height:80px">
                    <div class="flex_r_s">
                        <span style="width:80px;color:#757575">注册时间</span>
                        <span class="flex1">2009.11.23 11:32:40</span>
                    </div>
                    <div class="flex_r_s mt20">
                        <span style="width:80px;color:#757575">&nbsp</span>
                        <span class="flex1">&nbsp</span>
                    </div>
                </div>
            </div>
            <p class="mt30"></p>
        </card>
        <card title="账户信息" class="mt20" :gutter="16">
            <div class="flex_r_s" style="height:80px">
                <div class="flex_c flex1">
                    <span>余额</span>
                    <span class="mt20" style="font-size:30px;color:#1F873A">3000.00</span>
                </div>
                <div class="flex_c flex1">
                    <span>押金</span>
                    <span class="mt20" style="font-size:30px;color:#1F873A">300.00</span>
                </div>
                <div class="flex_c flex1">
                    <span>卡券</span>
                    <span class="mt20" style="font-size:30px;color:#1F873A">3</span>
                </div>
            </div>
            <p class="mt30"></p>
        </card>
        <card title="充电" :gutter="16" class="mt20">
            <p>爱车信息</p>
            <el-table :data="tableData" border class="mt20" style="width: 100%">
                <el-table-column prop="id" label="ID" width="100" />
                <el-table-column prop="pingpai" label="汽车品牌" />
                <el-table-column prop="chepai" label="车牌号码" />
            </el-table>
            <p class="mt20"></p>
        </card>
    </pageView>
</template>

<script setup  lang="ts">
import { reactive, toRefs, onMounted, getCurrentInstance } from 'vue'
import card from '@/components/card/index.vue';


const tableData = [
    {
        id: '1',
        pingpai: '问界M9',
        chepai: '闽A-889ZJ',
    },
    {
        id: '2',
        pingpai: '特使拉 Model X',
        chepai: '闽A-886XT',
    }
]
</script>
<style scoped lang="scss" ></style>