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
                <el-breadcrumb-item :to="{ path: '/chargeStation' }">电站列表</el-breadcrumb-item>
            </el-breadcrumb>
        </template>

        <!-- top 过滤筛选条件 -->
        <div class="table-top-limit flex_r_s">
            <span style="margin:0 10px 0 0px;">搜索</span>
            <el-input type="text" style="width: 200px;" placeholder="请输入" v-model="siteParams.key" />
            <span style="margin:0 10px 0 16px;">所属区域</span>
            <el-select v-model="inputParmas.deposit" placeholder="请选择">
                <el-option v-for="item in options_deposit" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
            <span style="margin:0 10px 0 16px;">所属代理商</span>
            <el-select v-model="inputParmas.date" placeholder="请选择">
                <el-option v-for="item in options_date" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>

            <el-button type="primary" style="margin-left: 16px;" @click="handleBtn('search')">查询</el-button>
            <el-button style="margin-left: 16px;" @click="handleBtn('reset')">重置</el-button>


        </div>
        <!-- table-body -->
        <card class="table-container mt20" :gutter="16">
            <div class="flex_r_s">
                <el-button type="primary" style="margin-left: 16px;" @click="listBtnHandle('create')">新增</el-button>
                <!-- <el-button style="margin-left: 16px;">报表导出</el-button> -->
            </div>
            <div class="mt20">
                <el-table :data="tableData" style="width: 100%">
                    <el-table-column type="index" label="ID" width="100" />
                    <el-table-column prop="id" label="电站编号" />
                    <el-table-column prop="stationName" label="名称" />
                    <el-table-column prop="phone" label="所属区域" />
                    <el-table-column prop="address" label="电站地址" />
                    <el-table-column prop="totalConnectors" label="电桩数" />
                    <el-table-column prop="owner" label="所属代理商" />
                    <el-table-column prop="createTime" label="创建时间" />
                    <el-table-column label="操作" width="350">
                        <template #default="scope">
                            <el-button size="small" @click="handleOrder('detail', scope.row)">详情</el-button>
                            <el-button size="small" @click="handleOrder('charge', scope.row)">编辑</el-button>
                            <el-button size="small" type="danger" @click="handleOrder('disable', scope.row)">停用</el-button>
                            <el-button size="small" @click="handleOrder('delete', scope.row)">删除</el-button>
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
import { reactive, toRefs, onMounted, getCurrentInstance, ref, Ref } from 'vue';
import { LocationQueryRaw, useRouter } from 'vue-router'
import pageView from '@/components/pageView/index.vue'
import card from '@/components/card/index.vue'
import api from '@/api'

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
let tableData = ref([])
const siteParams: station.listParams = reactive({
    centerLat: '',
    centerLng: '',
    key: ''
})
// 操作栏 handle-fun
function handleOrder(order: 'detail' | 'disable' | 'charge' | 'delete', raw?: any): void {

    switch (order) {
        case 'detail': linkTo('chargeStation/edit', { id: raw.id })
            break
        case 'charge': linkTo('chargeStation/edit', { id: raw.id })
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
            break
        case 'delete':
            ElMessageBox.confirm('确定删除该设备?', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning',
            })
                .then(() => {
                    removeSite(raw.id).then(res => {
                        getSitelist();
                    })

                })
                .catch(() => {
                    // catch error
                })
            break
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
// handleBtn
function handleBtn(handle: 'search' | 'reset') {
    switch (handle) {
        case 'search':
            getSitelist()
            break
        case "reset":
            getParamsReset();
    }
}
// 重置查询参数
function getParamsReset() {
    siteParams.key = '';
    siteParams.centerLat = '';
    siteParams.centerLng = ''
}

// 获取站点
function getSitelist() {
    api.chargeStation.getChargeStation(siteParams).then(res => {
        tableData.value = res
    })
}
// 删除站点
function removeSite(id: string): Promise<any> {
    return api.chargeStation.deleteStation(id).then((res) => {
        ElMessage({ message: '删除成功。', type: 'success' })
        return Promise.resolve(res)
    }).catch(err => {
        return Promise.reject(err)
    })

}
// 初始化
function init() {
    getSitelist()
}
init()
</script>
<style lang="scss" scoped>
.table-container {}

.table-pagination {
    height: 64px;
    padding: 0 16px;
}
</style>