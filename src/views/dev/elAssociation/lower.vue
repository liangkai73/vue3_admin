<!--
/**
* Copyright (c) 2022 Copyright tj All Rights Reserved.
* Author: lanck
* Date: 2023-03-15 11:04
* Desc: lower - 底部
*/
 -->

<template>
    <div class="lower-inner">


    </div>
</template>

<script setup  lang="ts">
import { reactive, toRefs, onMounted, getCurrentInstance } from 'vue';
const emit = defineEmits(['sendHigeht'])

onMounted(() => {
    emit('sendHigeht', 800)
})
</script>
<style scoped lang="scss" >
.lower-inner {
    // height: 550px;

}
</style>