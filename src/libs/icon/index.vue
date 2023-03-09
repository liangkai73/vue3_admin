<!--
/**
* Copyright (c) 2022 Copyright tj All Rights Reserved.
* Author: lanck
* Date: 2023-03-08 10:33
* Desc: icon components from el
*/
 -->

<template>
    <component :is="icon_node">
    </component>
</template>

<script setup  lang="ts">
import { reactive, toRefs, onMounted, getCurrentInstance, h, ref } from 'vue'
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

import { ElIcon } from 'element-plus'

const props = defineProps({
    name: {
        type: String,
        required: true,
        default: ''
    },
    size: {
        type: String,
        required: false,
        default: '16'
    },
    color: {
        type: String,
        required: false,
        default: ''
    }
})

let icon_node = ref({})
if (props.name in ElementPlusIconsVue) {
    //  svg color inherited from <i> 
    icon_node.value = h(ElIcon, { size: props.size }, () => h((ElementPlusIconsVue as any)[props.name], { color: props.color }))
} else {
    icon_node.value = h('i', '--');
    console.warn('没有找到:' + props.name + 'icon组件 from libs')

}

</script>
<style scoped lang="scss" ></style>