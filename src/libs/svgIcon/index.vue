<template>
    <div v-if="_isExternal" :style="styleExternalIcon" class="svg-external-icon svg-icon" :class="className" />
    <svg v-else class="svg-icon" :class="className" aria-hidden="true">
        <use :xlink:href="iconName" />
    </svg>
</template>

<script setup lang="ts">
import { isExternal } from '@/utils/validate'
import { computed } from 'vue'
const props = defineProps({
    icon: {
        type: String,
        required: true
    },
    className: {
        type: String,
        default: ''
    }
})

/**
 * 判断是否为外部图标
 */
const _isExternal = computed(() => isExternal(props.icon))
/**
 * 外部图标样式
 */
const styleExternalIcon = computed(() => ({
    mask: `url(${props.icon}) no-repeat 50% 50%`,
    '-webkit-mask': `url(${props.icon}) no-repeat 50% 50%`
}))
/**
 * 项目内图标
 */
const iconName = computed(() => `#icon-${props.icon}`)
</script>

<style scoped>
.svg-icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}

.svg-external-icon {
    background-color: currentColor;
    mask-size: cover !important;
    display: inline-block;
}
</style>

