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
            <!-- <div>
                <div class="menue-collapse" @click="() => { isCollapse = !isCollapse }">tiger</div>
            </div> -->
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
        icon: 'home1',
    },

    {
        title: '用户管理',
        path: '/userInfo',
        icon: 'user',
    },
    {
        title: '订单管理',
        path: '/order',
        icon: 'order',
        children: [{
            title: '充电订单',
            path: '/order/chargeOrder'
        }]
    },
    {
        title: '充电站管理',
        path: '/charge',
        icon: 'charging-station',
    }
    ,
    {
        title: '运维管理',
        path: '/devOps',
        icon: 'ops',
    }
    ,
    {
        title: '财务管理',
        path: '/finance',
        icon: 'finance',
    }
    ,
    {
        title: '活动管理',
        path: '/activity',
        icon: 'ticket',
    }
    ,
    {
        title: '员工配置',
        path: '/staff',
        icon: 'peoples',
    }
    ,
    {
        title: '合作伙伴',
        path: '/cooperation',
        icon: 'cooperative',
    }
])
</script>

<style lang="scss">
@import '@/components/menu/menu.scss';

@property --bg-colorA {
    syntax: '<color>';
    inherits: false;
    initial-value: #DCE3E7;
}

@property --bg-colorB {
    syntax: '<color>';
    inherits: false;
    initial-value: #DCE3E7;
}

@property --border-color {
    syntax: '<color>';
    inherits: false;
    initial-value: transparent;
}



.menu-vertical-t1 {
    --el-menu-active-color: #1F873A;
    --menu-bg-color: #ffffff;

    .el-sub-menu__title,
    .el-menu-item {
        border-left: 3px solid var(--border-color);
        // transition: 0.5s linear color, 0.5s linear --bg-colorA, 0.75s linear --bg-colorB, 0.5s cubic-bezier(0.075, 0.82, 0.165, 1) --border-color;
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
    // padding: 10px;
    height: calc(100vh - 50px);
    min-height: 500px;
    transition: width 0.28s;
    width: $sideBarWidth !important;
    background: #DCE3E7;
    position: fixed;
    top: 50;
    bottom: 0;
    left: 0;
    z-index: 1001;
    overflow: hidden;

    .sidebar-inner {
        width: 100%;
        height: 100%;
        // background: #fff;
        // border-radius: 15px;
        overflow: hidden;
        position: relative;
    }

    // .menue-collapse {
    //     width: 40px;
    //     height: 40px;
    //     background: #f6f6f6;
    //     position: absolute;
    //     right: 0;
    //     bottom: 160px;
    //     border-radius: 50%;
    //     transform: translateX(50%);
    // }
}
</style>