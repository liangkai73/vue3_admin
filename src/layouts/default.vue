<!--
/**
* Copyright (c) 2022 Copyright tj All Rights Reserved.
* Author: lanck
* Date: 2023-02-14 11:28
* Desc: 默认 项目layout nomenu
*/
 -->

<!--
/**
* Copyright (c) 2022 Copyright tj All Rights Reserved.
* Author: lanck
* Date: 2023-02-14 14:38
* Desc: userInfo - layout
*/
 -->

<template>
    <div class="app">
        <router-view></router-view>
    </div>
</template>

<script setup  lang="ts">
import { reactive, toRefs, onMounted, getCurrentInstance } from 'vue'

</script>
<style lang="scss" scoped>
@import url('@/styles/components/layout.scss');

.app {
    width: 100%;
    height: 100%;
}
</style>