<!--
/**
* Copyright (c) 2022 Copyright tj All Rights Reserved.
* Author: lanck
* Date: 2023-02-15 09:18
* Desc: 充电站管理
*/
 -->

<template>
    <pageView title="优惠券管理">
        <!-- <template #head>
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/activity/coupon' }">优惠券管理</el-breadcrumb-item>
            </el-breadcrumb>
        </template> -->

        <!-- top 过滤筛选条件 -->
        <div class="table-top-limit flex_r_s">
            <span style="margin:0 10px 0 0px;">优惠券名称</span>
            <el-input type="text" style="width: 200px;" placeholder="请输入" v-model="inputParmas.name" />
            <span style="margin:0 10px 0 16px;">类型</span>
            <el-select v-model="inputParmas.deposit" placeholder="请选择">
                <el-option v-for="item in options_deposit" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
            <span style="margin:0 10px 0 16px;">状态</span>
            <el-select v-model="inputParmas.date" placeholder="请选择">
                <el-option v-for="item in options_date" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
            <span style="margin:0 10px 0 16px;">使用范围</span>
            <el-select v-model="inputParmas.date" placeholder="请选择">
                <el-option v-for="item in options_date" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
            <span style="margin:0 10px 0 16px;">领取条件</span>
            <el-select v-model="inputParmas.date" placeholder="请选择">
                <el-option v-for="item in options_date" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>

            <el-button type="primary" style="margin-left: 16px;">查询</el-button>
            <el-button style="margin-left: 16px;">重置</el-button>


        </div>
        <!-- table-body -->
        <card class="table-container mt20" :gutter="16">
            <div class="flex_r_s">
                <el-button type="primary" style="margin-left: 16px;" @click="listBtnHandle('create')">新增</el-button>
            </div>
            <div class="mt20">
                <el-table :data="tableData" style="width: 100%">
                    <el-table-column prop="id" label="ID" width="100" />
                    <el-table-column prop="wxname" label="优惠券名称" />
                    <el-table-column prop="name" label="类型" />
                    <el-table-column prop="phone" label="状态" />
                    <el-table-column prop="package" label="内容" />
                    <el-table-column prop="daili" label="使用范围" />
                    <el-table-column prop="date" label="发放时间" />
                    <el-table-column prop="date" label="使用时间" />
                    <el-table-column prop="id" label="数量" />
                    <el-table-column prop="id" label="已发放数量" />
                    <el-table-column label="操作" width="250">
                        <template #default="scope">
                            <el-button size="small" @click="handleOrder('detail', scope.row)">详情</el-button>
                            <el-button size="small" @click="handleOrder('charge', scope.row)">编辑</el-button>
                            <el-button size="small" type="danger" @click="handleOrder('disable', scope.row)">停用</el-button>
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
import { ElPagination, ElTable, ElMessageBox } from "element-plus";
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
        wxname: '新人充电礼券',
        name: '打折券',
        phone: '进行中',
        deposit: '8折',
        package: '8折',
        daili: "仅限充电服务费使用",
        date: '2021-04-25 14:00:00',
    },
    {
        id: '2',
        wxname: '老客回馈充电礼券',
        name: '打折券',
        phone: '进行中',
        deposit: '8折',
        package: '8折',
        daili: "仅限充电服务费使用",
        date: '2021-04-25 14:00:00',
    }
]
// 操作栏 handle-fun
function handleOrder(order: 'detail' | 'disable' | 'charge', raw?: any): void {

    switch (order) {
        case 'detail': linkTo('chargeStation/edit', { id: raw.id })
            break
        case 'charge': linkTo('chargeStation/charge', { id: raw.id })
            break
        case 'disable':
            ElMessageBox.confirm('确定停用该设备?', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning',
            })
                .then(() => {

                })
                .catch(() => {
                    // catch error
                })



    }

}
// table-list  handle-fun
function listBtnHandle(handle: "create" | "daochu" | "delete"): void {

    switch (handle) {
        case 'create': linkTo('/activity/coupon/createCoupon')
            break
        case 'daochu': linkTo('chargeStation/charge')
            break
        case 'delete': console.log('删除')

    }

}

function linkTo(url: string, query?: LocationQueryRaw) {
    router.push({
        path: url,
        query
    })
}
</script>
<style lang="scss" scoped>
.table-top-limit {
    flex-wrap: wrap;
    line-height: 45px;
}

.table-container {}

.table-pagination {
    height: 64px;
    padding: 0 16px;
}
</style>