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
            <el-input type="text" style="width: 200px;" placeholder="请输入" v-model="listParams.name" />
            <span style="margin:0 10px 0 16px;">类型</span>
            <el-select v-model="listParams.couponType" placeholder="请选择">
                <el-option v-for="item in options_couponType" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
            <span style="margin:0 10px 0 16px;">状态</span>
            <el-select v-model="listParams.status" placeholder="请选择">
                <el-option v-for="item in options_status" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>

            <span style="margin:0 10px 0 16px;">领取条件</span>
            <el-select v-model="listParams.userType" placeholder="请选择">
                <el-option v-for="item in options_userType" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>

            <el-button type="primary" @click="getCouponList" style="margin-left: 16px;">查询</el-button>
            <el-button @click="resetParams" style="margin-left: 16px;">重置</el-button>


        </div>
        <!-- table-body -->
        <card class="table-container mt20" :gutter="16">
            <div class="flex_r_s">
                <el-button type="primary" style="margin-left: 16px;" @click="listBtnHandle('create')">新增</el-button>
            </div>
            <div class="mt20">
                <el-table :data="tableData" style="width: 100%">
                    <el-table-column type="index" label="ID" width="100" />
                    <el-table-column prop="name" label="优惠券名称" />
                    <el-table-column prop="couponType" label="类型">
                        <template #default="scope">
                            <span v-if="scope.row.couponType == 0">满减</span>
                            <span v-if="scope.row.couponType == 1">满折</span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="status" label="状态">
                        <template #default="scope">
                            <span v-if="scope.row.status == 0">未发布</span>
                            <span v-if="scope.row.status == 1">已发布</span>
                            <span v-if="scope.row.status == 10">已使用</span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="content" label="内容" />
                    <el-table-column prop="userType" label="使用范围">
                        <template #default="scope">
                            <span v-if="scope.row.userType == 0">不限制</span>
                            <span v-if="scope.row.userType == 1">新用户</span>
                            <span v-if="scope.row.userType == 10">老用户</span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="createTime" label="发放时间" />
                    <el-table-column prop="endTime" label="使用时间" />
                    <el-table-column prop="total" label="数量" />
                    <el-table-column label="操作" width="300">
                        <template #default="scope">
                            <el-button size="small" @click="handleOrder('detail', scope.row)">详情</el-button>
                            <el-button size="small" @click="handleOrder('edit', scope.row)">编辑</el-button>
                            <el-button size="small" v-if="scope.row.status == '0'"
                                @click="handleOrder('enable', scope.row)">启用</el-button>
                            <el-button size="small" v-if="scope.row.status == '1'" type="danger"
                                @click="handleOrder('disable', scope.row)">停用</el-button>
                            <el-button size="small" type="danger" @click="handleOrder('delete', scope.row)">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>

            </div>
            <div class="table-pagination flex_r_s">
                <span class="flex1"></span>
                <el-pagination background v-model:current-page="listParams.currentPage"
                    :default-page-size="listParams.sizeOfPage" layout="prev, pager, next" :total="pageTotal" />
            </div>
        </card>
    </pageView>
</template>

<script setup  lang="ts">
import { reactive, toRefs, onMounted, getCurrentInstance, ref } from 'vue';
import { LocationQueryRaw, useRouter } from 'vue-router'
import pageView from '@/components/pageView/index.vue'
import card from '@/components/card/index.vue'
import api from '@/api';

const router = useRouter();

const options_couponType = [
    {
        value: 0,
        label: '满减',
    },
    {
        value: 1,
        label: '满折',
    }
]
const options_status = [
    {
        value: 0,
        label: '未发布',
    },
    {
        value: 1,
        label: '已发布',
    },
    {
        value: 2,
        label: '已使用',
    }
]
const options_userType = [
    {
        value: 0,
        label: '不限制',
    },
    {
        value: 1,
        label: '新用户',
    },
    {
        value: 2,
        label: '老用户',
    }
]
const tableData = ref([]);

// listParams
const listParams: coupon.list = reactive({
    couponType: '', //优惠券类型 满减0,满折1
    currentPage: 1,// 当前页
    desc: true, // 降序排列
    name: '', // 名称
    sizeOfPage: 20, // 分页数量
    status: '',// 优惠券状态 [0:正常, 1:已过期, 10:已使用]
    userType: 0,// 领取对象 [0:不限制,1:新用户,2:老用户]
})
const pageTotal = ref(0);

// 操作栏 handle-fun
function handleOrder(order: 'detail' | 'enable' | 'disable' | 'edit' | 'delete', raw?: any): void {
    switch (order) {
        case 'detail': linkTo('coupon/createCoupon', { id: raw.id, type: 'readonly' })
            break
        case 'edit': linkTo('coupon/createCoupon', { id: raw.id, type: 'edit' })
            break
        case 'enable':
            enbleCoupon(raw.id).then(res => {
                getCouponList();
            })
            break
        case 'disable':
            ElMessageBox.confirm('确定停用该设备?', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning',
            })
                .then(() => {
                    disableCoupon(raw.id).then(res => {
                        getCouponList();
                    })
                })
                .catch(() => {
                    // catch error
                })
            break
        case "delete":
            ElMessageBox.confirm('确定删除该设备?', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning',
            })
                .then(() => {
                    deleteCoupon(raw.id).then(res => {
                        getCouponList();
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
// 重置参数
function resetParams() {

    listParams.couponType = '';
    listParams.currentPage = 1;
    listParams.name = '';
    listParams.status = '';
    listParams.userType = 0;
}
// 获取优惠券list
function getCouponList() {
    const temPrams = Object.assign({}, listParams, { currentPage: listParams.currentPage - 1 })
    api.coupon.getCouponList(temPrams).then(res => {
        tableData.value = res.rows;
        pageTotal.value = res.total
    })
}
// 启用优惠券
function enbleCoupon(id: string) {
    return api.coupon.putCouponEnable(id).then(res => {
        ElMessage({ type: 'success', message: '启用优惠券成功。' })
        return Promise.resolve(true)
    })
}
// 停用优惠券
function disableCoupon(id: string) {
    return api.coupon.putCouponDisable(id).then(res => {
        ElMessage({ type: 'success', message: '停用优惠券成功。' })
        return Promise.resolve(true)
    })
}
// 删除优惠券
function deleteCoupon(id: string) {
    return api.coupon.deleteCouponTem(id).then(res => {
        ElMessage({ type: 'success', message: '删除优惠券模板成功。' })
        return Promise.resolve(true)
    })
}
// 页面初始化
function init() {
    getCouponList()
}

init()
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