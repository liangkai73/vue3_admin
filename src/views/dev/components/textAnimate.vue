<!--
/**
* Copyright (c) 2022 Copyright tj All Rights Reserved.
* Author: lanck
* Date: 2023-03-03 10:10
* Desc: 
*/
 -->

<template>
    <div class="animate_box">
        <p class="animate_box_inner">
            <slot> </slot>
        </p>

    </div>
</template>

<script setup  lang="ts">
import { reactive, toRefs, onMounted, getCurrentInstance, Prop, PropType } from 'vue'

const props = defineProps({
    action: {
        type: String as PropType<string>,
        default: 'mainUp',
        require: false
    }
})


</script>
<style lang="scss">
.animate_box {
    position: relative;
    overflow: hidden;
    display: inline-block;
}

.animate_box_inner {
    animation: 1s ease textUp;
    box-sizing: border-box;

    // &::after {
    //     content: '';
    //     width: 100%;
    //     height: 100%;
    //     display: inline-block;
    //     position: absolute;
    //     left: 0;
    //     top: 0;
    //     // background: #ccc;
    //     opacity: 0.5;
    // }
}


@keyframes textUp {
    0% {
        transform: translateY(80px);
        opacity: 0;
    }

    100% {
        transform: translateY(0);
        opacity: 1;
    }
}
</style>