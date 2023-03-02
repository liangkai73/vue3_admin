<!--
/**
* Copyright (c) 2022 Copyright tj All Rights Reserved.
* Author: lanck
* Date: 2023-02-16 09:12
* Desc: 控制台主页
*/
 -->

<template>
    <div>
        控制台主页
        <button @click="linkToChild">btnbtnbtn</button>
    </div>
</template>

<script setup  lang="ts">
import { link } from 'fs';
import { useRouter } from "vue-router"
import { reactive, toRefs, onMounted, getCurrentInstance } from 'vue'
import { globalStore } from "@/utils/store/index"

const router = useRouter();
const _gloabStore = globalStore();

console.log(_gloabStore.APP_TOKEN)

const linkToChild = () => {
    router.push({
        path: 'home/homeChild'
    })
}
</script>
<style scoped></style>