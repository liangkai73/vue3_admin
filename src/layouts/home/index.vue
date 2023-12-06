<!--
/**
* Copyright (c) 2022 Copyright tj All Rights Reserved.
* Author: lanck
* Date: 2023-02-14 14:38
* Desc: 控制台主页-home-layout
*/
 -->

<template>
    <div class="app">

        <head1 class="head-container"></head1>
        <div class="main-container">
            <siderbar class="sidebar-container" v-if="true"></siderbar>
            <router-view class="container-inner"></router-view>
        </div>
    </div>
</template>

<script setup  lang="ts">
import { reactive, toRefs, onMounted, getCurrentInstance } from 'vue'
import siderbar from './siderbar.vue';
import head1 from './head.vue'
</script>
<style lang="scss" scoped>
.app {
    width: 100vw;
    height: 100%;
    background: #f6f6f6;
    overflow: hidden;
    position: relative;
}

.main-container {
    width: 100%;
    overflow-x: hidden;
    min-height: 500px;
    height: calc(100vh - 50px);
    transition: margin-left 0.28s;
    margin-left: 210px;
    position: relative;
    padding: 0 10px 10px 0;
    margin-top: 50px;
    background-color: #e4edf0;
}

.container-inner {
    width: calc(100vw - 210px);
    // background: #DCE6E3;
    height: 100%;
    overflow: auto;
    // border-radius: 15px;
}
</style>