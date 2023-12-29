<!--
/**
* Copyright (c) 2022 Copyright tj All Rights Reserved.
* Author: lanck
* Date: 2023-02-15 09:18
* Desc: 员工管理
*/
 -->

<template>
    <pageView title="用户管理">
        <template #head>
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/userInfo' }">用户管理</el-breadcrumb-item>
            </el-breadcrumb>
        </template>
        <!-- top 过滤筛选条件 -->
        <div class="table-top-limit flex_r_s">
            <span style="margin:0 10px 0 0px;">用户名</span>
            <el-input type="text" style="width: 200px;" placeholder="请输入" v-model="listParams.name" />
            <span style="margin:0 10px 0 16px;">手机号</span>
            <el-input type="phone" style="width: 200px;" placeholder="请输入" v-model="listParams.phone" />
            <span style="margin:0 10px 0 16px;">状态</span>
            <el-select v-model="listParams.status" placeholder="请选择">
                <el-option v-for="item in options_satus" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
            <el-button style="margin-left: 16px;" @click="toolHanleBtn('serch')">查询</el-button>
            <el-button style="margin-left: 16px;" @click="toolHanleBtn('reset')">重置</el-button>


        </div>
        <!-- table-body -->
        <card class="table-container mt20">
            <div class="table-inner">
                <el-table :data="userList" style="width: 100%">
                    <el-table-column type="index" label="ID" width="100" />
                    <el-table-column prop="name" label="用户名" />
                    <el-table-column prop="phone" label="手机号" />
                    <el-table-column prop="yue" label="账户余额" />
                    <el-table-column prop="status" label="状态" />
                    <el-table-column prop="createTime" label="注册时间" />
                    <el-table-column label="操作" width="350">
                        <template #default="scope">
                            <el-button size="small" @click="handleOrder('detail', scope.row)">详情</el-button>
                            <el-button size="small" @click="handleOrder('transactions', scope.row)">交易记录</el-button>
                            <el-button size="small" @click="handleOrder('coupons', scope.row)">优惠券记录</el-button>
                            <el-button size="small" type="danger" @click="handleOrder('disable', scope.row)">冻结</el-button>
                        </template>
                    </el-table-column>
                </el-table>

            </div>
            <div class="table-pagination flex_r_s">
                <span class="flex1"></span>
                <el-pagination background v-model="listParams.currentPage" layout="prev, pager, next"
                    :total="listParams.total" />
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
import api from '@/api'

const router = useRouter();
const inputParmas = ref({
    name: '',
    deposit: '',
    date: ''
})

const listParams = reactive({
    currentPage: 1,
    desc: false,
    name: '',
    orderBy: 'createTime',
    phone: '',
    sizeOfPage: 20,
    status: undefined,
    total: 0

})
// 用户列表
let userList = ref([])

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
const options_satus = [
    {
        value: '0',
        label: '正常',
    },
    {
        value: '1',
        label: '禁用',
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
    }
]
function handleOrder(order: 'detail' | 'disable' | 'transactions' | 'coupons', raw?: any) {
    console.log(raw)
    switch (order) {
        case 'detail': linkTo('userInfo/userDetail', { id: raw.id })
            break
        case 'transactions': linkTo('userInfo/transactions', { id: raw.id })
            break
        case 'coupons': linkTo('userInfo/coupons', { id: raw.id })
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
// toolsBtn功能列
function toolHanleBtn(handle: 'serch' | 'reset') {
    switch (handle) {
        case 'serch': getUserList()
            break
        case "reset": resetParams()
    }
}
// 重置请求参数
function resetParams() {
    listParams.currentPage = 1
    listParams.name = ''
    listParams.phone = ''
    listParams.sizeOfPage = 20
    listParams.status = undefined
}
// 获取用户列表
function getUserList() {
    const temParams = Object.assign({}, listParams, { currentPage: listParams.currentPage - 1 })
    api.user.getUserList(temParams).then((res: any) => {
        console.log(res)
        userList.value = res.rows
        console.log(userList)

    })
}
// 页面载入
function pageInit() {
    getUserList();
}
pageInit();
</script>
<style lang="scss" scoped>
.table-container {}

.table-pagination {
    height: 64px;
    padding: 0 16px;
}
</style>