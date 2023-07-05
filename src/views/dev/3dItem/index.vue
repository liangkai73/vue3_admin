 <!--
 /**
 * Copyright (c) 2022 Copyright tj All Rights Reserved.
 * Author: lanck
 * Date: 2023-03-14 16:10
 * Desc: 3d item
 */
  -->
 
<template>
    <div class="g-box">
        <div class="g-scroll" id="g-scroll"></div>
        <div class="g-wrapper">

            <div class="g-inner">
                <div class="g-item"></div>
                <div class="g-item"></div>
                <div class="g-item"></div>
                <div class="g-item"></div>
                <div class="g-item"></div>
                <div class="g-item"></div>
                <div class="g-item"></div>
                <div class="g-item"></div>
                <div class="g-item"></div>
                <div class="g-item"></div>
                <div class="g-item"></div>
                <div class="g-item"></div>
                <div class="g-item"></div>
                <div class="g-item"></div>
            </div>
        </div>
    </div>
</template>
 
<script setup  lang="ts">
import { reactive, toRefs, onMounted, getCurrentInstance } from 'vue'
</script>
<style scoped>
@property --phase {
    syntax: '<length>';
    inherits: false;
    initial-value: 15px;
}

.g-box {
    width: 100%;
    height: 100vh;
    overflow: auto;
    box-sizing: border-box;
}

.g-scroll {
    width: 100%;
    height: 1000vh;
}

.g-wrapper {
    position: absolute;
    width: 95%;
    height: 100vh;
    perspective: 200px;
    top: 0;
    left: 0;
    transform-style: preserve-3d;
}

.g-inner {
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    transform-style: preserve-3d;
    transform: translateY(calc(-50% + 100px)) translateZ(var(--phase)) rotateX(90deg);
    transform-origin: bottom center;
    animation-name: move;
    animation-duration: 1s;
    animation-timeline: box-move;

}

.g-item {
    width: 300px;
    height: 200px;
    color: #fff;
    background: #000;
    transform: rotateX(-90deg);
}

@scroll-timeline box-move {
    source: selector("#g-scroll");
    orientation: "vertical";
}

@keyframes move {
    0% {
        --phase: 0;
    }

    100% {
        --phase: calc(100vh + 100px);
    }
}
</style>