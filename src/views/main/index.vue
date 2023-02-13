<!--
/**
* Copyright (c) 2022 Copyright tj All Rights Reserved.
* Author: xieliangkai
* Date: 2023-02-13 11:57
* Desc: 
*/
 -->

<template>
    <div>首页内容</div>
</template>

<script setup lang="ts">
import { reactive, toRefs, onMounted, getCurrentInstance } from 'vue'
import api from '@/api/index'

api.login.postLogin()

</script>
<style scoped>

</style>