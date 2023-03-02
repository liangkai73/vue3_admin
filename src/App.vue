<script setup lang="ts">
import { ref, shallowRef } from "vue";
import router from "@/router/index"
import { layouts, _layouts } from '@/layouts/index'
import { getLayout } from '@/utils/init'


let layout: any = shallowRef({})

/* 路由hooks */
router.afterEach((to, from) => {
  const layoutNew = getLayout(layouts, to);
  // const layoutOld = getLayout(layouts, from);

  layout.value = layoutNew;
})

</script>

<template>
  <component :is="layout"></component>
</template>

<style scoped>

</style>
