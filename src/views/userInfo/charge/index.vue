<!--
/**
* Copyright (c) 2022 Copyright tj All Rights Reserved.
* Author: lanck
* Date: 2023-12-05 15:49
* Desc: 充电记录
*/
 -->

<template>
    <pageView>
        <template #head>
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/userInfo' }">用户管理</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/userInfo/charge' }">充电记录</el-breadcrumb-item>
            </el-breadcrumb>
        </template>
        <!-- top 过滤筛选条件 -->
        <div class="table-top-limit flex_r_s">
            <el-input type="text" style="width: 200px;" placeholder="请输入" v-model="inputParmas.name" />
            <span style="margin:0 10px 0 16px;">押金</span>
            <el-select v-model="inputParmas.deposit" placeholder="请选择">
                <el-option v-for="item in options_deposit" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
            <span style="margin:0 10px 0 16px;">日期</span>
            <el-select v-model="inputParmas.date" placeholder="请选择">
                <el-option v-for="item in options_date" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
            <el-button style="margin-left: 16px;">查询</el-button>


        </div>
        <!-- table-body -->
        <card class="table-container mt20">
            <div class="table-inner">
                <el-table :data="tableData" style="width: 100%">
                    <el-table-column prop="id" label="ID" width="100" />
                    <el-table-column prop="wxname" label="订单时间" />
                    <el-table-column prop="name" label="类型" />
                    <el-table-column prop="phone" label="状态" />
                    <el-table-column prop="deposit" label="金额" />
                    <el-table-column prop="package" label="所属电站" />
                    <el-table-column prop="date" label="电站信息" />
                    <el-table-column prop="date" label="终端信息">
                    </el-table-column>
                </el-table>

            </div>
            <div class="table-pagination flex_r_s">
                <span class="flex1"></span>
                <el-pagination background layout="prev, pager, next" :total="1000" />
            </div>
        </card>

    </pageView>
</template>

<script setup  lang="ts">
import { reactive, toRefs, onMounted, getCurrentInstance, ref } from 'vue';
const inputParmas = ref({
    name: '',
    deposit: '',
    date: ''
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
const options_date = [
    {
        value: '2023.11-11',
        label: '2023.11-11',
    },
    {
        value: '2023.11-12',
        label: '2023.11-12',
    }
]

const tableData = [
    {
        id: '1',
        wxname: 'ppala293983838',
        name: '2021-04-25 14:00:00',
        phone: '',
        deposit: '',
        package: '',
        date: '',
    }
]
</script>
<style scoped lang="scss" >
.table-pagination {
    height: 64px;
    padding: 0 16px;
}
</style>