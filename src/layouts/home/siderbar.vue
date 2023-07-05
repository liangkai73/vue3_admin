<!--
/**
* Copyright (c) 2022 Copyright tj All Rights Reserved.
* Author: lanck
* Date: 2023-02-16 16:06
* Desc: home-siderbar
*/
 -->

<template>
    <div class="sidebar-container">

        <div class="sidebar-inner">
            <menua :menuArr="testArr" default-active="/home/homeChild33333" :default-openeds="['/home']"
                class="menu-vertical-t1" :collapse="isCollapse">
            </menua>
            <div>
                <div class="menue-collapse" @click="() => { isCollapse = !isCollapse }">tiger</div>
            </div>
        </div>



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
    },

    {
        title: '用户中心',
        path: '/elAssociation',
        icon: 'SwitchButton',
    },
    {
        title: '用户中心1',
        path: '/dev/testPage/lazyRender',
        icon: 'SwitchButton',
    }
    ,
    {
        title: '用户中心2',
        path: '/dev/elAssociation',
        icon: 'SwitchButton',
    }
    ,
    {
        title: 'page动效',
        path: '/dev/testPage',
        icon: 'SwitchButton',
    }
])
</script>

<style lang="scss">
@import '@/components/menu/menu.scss';

@property --bg-colorA {
    syntax: '<color>';
    inherits: false;
    initial-value: #fff;
}

@property --bg-colorB {
    syntax: '<color>';
    inherits: false;
    initial-value: #fff;
}

@property --border-color {
    syntax: '<color>';
    inherits: false;
    initial-value: transparent;
}



.menu-vertical-t1 {
    --el-menu-active-color: #ed8249;
    --menu-bg-color: #f9ddd3;

    .el-sub-menu__title,
    .el-menu-item {
        border-left: 3px solid var(--border-color);
        transition: 0.5s linear color, 0.5s linear --bg-colorA, 0.75s linear --bg-colorB, 0.5s cubic-bezier(0.075, 0.82, 0.165, 1) --border-color;
        background: linear-gradient(90deg, var(--bg-colorA) 0%, 70%, var(--bg-colorB) 100%);

        &:hover {
            color: var(--el-menu-active-color);
            --bg-colorA: #ffffff;
            --bg-colorB: var(--menu-bg-color);
            --border-color: var(--menu-bg-color);
        }

    }

    .el-menu-item.is-active {
        color: var(--el-menu-active-color);
        --bg-colorA: #ffffff;
        --bg-colorB: var(--menu-bg-color);
        --border-color: var(--el-menu-active-color);
    }
}

.sidebar-container {
    padding: 10px;
    height: calc(100vh - 20px);
    min-height: 500px;
    transition: width 0.28s;
    width: $sideBarWidth !important;
    height: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1001;
    overflow: hidden;

    .sidebar-inner {
        width: 100%;
        height: 100%;
        background: #fff;
        border-radius: 15px;
        overflow: hidden;
        position: relative;
    }

    .menue-collapse {
        width: 40px;
        height: 40px;
        background: #f6f6f6;
        position: absolute;
        right: 0;
        bottom: 160px;
        border-radius: 50%;
        transform: translateX(50%);
    }
}
</style>