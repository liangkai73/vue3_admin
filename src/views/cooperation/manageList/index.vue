<!--
/**
* Copyright (c) 2022 Copyright tj All Rights Reserved.
* Author: lanck
* Date: 2023-02-15 09:18
* Desc: 充电站管理
*/
 -->

<template>
    <pageView>
        <template #head>
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: 'cooperation/manageList' }">代理商列表</el-breadcrumb-item>
            </el-breadcrumb>
        </template>

        <!-- top 过滤筛选条件 -->
        <div class="table-top-limit flex_r_s">
            <span style="margin:0 10px 0 0px;">搜索</span>
            <el-input type="text" style="width: 200px;" placeholder="请输入" v-model="inputParmas.name" />
            <span style="margin:0 10px 0 16px;">所属区域</span>
            <el-select v-model="inputParmas.deposit" placeholder="请选择">
                <el-option v-for="item in options_deposit" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
            <span style="margin:0 10px 0 16px;">类型</span>
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
                    <el-table-column prop="wxname" label="代理商名称" />
                    <el-table-column prop="phone" label="所属区域" />
                    <el-table-column prop="deposit" label="类型" />
                    <el-table-column prop="package" label="站点名称" />
                    <el-table-column prop="daili" label="手机号" />
                    <el-table-column prop="date" label="创建时间" />
                    <el-table-column label="操作" width="350">
                        <template #default="scope">
                            <el-button size="small" @click="handleOrder('detail', scope.row)">账单查询</el-button>
                            <el-button size="small" @click="handleOrder('charge', scope.row)">设备清单</el-button>
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
        wxname: '李四',
        name: 'n23电站',
        phone: '福建省福州市鼓楼区',
        deposit: '充电站',
        package: '五一广场XXX路XX号电站',
        daili: "156816659791",
        date: '2021-04-25 14:00:00',
    },
    {
        id: '2',
        wxname: '王五',
        name: 'n23电站',
        phone: '福建省福州市鼓楼区',
        deposit: '充电站',
        package: '五一广场XXX路XX号电站',
        daili: "156816659791",
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