<!--
/**
* Copyright (c) 2022 Copyright tj All Rights Reserved.
* Author: lanck
* Date: 2023-03-14 16:34
* Desc: 
*/
 -->

<template>
    <div id="g-content">

        <div class="associationEl-box mt20" :style="fixStyle">
            <div class="associationEl-top" :class="[hidden ? 'hidden' : '']">

                hidden :{{ hidden }}

            </div>
            <div class="associationEl-lower" v-if="hidden">
                <lower @send-higeht="getHigeht"></lower>
            </div>
            <div class="associationEl-both" :class="[hidden ? 'status2' : '']" :style="{ backgroundImage: `url(${url1})` }"
                @click="handlePage1">
            </div>
        </div>

    </div>
</template>

<script setup  lang="ts">
import { reactive, toRefs, onMounted, getCurrentInstance, ref } from 'vue';
import url1 from './1.jpg'
import atext from '../components/textAnimate.vue'
import lower from './lower.vue'
const hidden = ref(false);
let fixStyle = ref({
    height: '300px'
});

const handlePage1 = function () {
    hidden.value = !hidden.value
}
const getHigeht = function (e: any) {
    console.log(e)
    fixStyle.value = {
        height: e + 'px'
    }
}
const getItemStyle = function (index: number) {
    let x = 100, y = 100
    const style = {
        transform: ` translateX(${(index + 1) * 100}px) translateY(${(index + 1) * 100}px)`
    }
    return style
}
</script>
<style scoped lang="scss" >
.associationEl-box {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    min-height: 300px;
    height: auto;
    // background: #ccc;
    box-sizing: border-box;


    .associationEl-top {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 200px;
        background: #e3a7a7;
        z-index: 100;
        transition: 1s all cubic-bezier(0.075, 0.82, 0.165, 1);
        opacity: 1;
        padding: 20px;
        // padding-left: 250px;

        .p1-page {
            background: #ccc;
            margin-top: 50px;
            margin-left: 50px;
            height: 250px;
            padding-left: 260px;
        }
    }

    .hidden {
        opacity: 0;
    }

    .associationEl-lower {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        min-height: 300px;
        background: #95d787;
        z-index: 90;
        animation: 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) Leftin;
        padding: 20px;
        padding-left: 200px;
    }

    .associationEl-both {
        position: absolute;
        top: 0;
        left: 0;
        width: 120px;
        // background: #7e92d5;
        height: 120px;
        z-index: 110;
        background-size: cover;
        background-attachment: fixed;
        transform: translateX(150px) translateY(40px);
        transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
        overflow: hidden;
        cursor: pointer;
    }

    .status2 {
        width: 200px;
        height: 350px;
        transform: translateX(20px) translateY(20px);
    }

    @keyframes Leftin {
        0% {
            transform: translateX(-300px) translateY(50px);
            opacity: 0;
        }

        100% {
            transform: translateX(0) translateY(0);
            opacity: 1;
        }
    }
}
</style>