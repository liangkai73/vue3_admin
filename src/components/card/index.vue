<!--
/**
* Copyright (c) 2022 Copyright tj All Rights Reserved.
* Author: lanck
* Date: 2023-12-04 15:42
* Desc: 业务组件 - crad
*/
 -->

<template>
    <div class="page-card">
        <div class="page-card-title" v-if="!!title">
            {{ title }}
        </div>
        <slot></slot>
    </div>
</template>

<script setup  lang="ts">

import { reactive, toRefs, onMounted, getCurrentInstance, computed } from 'vue'


const { title, gutter } = defineProps({
    title: { type: String, require: false, default: '' },
    gutter: { type: Number, require: false, default: 0 },
})

const cardPadding = computed(() => {
    return gutter + 'px'
})

</script>
<style scoped lang="scss" >
.page-card {
    box-sizing: border-box;
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 0px 1px 5px -3px rgba(152, 162, 179, 0.3), 0px 2px 2px -1px rgba(152, 162, 179, 0.3);
    border-radius: 4px;
    padding: v-bind('cardPadding');

    .page-card-title {
        font-size: 14px;
        color: #000;
        font-weight: bold;
        padding-bottom: 10px;
    }
}
</style>