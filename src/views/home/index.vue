<!--
/**
* Copyright (c) 2022 Copyright tj All Rights Reserved.
* Author: lanck
* Date: 2023-02-16 09:12
* Desc: 控制台主页
*/
 -->

<template>
    <pageView title="首页">
        <card class="home-top-title mt5">
            <div class="flex_r_s" style="height: 120px;">
                <div class="flex_c flex1" style="height: 100%;">
                    <span class="font_b">99999.55</span>
                    <span class="mt10">今日营业额</span>
                </div>
                <div class="flex_c flex1" style="height: 100%;">
                    <span class="font_b">79999.55</span>
                    <span class="mt10">今日充电收入(元)</span>
                </div>
                <div class="flex_c flex1" style="height: 100%;">
                    <span class="font_b">20000.00</span>
                    <span class="mt10">今日押金收入(元)</span>
                </div>
                <div class="flex_c flex1" style="height: 100%;">
                    <span class="font_b">00.00</span>
                    <span class="mt10">今日其他收入(元)</span>
                </div>
                <div class="flex_c flex1" style="height: 100%;">
                    <span class="font_b">90</span>
                    <span class="mt10">今日新增会员数(人)</span>
                </div>
            </div>
        </card>
        <!-- 财务数据 -->
        <card title="财务数据" :gutter="15" class="mt15">
            <div class="flex_r_s">
                <span class="flex1"></span>
                <el-select v-model="inputParmas.date" placeholder="时间">
                    <el-option v-for="item in options_date" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
            </div>
            <div class="flex_r_s mt10" style="height:440px;">
                <div class="flex_c card-inner-left">
                    <div class="flex_r_s" style="width: 100%;line-height: 80px;">
                        <span class="item-str">总营收</span>
                        <span class="flex1" style="margin-left: 80px;font-size: 18px;">9999.55</span>
                    </div>
                    <!-- <span class="flex1"></span> -->
                    <div class="border_1" style="width: 100%;">
                        <p class="item-str">收入</p>
                        <div class="flex_r_s mt10">
                            <span class="item-str-150">充电收入</span>
                            <span>69999.55</span>
                        </div>
                        <div class="flex_r_s mt10">
                            <span class="item-str-150">押金收入</span>
                            <span>10000.55</span>
                        </div>
                        <div class="flex_r_s mt10">
                            <span class="item-str-150">其他收入</span>
                            <span>00.00</span>
                        </div>
                        <div class="flex_r_s mt10">
                            <span class="item-str-150">滞纳金</span>
                            <span>00.00</span>
                        </div>
                    </div>
                    <span class="flex1"></span>
                    <div class="border_1" style="width: 100%;">
                        <p class="item-str">支出</p>
                        <div class="flex_r_s mt10">
                            <span class="item-str-150">电费</span>
                            <span>20000.55</span>
                        </div>
                        <div class="flex_r_s mt10">
                            <span class="item-str-150">退款</span>
                            <span>10000.55</span>
                        </div>
                        <div class="flex_r_s mt10">
                            <span class="item-str-150">优惠券使用金额</span>
                            <span>00.00</span>
                        </div>
                    </div>
                </div>
                <!-- echart -->
                <div class="flex1 border_1" style="height: 100%;">
                    <echart1 class="mt15"></echart1>
                </div>
            </div>
        </card>
        <!-- 设备 -->
        <card class="mt15" :gutter="15" title="设备">
            <div class="flex_r_s mt10" style="height:160px;">
                <div class="border_1 flex1" style="height: 100%;padding: 15px;">
                    <p class="mt15">站点</p>
                    <div class="flex_r_s mt15">
                        <div class="flex_c flex1">
                            <span style="font-weight: bold;font-size: 16px;">30</span>
                            <span class="mt15">数量</span>
                        </div>
                    </div>

                </div>
                <span style="width: 15px;"></span>
                <div class="border_1 flex1" style="height: 100%;padding: 15px;">
                    <p class="mt15">站点</p>
                    <div class="flex_r_s mt15">
                        <div class="flex_c flex1">
                            <span style="font-weight: bold;font-size: 16px;">30</span>
                            <span class="mt15">总数</span>
                        </div>
                        <div class="flex_c flex1">
                            <span style="font-weight: bold;font-size: 16px;">50</span>
                            <span class="mt15">在用</span>
                        </div>
                        <div class="flex_c flex1">
                            <span style="font-weight: bold;font-size: 16px;">0</span>
                            <span class="mt15">故障</span>
                        </div>
                    </div>

                </div>
                <span style="width: 15px;"></span>
                <div class="border_1 flex1" style="height: 100%;padding: 15px;">
                    <p class="mt15">站点</p>
                    <div class="flex_r_s mt15">
                        <div class="flex_c flex1">
                            <span style="font-weight: bold;font-size: 16px;">100.00</span>
                            <span class="mt15">总量</span>
                        </div>
                        <div class="flex_c flex1">
                            <span style="font-weight: bold;font-size: 16px;">90.00</span>
                            <span class="mt15">电柜</span>
                        </div>
                        <div class="flex_c flex1">
                            <span style="font-weight: bold;font-size: 16px;">10.00</span>
                            <span class="mt15">电站</span>
                        </div>
                    </div>

                </div>
            </div>
        </card>
        <!-- 订单数据 -->
        <card title="订单数据" :gutter="15" class="mt15">
            <div class="flex_r_s">
                <span class="flex1"></span>
                <el-select v-model="inputParmas.date" placeholder="时间">
                    <el-option v-for="item in options_date" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
            </div>
            <div class="flex_r_s mt10" style="height:440px;">
                <div class="flex_c card-inner-left">
                    <div class="flex_r_s" style="width: 100%;line-height: 50px;">
                        <span class="item-str">今日订单总数</span>
                        <span class="flex1" style="margin-left: 80px;font-size: 18px;">50</span>
                    </div>
                    <div class="flex_r_s" style="width: 100%;line-height: 50px;">
                        <span class="item-str">今日订单总额</span>
                        <span class="flex1" style="margin-left: 80px;font-size: 18px;">69999.55</span>
                    </div>
                    <span class="flex1"></span>
                </div>
                <!-- echart -->
                <div class="flex1 border_1" style="height: 100%;">
                    <echart2></echart2>
                </div>
            </div>
        </card>
        <!-- 用户数据 -->
        <card class="home-top-title mt15">
            <div class="flex_r_s" style="height: 200px;">
                <div class="flex_c flex1" style="height: 100%;">
                    <span class="font_b">1000</span>
                    <span class="mt20">会员总数</span>
                </div>
                <div class="flex_c flex1" style="height: 100%;">
                    <span class="font_b">900</span>
                    <span class="mt20">活跃总数</span>
                </div>
                <div class="flex_c flex1" style="height: 100%;">
                    <span class="font_b">800</span>
                    <span class="mt20">缴纳押金人生</span>
                </div>
                <div class="flex_c flex1" style="height: 100%;">
                    <span class="font_b">100</span>
                    <span class="mt20">免押人数</span>
                </div>
                <div class="flex_c flex1" style="height: 100%;">
                    <span class="font_b">50</span>
                    <span class="mt20">失活人数</span>
                </div>
                <div class="flex_c flex1" style="height: 100%;">
                    <span class="font_b">50</span>
                    <span class="mt20">退押人数</span>
                </div>
            </div>
        </card>

    </pageView>
</template>

<script setup  lang="ts">
import { link } from 'fs';
import { reactive, ref, toRefs, onMounted, getCurrentInstance } from 'vue'
import { globalStore } from "@/utils/store/index"
import { LocationQueryRaw, useRouter } from 'vue-router'
import { ElPagination, ElTable } from "element-plus";
import pageView from '@/components/pageView/index.vue'
import card from '@/components/card/index.vue'
import echart1 from './components/echart1.vue'
import echart2 from './components/echart2.vue'

const router = useRouter();
const _gloabStore = globalStore();

const inputParmas = ref({
    name: '',
    deposit: '',
    date: ''
})
const options_date = [
    {
        value: '2023.11-11',
        label: '2023.11-11',
    },
    {
        value: '2023.11-12',
        label: '2023.11-12',
    }
]


</script>
<style scoped>
.font_b {
    font-size: 32px;
    font-weight: bold;
}

.item-str {
    padding-left: 15px;
}

.item-str-150 {
    padding-left: 15px;
    width: 150px;
}

.border_1 {
    border: 1px solid #000;
    padding: 15px 0;
}

.card-inner-left {
    width: 320px;
    margin-right: 15px;
    height: 100%;

}
</style>