<!--
/**
* Copyright (c) 2022 Copyright tj All Rights Reserved.
* Author: lanck
* Date: 2023-02-14 14:38
* Desc: 控制台主页-home-layout
*/
 -->

<template>
    <div id="app">
        <div class="head">head11</div>
        <siderbar class="sidebar-container"></siderbar>
        <div class="main-container">
            <router-view class="container-inner"></router-view>
        </div>

    </div>
</template>

<script setup  lang="ts">
import { reactive, toRefs, onMounted, getCurrentInstance } from 'vue'
import siderbar from './siderbar.vue';
</script>
<style lang="scss" scoped>
@import '@/components/menu/menu.scss';

#app {
    width: 100%;
    height: 100%;
}

.head {
    width: 100%;
    height: 80px;
    position: fixed;
    top: 0;
    left: 0;
    background: #b4da6e;
}
</style>