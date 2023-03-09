<!--
/**
* Copyright (c) 2022 Copyright tj All Rights Reserved.
* Author: lanck
* Date: 2023-02-16 16:06
* Desc: 通用sidebar - menu组件
*/
 -->

<template>
    <el-menu :uniqueOpened="true" default-active="0-0" background-color="#545c64" text-color="#fff"
        active-text-color="#ffd04b">
        <template v-for="(item, index) in testArr">
            <!-- 有子目录 -->
            <el-sub-menu v-if="item.children" :index="index.toString">
                <template #title>
                    <svg-icon name="Discount" color="#865655"></svg-icon>
                    <span>{{ item.title }}</span>
                </template>
                <el-menu-item v-for="(citem, cindex) in item.children" :index="index.toString + '-' + cindex">
                    <span>{{ citem.title }}</span>
                </el-menu-item>
            </el-sub-menu>
            <!-- 无子目录 -->
            <el-menu-item v-else :index="index.toString">
                <span>{{ item.title }}</span>
            </el-menu-item>
        </template>
    </el-menu>
</template>
  
<script lang="ts" setup>
import { ElMenu, ElMenuItem, ElSubMenu, ElMenuItemGroup, } from "element-plus"
import { reactive, toRefs, onMounted, getCurrentInstance, Prop, PropType } from 'vue'

const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}


const testArr = reactive([
    {
        title: 'title1',
        path: '',
        icon: 'loding',
        children: [
            {
                title: 'title1-child1',
                path: '',
                icon: 'loding',
            },
            {
                title: 'title1-child2',
                path: '',
                icon: 'loding',
            },
        ]
    }, {
        title: 'title22222',
        path: '',
        icon: 'loding',
    }
])
</script>

<style scoped lang="scss">
@import "./menu.scss";
</style>


