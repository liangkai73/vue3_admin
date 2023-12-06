<!--
/**
* Copyright (c) 2022 Copyright tj All Rights Reserved.
* Author: lanck
* Date: 2023-12-05 14:23
* Desc: 页面base组件
*/
 -->

<template>
    <div class="page-view">
        <div class="page-view-head flex_r_s">
            <slot name="head"></slot>
            <span v-if="!$slots.head"> {{ title }}</span>
        </div>
        <slot></slot>

    </div>
</template>

<script setup  lang="ts">
import { reactive, toRefs, onMounted, getCurrentInstance } from 'vue'

const { title } = defineProps({
    title: { type: String, require: false, default: '页面标题' },
})
</script>
<style scoped lang="scss" >
.page-view {
    padding: 0 16px;
    box-sizing: border-box;

    .page-view-head {
        width: 100%;
        height: 50px;
    }
}
</style>