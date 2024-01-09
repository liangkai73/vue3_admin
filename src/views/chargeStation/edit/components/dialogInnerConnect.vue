<!--
/**
* Copyright (c) 2022 Copyright tj All Rights Reserved.
* Author: lanck
* Date: 2024-01-09 10:59
* Desc: 新增接口dialog-inner
*/
 -->

<template>
    <div class="addConnect-inner">
        <card>
            <div class="flex_r_s" style="flex-wrap: wrap;">
                <div class="form-item flex_r_s">
                    <span class="form-item-title">电桩编号</span>
                    <el-input class="flex1"></el-input>
                </div>
                <div class="form-item flex_r_s">
                    <span class="form-item-title redStar">位置编号</span>
                    <el-input class="flex1"></el-input>
                </div>
                <div class="form-item flex_r_s">
                    <span class="form-item-title redStar">充电方式</span>
                    <el-select v-model="aaa" class="flex1" placeholder="请选择">
                        <el-option v-for="item in options_chargeType" :key="item.value" :label="item.label"
                            :value="item.value" />
                    </el-select>
                </div>
                <div class="form-item flex_r_s">
                    <span class="form-item-title redStar">充电接口</span>
                    <el-checkbox-group v-model="checkList">
                        <el-checkbox label="国际2011" />
                        <el-checkbox label="国际2015" />
                    </el-checkbox-group>
                </div>
                <div class="form-item flex_r_s">
                    <span class="form-item-title redStar">车位号</span>
                    <el-input class="flex1"></el-input>
                </div>
            </div>
        </card>
    </div>
</template>

<script setup  lang="ts">
import { reactive, toRefs, onMounted, getCurrentInstance } from 'vue';

const options_chargeType = [
    {
        value: '2',
        label: '交流接口插座',
    },
    {
        value: '3',
        label: '交流接口插头',
    },
    {
        value: '4',
        label: '直流接口枪头',
    },
    {
        value: '5',
        label: '无线充电座',
    },
    {
        value: '6',
        label: '其他',
    },

]
const checkList = ref([])
const aaa = ref();
</script>
<style scoped lang="scss" >
.addConnect-inner {
    width: 100%;

    .form-item {
        margin-top: 10px;
        width: 50%;
        line-height: 46px;
        padding: 0 15px;
    }

    .form-item-title {
        width: 120px;
    }
}
</style>