<!--
/**
* Copyright (c) 2022 Copyright tj All Rights Reserved.
* Author: lanck
* Date: 2023-03-16 11:30
* Desc: home - head
*/
 -->

<template>
    <div class="head-container flex_r_s">

        <div class="head-inner flex_r_s">
            <icon :name="`Operation`" :size="20" style="margin: 0 10px;cursor: pointer;" />
            <img src="@/assets/images/logo-1024@2x.png" style="margin-left:15px;height: 32px;">

        </div>
    </div>
</template>

<script setup  lang="ts">
import { reactive, toRefs, onMounted, getCurrentInstance } from 'vue';
import icon from "@/libs/icon/index.vue"; 
</script>
<style scoped lang="scss" >
.head-container {
    width: 100%;
    height: 50px;
    position: fixed;
    top: 0;
    left: 0;
    padding: 0 10px;
    // padding-left: 0px;
    // background: #e6c9c9;


    .head-inner {
        width: 100%;
        height: 100%;
        background: #fff;
        // border-radius: 15px;
    }

}
</style>