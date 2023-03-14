<!--
/**
* Copyright (c) 2022 Copyright tj All Rights Reserved.
* Author: lanck
* Date: 2023-03-09 15:28
* Desc: 
*/
 -->

<template>
    <div class="page-box">
        <div v-for="(item, index) in bgarr" v-lzrender="`haha`" class="img-box mt40 flex_c"
            :style="{ backgroundImage: `url(${item})` }">

            <div class="img-box-inner">
                111111
            </div>
        </div>
    </div>
</template>

<script setup  lang="ts">
import { reactive, toRefs, onMounted, getCurrentInstance, ref } from 'vue';
import url1 from './test1.jpeg'
import url2 from './test2.jpeg'
import url3 from './test3.jpeg'
import url4 from './test4.jpeg'

const bgarr = ref([
    url1, url2, url3, url4
])

onMounted(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
        // 如果 intersectionRatio 为 0，则目标在视野外，
        // 我们不需要做任何事情。
        console.log(entries)
        if (entries[0].intersectionRatio <= 0) return;


        console.log('Loaded new items');
    }, {
        rootMargin: '0px 0px 300px 0px', // 监视区向下拓展500px
    });
    // 开始监听
    // const arr: any = document.getElementsByClassName('img-box')
    // intersectionObserver.observe(arr[0]);
})

</script>
<style scoped lang="scss" >
.page-box {
    width: 100%;
    height: 100vh;
    min-height: 500px;
    overflow-y: auto;
    background: #000;
}

// .img-box-inner {
//     width: 80%;
//     height: 80%;
//     background: transparent;
// }

.img-box {
    height: 550px;
    width: 100%;
    // background-attachment: fixed;
    position: relative;
    // background-clip: text;
    // -webkit-background-clip: text;
    // color: #fff;

}
</style>