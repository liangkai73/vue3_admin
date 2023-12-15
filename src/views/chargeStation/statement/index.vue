<!--
/**
* Copyright (c) 2022 Copyright tj All Rights Reserved.
* Author: lanck
* Date: 2023-02-15 09:18
* Desc: 电量流水
*/
 -->

<template>
    <pageView>
        <template #head>
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/chargeStation' }">用户管理</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/chargeStation/statement' }">电量流水</el-breadcrumb-item>
            </el-breadcrumb>
        </template>

        <!-- table-body -->
        <card class="table-container mt20" :gutter="16">
            <div class="flex_r_s">
                <span class="flex1"></span>
                <el-button style="margin-left: 16px;">筛选</el-button>

            </div>
            <div class="mt20">
                <el-table :data="tableData" style="width: 100%">
                    <el-table-column prop="id" label="ID" width="100" />
                    <el-table-column prop="wxname" label="设备编号" />
                    <el-table-column prop="name" label="所属电站" />
                    <el-table-column prop="id" label="位置编号" />
                    <el-table-column prop="deposit" label="电流形式" />
                    <el-table-column prop="wxname" label="用电量" />
                    <el-table-column prop="date" label="时间" />

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
        wxname: 'N231069997',
        name: 'n23电站',
        phone: '福建省福州市鼓楼区',
        deposit: '五一广场XXX路XX号',
        package: '20',
        daili: "网易",
        date: '2021-04-25 14:00:00',
        temData: '-'
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
        case 'create': linkTo('chargeStation/edit')
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
.table-container {}

.table-pagination {
    height: 64px;
    padding: 0 16px;
}
</style>