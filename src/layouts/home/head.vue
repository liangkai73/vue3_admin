<!--
/**
* Copyright (c) 2022 Copyright tj All Rights Reserved.
* Author: lanck
* Date: 2023-03-16 11:30
* Desc: home - head
*/
 -->

<template>
    <div class="head-container">

        <div class="head-inner"></div>
    </div>
</template>

<script setup  lang="ts">
import { reactive, toRefs, onMounted, getCurrentInstance } from 'vue'
</script>
<style scoped lang="scss" >
.head-container {
    width: calc(100vw - 210px);
    height: 80px;
    position: fixed;
    top: 0;
    left: 210px;
    padding: 10px;
    padding-left: 0px;
    // background: #e6c9c9;


    .head-inner {
        width: 100%;
        height: 100%;
        background: #fff;
        border-radius: 15px;
    }

}
</style>