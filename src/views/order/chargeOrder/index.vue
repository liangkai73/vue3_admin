<!--
/**
* Copyright (c) 2022 Copyright tj All Rights Reserved.
* Author: lanck
* Date: 2023-11-27 16:31
* Desc: 充电订单
*/
 -->
<template>
    <pageView>
        <template #head>
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/order' }">充电订单</el-breadcrumb-item>
            </el-breadcrumb>
        </template>
        <!-- top 过滤筛选条件 -->
        <div class="table-top-limit flex_r_s">
            <span style="margin:0 10px 0 0px;">搜索</span>
            <el-input type="text" style="width: 200px;" placeholder="请输入" v-model="inputParmas.name" />
            <span style="margin:0 10px 0 16px;">类型</span>
            <el-select v-model="inputParmas.deposit" placeholder="请选择">
                <el-option v-for="item in options_deposit" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
            <span style="margin:0 10px 0 16px;">状态</span>
            <el-select v-model="inputParmas.date" placeholder="请选择">
                <el-option v-for="item in options_date" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
            <span style="margin:0 10px 0 16px;">日期</span>
            <el-select v-model="inputParmas.date" placeholder="请选择">
                <el-option v-for="item in options_date" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
            <el-button type="primary" style="margin-left: 16px;">查询</el-button>
            <el-button style="margin-left: 16px;">重置</el-button>


        </div>
        <!-- table-body -->
        <card class="table-container mt20">
            <div class="table-inner">
                <el-table :data="tableData" style="width: 100%">
                    <el-table-column prop="id" label="ID" width="100" />
                    <el-table-column prop="wxname" label="订单编号" />
                    <el-table-column prop="name" label="用户名" />
                    <el-table-column prop="phone" label="手机号" />
                    <el-table-column prop="deposit" label="状态" />
                    <el-table-column prop="package" label="金额" />
                    <el-table-column prop="package" label="所属电站" />
                    <el-table-column prop="date" label="所属代理商" />
                    <el-table-column prop="date" label="操作" width="350">
                        <template #default="scope">
                            <el-button size="small" @click="handleOrder('detail', scope.row)">查看详情</el-button>
                        </template>
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
        deposit: '300.00',
        package: '新客体验套餐2023版',
        date: '2021-04-25 14:00:00',
    }
]
function handleOrder(order: 'detail' | 'disable' | 'charge', raw?: any) {
    console.log(raw)
    switch (order) {
        case 'detail': linkTo('/order/orderDetail', { id: raw.id })
            break

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