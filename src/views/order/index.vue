<!--
/**
* Copyright (c) 2022 Copyright tj All Rights Reserved.
* Author: lanck
* Date: 2023-11-27 16:31
* Desc: 订单管理
*/
 -->
<template>
    <div>index</div>
</template>

<script setup  lang="ts">
import { reactive, toRefs, onMounted, getCurrentInstance, ref } from 'vue';
import { LocationQueryRaw, useRouter } from 'vue-router'
import { ElPagination, ElTable } from "element-plus";
import pageView from '@/components/pageView/index.vue'
import card from '@/components/card/index.vue'

</script>
<style lang="scss" scoped>
.table-container {}

.table-pagination {
    height: 64px;
    padding: 0 16px;
}
</style>