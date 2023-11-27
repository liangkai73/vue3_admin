<!--
/**
* Copyright (c) 2022 Copyright tj All Rights Reserved.
* Author: lanck
* Date: 2023-02-16 09:12
* Desc: 控制台主页
*/
 -->

<template>
    <div class="container-inner">
        <textAnimate>控制台主页</textAnimate>
        <button @click="linkToChild">btnbtnbtn</button>
        <div style="height: 1000px;"></div>
    </div>
</template>

<script setup  lang="ts">
import { link } from 'fs';
import { useRouter } from "vue-router"
import { reactive, toRefs, onMounted, getCurrentInstance } from 'vue'
import { globalStore } from "@/utils/store/index"
import textAnimate from '@/views/dev/components/textAnimate.vue'

const router = useRouter();
const _gloabStore = globalStore();


const linkToChild = () => {
    router.push({
        path: 'home/homeChild'
    })
}
</script>
<style scoped>
.container-inner {
    height: 100%;
    overflow: auto;
    padding: 20px;
}
</style>