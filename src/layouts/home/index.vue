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
        <siderbar class="home-sidebar"></siderbar>
        <div class="container">
            <router-view class="container-inner"></router-view>
        </div>

    </div>
</template>

<script setup  lang="ts">
import { reactive, toRefs, onMounted, getCurrentInstance } from 'vue'
import siderbar from './siderbar.vue';
</script>
<style lang="scss" scoped>
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

.home-sidebar {
    width: 175px;
    height: 100%;
    position: fixed;
    top: 80px;
    left: 0;
}

.container {
    height: 100%;
    padding-top: 80px;
    padding-left: 175px;
}
</style>