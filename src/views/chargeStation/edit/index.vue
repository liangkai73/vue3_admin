<!--
/**
* Copyright (c) 2022 Copyright tj All Rights Reserved.
* Author: lanck
* Date: 2023-12-08 15:38
* Desc: 新建电站
*/
 -->

<template>
    <pageView>
        <template #head>
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/chargeStation' }">用户管理</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/chargeStation/edit' }">新增电站</el-breadcrumb-item>
            </el-breadcrumb>
        </template>
        <!-- tabs -->
        <el-tabs v-model="activeName" type="border-card" class="demo-tabs" @tab-click="handleClickTabs">
            <el-tab-pane label="电站信息" name="1">
                <!-- 基础信息 -->
                <card class="baseinfo-inner" title="基础信息" :gutter="16">
                    <div class="flex_c_s">
                        <!-- inner-left -->
                        <div class="flex_r_s input-item">
                            <span class="input-title redStar">电站编号</span>
                            <el-input :disabled="pageType == 'edit'" v-model="infoParams.id" placeholder="请输入" />
                            <span class="input-title">电站坐标</span>

                            <span class="title-node" v-if="infoParams.stationLat && infoParams.stationLng">{{
                                infoParams.stationLat }},{{ infoParams.stationLng
    }}</span>
                            <el-button>定位坐标</el-button>
                        </div>
                        <div class="flex_r_s input-item">
                            <span class="input-title redStar">电站名称</span>
                            <el-input v-model="infoParams.stationName" placeholder="请输入" />
                            <span class="input-title">所属代理商</span>
                            <el-input v-model="infoParams.operatorId" placeholder="请输入" />
                            <span class="input-title">所属区域</span>
                            <el-input v-model="infoParams.owner" placeholder="请输入" />
                        </div>
                        <div class="flex_r_s input-item">
                            <span class="input-title redStar">详细地址</span>
                            <el-input v-model="infoParams.address" placeholder="请输入" />
                        </div>

                        <div class="flex_r_s input-item">
                            <span class="input-title">场地图</span>
                            <div class="flex_r_s" style="width:350px;margin-left:35px">

                                <el-upload class="avatar-uploader"
                                    action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                                    :show-file-list="false" :on-success="handleAvatarSuccess"
                                    :before-upload="beforeAvatarUpload">
                                    <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                                    <el-icon v-else class="avatar-uploader-icon">
                                        <Plus />
                                    </el-icon>
                                </el-upload>
                                <el-button type="primary" style="margin-left:20px">上传</el-button>
                            </div>

                        </div>

                        <div class="flex_r_s input-item">
                            <span class="input-title">营业时间</span>
                            <el-input v-model="infoParams.busineHours" placeholder="请输入" />
                        </div>

                        <div class="flex_r_s input-item">
                            <span class="input-title">电站电话</span>
                            <el-input type="phone" v-model="infoParams.stationTel" placeholder="请输入" />
                        </div>
                        <div class="flex_r_s input-item">
                            <span class="input-title">配置说明</span>
                            <el-input v-model="infoParams.siteTags" placeholder="请输入" />
                        </div>

                    </div>
                    <p class="mt30"></p>
                </card>
                <!-- 价格信息 -->
                <card class="baseinfo-inner mt20" title="价格信息" :gutter="16">
                    <div class="flex_r_s">
                        <!-- inner-left -->
                        <!-- <div class="flex_c_s flex1">
                            <div class="flex_r_s input-item">
                                <span class="input-title">电费</span>
                                <el-input v-model="infoParams.number" placeholder="请输入" />
                            </div>
                            <div class="flex_r_s input-item">
                                <span class="input-title">时段描述</span>
                                <el-input v-model="infoParams.area" placeholder="请输入" />
                            </div>
                            <div class="flex_r_s input-item">
                                <span class="input-title">超时占用费</span>
                                <el-input v-model="infoParams.miaoshu" placeholder="请输入" />
                            </div>
                            <div class="flex_r_s input-item">
                                <span class="input-title">优惠券</span>
                                <el-input v-model="infoParams.image" placeholder="请输入" />
                            </div>
                        </div> -->
                        <!-- inner-right -->
                        <!-- <div class="flex_c_s flex1">
                            <div class="flex_r input-item">
                                <span class="input-title">服务费</span>
                                <el-input v-model="infoParams.name" placeholder="请输入" />
                            </div>
                            <div class="flex_r input-item">
                                <span class="input-title">停车费</span>
                                <el-input v-model="infoParams.adress" placeholder="请输入" />
                            </div>
                            <div class="flex_r input-item">
                                <span class="input-title">会员价</span>
                                <el-input v-model="infoParams.miaoshu" placeholder="请输入" />
                            </div>
                            <div class="flex_r input-item">
                                <span class="input-title"></span>

                            </div>
                        </div> -->
                    </div>
                    <p class="mt30"></p>
                </card>
            </el-tab-pane>
            <el-tab-pane label="电桩列表" name="2">
                <card class="table-container mt20" :gutter="16">
                    <div class="flex_r_s">
                        <el-button type="primary" style="margin-left: 16px;" @click="listBtnHandle('create')">新增</el-button>
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
                                    <el-button size="small" type="danger"
                                        @click="handleOrder('disable', scope.row)">停用</el-button>
                                </template>
                            </el-table-column>
                        </el-table>

                    </div>
                    <div class="table-pagination flex_r_s">
                        <span class="flex1"></span>
                        <el-pagination background layout="prev, pager, next" :total="1000" />
                    </div>
                </card>

            </el-tab-pane>
        </el-tabs>


        <div class="mt20 flex_r">
            <el-button type="primary" @click="handleBtn('save')">保存</el-button>
            <el-button style="margin-left: 16px;" @click="handleBtn('delete')">取消</el-button>

        </div>
    </pageView>
</template>

<script setup  lang="ts">
import { reactive, toRefs, onMounted, getCurrentInstance, ref, Ref } from 'vue';
import { LocationQueryRaw, useRouter, useRoute } from 'vue-router'
import { ElPagination, ElTable, ElMessageBox, ElMessage } from "element-plus";
import { Plus } from '@element-plus/icons-vue'
import type { UploadProps } from 'element-plus'
import type { TabsPaneContext } from 'element-plus'
import card from '@/components/card/index.vue';
import api from '@/api'

// tabsindex
const activeName = ref('1')

const router = useRouter();

//  infoParams 
const infoParams = ref({
    address: "",
    bannerImg: "",
    busineHours: "",
    electricityFee: "",
    id: "",
    operatorId: "",
    owner: "",
    parkFee: "",
    parkInfo: "",
    serviceFee: "",
    serviceTel: "",
    siteTags: "",
    stationLat: NaN,
    stationLng: NaN,
    stationName: "",
    stationStatus: 0,
    stationTel: "",
})

// pageType
let pageType: 'add' | 'edit' = 'add'

// station id
let editId: string = '';



function handleBtn(handle: 'save' | 'delete') {
    switch (handle) {

        case 'save':
            handlePostSite().then(res => {
                router.push({
                    path: "/chargeStation"
                })
            })


            break
        case 'delete':

            router.push({
                path: "/chargeStation"
            })


    }
}

const handleClickTabs = (tab: TabsPaneContext, event: Event) => {
    console.log(tab, event)
}
// 保存电站

function handlePostSite() {

    // 参数检索
    const checkNodeArr: Array<checkNode> = [
        { bandKey: 'id', lable: '电站编号' },
        { bandKey: 'address', lable: '详细地址' },
        { bandKey: 'stationName', lable: '电站名称' }
    ]
    _paramsCheck(infoParams.value, checkNodeArr);

    // 请求体
    const temParams = infoParams.value;


    switch (pageType) {
        case 'add':
            return api.chargeStation.postChargeStation((temParams as station.addSitParams)).then(res => {
                ElMessage({
                    message: '添加成功',
                    type: 'success',
                })

                return Promise.resolve(res)
            })
            break
        case "edit":
            return api.chargeStation.putStation(editId, temParams as station.addSitParams).then(res => {
                ElMessage({
                    message: '修改成功',
                    type: 'success',
                })

                return Promise.resolve(res)
            })
            break
    }
}

interface checkNode {
    bandKey: string
    lable: string
}

// 参数检查
function _paramsCheck(params: { [key: string]: string | number }, keys: Array<checkNode>) {
    keys.forEach((node: checkNode) => {
        if (params.hasOwnProperty(node.bandKey)) {
            if (!params[(node.bandKey)]) {
                ElMessage({
                    message: node.lable + ',不能为空。',
                    type: 'error',
                })
                throw Error('disable empty input')
            }
        }
    })


}

// 上传
const imageUrl = ref('')
const handleAvatarSuccess: UploadProps['onSuccess'] = (
    response,
    uploadFile
) => {
    imageUrl.value = URL.createObjectURL(uploadFile.raw!)
}
const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile) => {
    if (rawFile.type !== 'image/jpeg') {
        // ElMessage.error('Avatar picture must be JPG format!')
        return false
    } else if (rawFile.size / 1024 / 1024 > 2) {
        // ElMessage.error('Avatar picture size can not exceed 2MB!')
        return false
    }
    return true
}
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
// 获取电站信息
function getSiteInfo(id: string) {
    api.chargeStation.getStation(id).then(res => {
        infoParams.value = res
    })
}

// 初始化函数
function init() {
    const route = useRoute();

    if (route.query.id) {
        pageType = 'edit';
        editId = route.query.id as string
        getSiteInfo((editId as string))
    } else {
        pageType = 'add'
    }
}
init();
</script>
<style lang="scss" >
.baseinfo-inner {


    .el-input {
        margin-left: 35px;
        width: 300px;
    }

    .title-node {
        margin-left: 35px;
        width: 300px;
    }

    .flex_r_s {
        flex-wrap: wrap;
    }
}

.input-item {
    line-height: 50px;
    margin-top: 25px;
    // height: 50px;
    flex-wrap: wrap;
}

.input-title {
    width: 80px;
    color: #757575;
    margin-left: 25px
}

.el-tabs__item.is-active {
    background: #fff;
}

.avatar-uploader .avatar {
    width: 80px;
    height: 80px;
    display: block;
}

.avatar-uploader .el-upload {
    border: 1px dashed var(--el-border-color);
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
    border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 80px;
    height: 80px;
    text-align: center;
}
</style>