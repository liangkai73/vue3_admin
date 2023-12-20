<!--
/**
* Copyright (c) 2022 Copyright tj All Rights Reserved.
* Author: lanck
* Date: 2023-02-15 09:18
* Desc: 交易记录
*/
 -->

<template>
    <pageView>
        <template #head>
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/userInfo' }">用户管理</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/userInfo/transactions' }">交易记录</el-breadcrumb-item>
            </el-breadcrumb>
        </template>
        <!-- top 过滤筛选条件 -->
        <div class="table-top-limit flex_r_s">
            <span style="margin:0 10px 0 0px;">类型</span>
            <el-select v-model="inputParmas.date" placeholder="请选择">
                <el-option v-for="item in options_date" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
            <span style="margin:0 10px 0 16px;">日期</span>
            <el-select v-model="inputParmas.date" placeholder="请选择">
                <el-option v-for="item in options_date" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>

            <el-button style="margin-left: 16px;">查询</el-button>
            <el-button style="margin-left: 16px;">重置</el-button>


        </div>
        <!-- table-body -->
        <card class="table-container mt20">
            <div class="table-inner">
                <el-table :data="tableData" style="width: 100%">
                    <el-table-column prop="id" label="ID" width="100" />
                    <el-table-column prop="temstr" label="时间" />
                    <el-table-column prop="temstr" label="交易金额" />
                    <el-table-column prop="temstr" label="类型" />
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
import { LocationQueryRaw, useRouter } from 'vue-router'
import { ElPagination, ElTable } from "element-plus";
import pageView from '@/components/pageView/index.vue'
import card from '@/components/card/index.vue'

const router = useRouter();
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
        wxname: 'zhangnozhi008',
        name: '张博智',
        phone: '18869878798',
        deposit: '现金押金',
        yue: '500',
        status: "正常",
        date: '2021-04-25 14:00:00',
        temstr: '-'
    }
]
function handleOrder(order: 'detail' | 'disable' | 'charge', raw?: any) {
    console.log(raw)
    switch (order) {
        case 'detail': linkTo('userInfo/userDetail', { id: raw.id })
            break
        case 'charge': linkTo('userInfo/charge', { id: raw.id })
            break
        case 'disable': console.log('删除')

    }

}

function linkTo(url: string, query: LocationQueryRaw) {
    router.push({
        path: url,
        query
    })
}
</script>
<style lang="scss" scoped>
.table-container {}

.table-pagination {
    height: 64px;
    padding: 0 16px;
}
</style>