<!--
/**
* Copyright (c) 2022 Copyright tj All Rights Reserved.
* Author: lanck
* Date: 2024-01-08 09:47
* Desc: 充电接头列表
*/
 -->

<template>
    <card class="table-container mt20" :gutter="16">
        <div class="flex_r_s">
            <el-button type="primary" style="margin-left: 16px;" @click="listBtnHandle('create')">新增1</el-button>
            <el-button style="margin-left: 16px;">报表导出</el-button>
            <el-button style="margin-left: 16px;">删除</el-button>

        </div>
        <div class="mt20">
            <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="id" label="ID" width="100" />
                <el-table-column prop="wxname" label="电站编号" />
                <el-table-column prop="name" label="名称" />
                <el-table-column prop="phone" label="所属区域" />
                <el-table-column prop="deposit" label="电站地址" />
                <el-table-column prop="package" label="电桩数" />
                <el-table-column prop="daili" label="所属代理商" />
                <el-table-column prop="date" label="创建时间" />
                <el-table-column label="操作" width="350">
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
    <!-- 新增dialog -->
    <el-dialog v-model="addConnectVisible" width="1000px" title="新增充电接口">
        <dialogInnerConnect></dialogInnerConnect>
    </el-dialog>
</template>

<script setup  lang="ts">
import { reactive, toRefs, onMounted, getCurrentInstance } from 'vue';
import { useRouter, LocationQueryRaw } from 'vue-router';
import dialogInnerConnect from './dialogInnerConnect.vue';
import api from '@/api'

const router = useRouter();

const addConnectVisible = ref(false)
// 列表页相关
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
    },
    {
        id: '2',
        wxname: 'N231069997',
        name: 'n23电站',
        phone: '福建省福州市鼓楼区',
        deposit: '五一广场XXX路XX号',
        package: '20',
        daili: "网易",
        date: '2021-04-25 14:00:00',
    }
]
let listParams = {
    stationId: ''
}

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
        case 'create': addConnectVisible.value = true;
            break
        case 'daochu': linkTo('chargeStation/charge')
            break
        case 'delete': console.log('删除')

    }

}
// 获取列表
function getConnetList() {
    api.chargeStation.getConnectList
}

function linkTo(url: string, query?: LocationQueryRaw) {
    router.push({
        path: url,
        query
    })
}
function init() {
    // getConnetList()
}
init();
</script>
<style scoped lang="scss" ></style>