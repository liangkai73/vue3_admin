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
        <!-- 基础信息 -->
        <card class="baseinfo-inner" title="基础信息" :gutter="16">
            <div class="flex_r_s">
                <!-- inner-left -->
                <div class="flex_c_s flex1">
                    <div class="flex_r input-item">
                        <span class="input-title">电站编号</span>
                        <el-input v-model="infoParams.number" placeholder="请输入" />
                    </div>
                    <div class="flex_r input-item">
                        <span class="input-title">所属区域</span>
                        <el-input v-model="infoParams.area" placeholder="请输入" />
                    </div>
                    <div class="flex_r input-item">
                        <span class="input-title">优势描述</span>
                        <el-input v-model="infoParams.miaoshu" placeholder="请输入" />
                    </div>

                    <div class="flex_r input-item">
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

                    <div class="flex_r input-item">
                        <span class="input-title">配置说明</span>
                        <el-input v-model="infoParams.mark" placeholder="请输入" />
                    </div>

                    <div class="flex_r input-item">
                        <span class="input-title">电站电话</span>
                        <el-input type="phone" v-model="infoParams.phone" placeholder="请输入" />
                    </div>
                </div>
                <!-- inner-right -->
                <div class="flex_c_s flex1">
                    <div class="flex_r input-item">
                        <span class="input-title">电站名称</span>
                        <el-input v-model="infoParams.name" placeholder="请输入" />
                    </div>
                    <div class="flex_r input-item">
                        <span class="input-title">详细地址</span>
                        <el-input v-model="infoParams.adress" placeholder="请输入" />
                    </div>
                    <div class="flex_r input-item">
                        <span class="input-title">优势描述</span>
                        <el-input v-model="infoParams.miaoshu" placeholder="请输入" />
                    </div>

                    <div class="flex_r input-item">
                        <span class="input-title">权益</span>
                        <el-input v-model="infoParams.quanyi" placeholder="请输入" />
                    </div>

                    <div class="flex_r input-item">
                        <span class="input-title">营业时间</span>
                        <el-input v-model="infoParams.time" placeholder="请输入" />
                    </div>

                    <div class="flex_r input-item">
                        <span class="input-title">所属代理商</span>
                        <el-input v-model="infoParams.daili" placeholder="请输入" />
                    </div>
                </div>
            </div>
            <p class="mt30"></p>
        </card>
        <!-- 价格信息 -->
        <card class="baseinfo-inner mt20" title="价格信息" :gutter="16">
            <div class="flex_r_s">
                <!-- inner-left -->
                <div class="flex_c_s flex1">
                    <div class="flex_r input-item">
                        <span class="input-title">电费</span>
                        <el-input v-model="infoParams.number" placeholder="请输入" />
                    </div>
                    <div class="flex_r input-item">
                        <span class="input-title">时段描述</span>
                        <el-input v-model="infoParams.area" placeholder="请输入" />
                    </div>
                    <div class="flex_r input-item">
                        <span class="input-title">超时占用费</span>
                        <el-input v-model="infoParams.miaoshu" placeholder="请输入" />
                    </div>

                    <div class="flex_r input-item">
                        <span class="input-title">优惠券</span>
                        <el-input v-model="infoParams.image" placeholder="请输入" />
                    </div>
                </div>
                <!-- inner-right -->
                <div class="flex_c_s flex1">
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
                </div>
            </div>
            <p class="mt30"></p>
        </card>

        <div class="mt20 flex_r">
            <el-button type="primary" @click="handleBtn('save')">保存</el-button>
            <el-button style="margin-left: 16px;" @click="handleBtn('delete')">取消</el-button>

        </div>
    </pageView>
</template>

<script setup  lang="ts">
import { reactive, toRefs, onMounted, getCurrentInstance, ref } from 'vue';
import { useRouter } from 'vue-router'
import { Plus } from '@element-plus/icons-vue'
import type { UploadProps } from 'element-plus'

import card from '@/components/card/index.vue';

const router = useRouter();

//  infoParams 
const infoParams = reactive({
    number: '',
    area: '',
    miaoshu: "",
    image: '',
    mark: '',
    ipone: '',
    name: '',
    adress: '',
    quanyi: '',
    time: '',
    daili: ''
})



function handleBtn(handle: 'save' | 'delete') {
    switch (handle) {

        case 'save':

            router.push({
                path: "/chargeStation"
            })
            break
        case 'delete':

            router.push({
                path: "/chargeStation"
            })


    }
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

</script>
<style lang="scss" >
.baseinfo-inner {


    .el-input {
        margin-left: 35px;
        width: 350px;
    }
}

.input-item {
    margin-top: 25px;
    height: 50px;
}

.input-title {
    width: 80px;
    color: #757575;
    margin-left: 15px
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