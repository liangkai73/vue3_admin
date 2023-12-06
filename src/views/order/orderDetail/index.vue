<!--
/**
* Copyright (c) 2022 Copyright tj All Rights Reserved.
* Author: lanck
* Date: 2023-12-04 17:19
* Desc: 订单管理-详情
*/
 -->

<template>
    <pageView>
        <template #head>
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/order/chargeOrder' }">订单管理</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/order/detail' }">详情</el-breadcrumb-item>
            </el-breadcrumb>
        </template>
        <card :gutter="16">
            <div class="flex_r_s" style="padding:16px">
                <div class="flex_c_s flex1" style="height:80px">
                    <div class="flex_r_s">
                        <span style="width:120px;color:#757575">订单编号</span>
                        <span class="flex1">ppailppaila2023112700001</span>
                    </div>
                    <div class="flex_r_s mt20">
                        <span style="width:120px;color:#757575">订单金额</span>
                        <span class="flex1 green">30.00元</span>
                    </div>
                </div>
                <div class="flex_c_s flex1" style="height:80px">
                    <div class="flex_r_s">
                        <span style="width:120px;color:#757575">订单状态</span>
                        <span class="flex1 green">已支付</span>
                    </div>
                    <div class="flex_r_s mt20">
                        <span style="width:120px;color:#757575">支付方式</span>
                        <span class="flex1">微信支付</span>
                    </div>
                </div>
                <div class="flex_c_s flex1" style="height:80px">
                    <div class="flex_r_s">
                        <span style="width:120px;color:#757575">订单类型</span>
                        <span class="flex1">--</span>
                    </div>
                    <div class="flex_r_s mt20">
                        <span style="width:120px;color:#757575">付款时间</span>
                        <span class="flex1">2023.04.25 13:08:22</span>
                    </div>
                </div>
                <div class="flex_c_s flex1" style="height:80px">
                    <div class="flex_r_s">
                        <span style="width:120px;color:#757575">订单时间</span>
                        <span class="flex1">2009.11.23 11:32:40</span>
                    </div>
                    <div class="flex_r_s mt20">
                        <span style="width:120px;color:#757575">&nbsp</span>
                        <span class="flex1">&nbsp</span>
                    </div>
                </div>
            </div>

            <div class="mt20" style="border: 1px solid #000; padding: 16px;">
                <p>订单金额详解</p>
                <div class="flex_r_s mt20">
                    <div class="flex_c_s flex1" style="height:80px">
                        <div class="flex_r_s">
                            <span style="width:120px;color:#757575">充电电费</span>
                            <span class="flex1">50.00</span>
                        </div>
                        <div class="flex_r_s mt20">
                            <span style="width:120px;color:#757575">当前时段电费</span>
                            <span class="flex1">1元/度</span>
                        </div>
                    </div>
                    <div class="flex_c_s flex1" style="height:80px">
                        <div class="flex_r_s">
                            <span style="width:120px;color:#757575">充电时间</span>
                            <span class="flex1">2021.03.12 12:55:06～2021.03.12 16:55:06</span>
                        </div>
                        <div class="flex_r_s mt20">
                            <span style="width:120px;color:#757575">电费小计</span>
                            <span class="flex1">1元x20度=20元</span>
                        </div>
                    </div>
                    <div class="flex_c_s flex1" style="height:80px">
                        <div class="flex_r_s">
                            <span style="width:120px;color:#757575">&nbsp</span>
                            <span class="flex1">&nbsp</span>
                        </div>
                        <div class="flex_r_s mt20">
                            <span style="width:120px;color:#757575">服务费</span>
                            <span class="flex1">10.00元</span>
                        </div>
                    </div>

                </div>



            </div>

            <div class="mt20" style="border: 1px solid #000; padding: 16px;">
                <div class="flex_r_s" style="height: 80px;">
                    <span style="width:120px;color:#757575">优惠使用情况</span>
                    <span class="flex1">5折优惠券</span>
                </div>
            </div>

            <div class="mt20" style="padding: 16px;">
                <div class="flex_r_s" style="height: 80px;">
                    <span style="width:120px;color:#757575">订单实付金额</span>
                    <span style="font-size: 24px;color: #e60000;">25.00</span>
                    <span style="color: #e60000;">&nbsp元</span>
                </div>
            </div>
        </card>

        <!-- card 2 -->
        <card class="mt20" :gutter="16">
            <div class="flex_r_s" style="padding:16px">
                <div class="flex_c_s flex1" style="height:80px">
                    <div class="flex_r_s">
                        <span style="width:120px;color:#757575">用户姓名</span>
                        <span class="flex1">张三</span>
                    </div>
                    <div class="flex_r_s mt20">
                        <span style="width:120px;color:#757575">所属代理商</span>
                        <span class="flex1 green">--</span>
                    </div>
                </div>
                <div class="flex_c_s flex1" style="height:80px">
                    <div class="flex_r_s">
                        <span style="width:120px;color:#757575">手机</span>
                        <span class="flex1 green">15687689799</span>
                    </div>
                    <div class="flex_r_s mt20">
                        <span style="width:120px;color:#757575">终端信息</span>
                        <span class="flex1"> -- </span>
                    </div>
                </div>
                <div class="flex_c_s flex1" style="height:80px">
                    <div class="flex_r_s">
                        <span style="width:120px;color:#757575">所属电站</span>
                        <span class="flex1">--</span>
                    </div>
                    <div class="flex_r_s mt20">
                        <span style="width:120px;color:#757575">充电详情</span>
                        <span class="flex1"> -- </span>
                    </div>
                </div>
                <div class="flex_c_s flex1" style="height:80px">
                    <div class="flex_r_s">
                        <span style="width:120px;color:#757575">电站信息</span>
                        <span class="flex1">--</span>
                    </div>
                    <div class="flex_r_s mt20">
                        <span style="width:120px;color:#757575">是否异常</span>
                        <span class="flex1">--</span>
                    </div>
                </div>
            </div>
        </card>

    </pageView>
</template>

<script setup  lang="ts">
import { reactive, toRefs, onMounted, getCurrentInstance } from 'vue'
import card from '@/components/card/index.vue';


const tableData = [
    {
        id: '1',
        pingpai: '问界M9',
        chepai: '闽A-889ZJ',
    },
    {
        id: '2',
        pingpai: '特使拉 Model X',
        chepai: '闽A-886XT',
    }
]
</script>
<style scoped lang="scss" >
.green {
    color: #3BB19C;
}
</style>