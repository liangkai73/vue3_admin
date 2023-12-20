<!--
/**
* Copyright (c) 2022 Copyright tj All Rights Reserved.
* Author: lanck
* Date: 2023-02-15 09:18
* Desc: 优惠券记录
*/
 -->

<template>
    <pageView>
        <template #head>
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/userInfo' }">用户管理</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/userInfo/coupons' }">优惠券记录</el-breadcrumb-item>
            </el-breadcrumb>
        </template>

        <!-- table-body -->
        <card class="table-container mt20">
            <div class="table-inner">
                <el-table :data="tableData" style="width: 100%">
                    <el-table-column prop="id" label="ID" width="100" />
                    <el-table-column prop="name" label="优惠券名称" />
                    <el-table-column prop="leixin" label="类型" />
                    <el-table-column prop="deposit" label="内容" />
                    <el-table-column prop="shiyongfangwei" label="使用范围" />
                    <el-table-column prop="date" label="领取时间" />
                    <el-table-column prop="user" label="领取用户" />
                    <el-table-column prop="phone" label="用户手机号" />
                    <el-table-column prop="status" label="使用状态" />
                    <el-table-column label="操作" width="350">
                        <template #default="scope">
                            <el-button size="small" @click="handleOrder('detail', scope.row)">关联订单</el-button>
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
        name: '新人充电礼券',
        leixin: '打折券',
        phone: '18869878798',
        deposit: '7折',
        yue: '500',
        shiyongfangwei: "仅限充电服务费使用",
        status: "已使用",
        user: "奈奈夏日",
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