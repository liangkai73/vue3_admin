<!--
/**
* Copyright (c) 2022 Copyright tj All Rights Reserved.
* Author: lanck
* Date: 2023-02-16 16:06
* Desc: home-siderbar
*/
 -->

<template>
    <div class="">
        <menua :menuArr="testArr" :default-active="testArr[0].path" :default-openeds="['/home']" :collapse="isCollapse">
        </menua>
    </div>
</template>

<script setup  lang="ts">
import { reactive, ref, Ref, toRefs, onMounted, getCurrentInstance } from 'vue';
import { ElMenuItemType } from '@/components/menu/indexRender';
import menua from '../../components/menu/indexRender';

const isCollapse = ref(false)
const testArr: Ref<ElMenuItemType[]> = ref([
    {
        title: 'animateRender',
        path: '/dev/testPage',
        icon: 'Open',
    },
])
</script>

<style lang="scss">
@import '@/components/menu/menu.scss';
</style>