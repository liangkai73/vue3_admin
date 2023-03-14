<!--
/**
* Copyright (c) 2022 Copyright tj All Rights Reserved.
* Author: lanck
* Date: 2023-02-16 16:06
* Desc: home-siderbar
*/
 -->

<template>
    <div class="">
        <menua :menuArr="testArr" default-active="/home/homeChild" :default-openeds="['/home']"
            class="el-menu-vertical-demo" :collapse="isCollapse">
        </menua>
    </div>
</template>

<script setup  lang="ts">
import { reactive, ref, Ref, toRefs, onMounted, getCurrentInstance } from 'vue';
import { ElMenuItemType, } from '@/components/menu/indexRender'
import menua from '../../components/menu/indexRender';

const isCollapse = ref(false)
const testArr: Ref<ElMenuItemType[]> = ref([
    {
        title: '首页',
        path: '/home',
        icon: 'Open',
        children: [
            {
                title: 'title1-child1',
                path: '/home/homeChild',
                icon: 'Remove',

            },
            {
                title: 'title1-child2',
                path: 'wefweceeee',
                icon: 'MessageBox',
            },
        ]
    },

    {
        title: '用户中心',
        path: '/home/homeChild',
        icon: 'SwitchButton',
    }, {
        title: 'page动效',
        path: '/dev/testPage',
        icon: 'SwitchButton',
    }
])
</script>

<style lang="scss">
@import '@/components/menu/menu.scss';
</style>