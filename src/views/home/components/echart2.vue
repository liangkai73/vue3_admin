<!--
/**
* Copyright (c) 2022 Copyright tj All Rights Reserved.
* Author: lanck
* Date: 2023-12-19 14:52
* Desc: 
*/
 -->

<template>
    <div ref="echartNode" class="echart-container">

    </div>
</template>

<script setup  lang="ts">
import { reactive, toRefs, onMounted, getCurrentInstance, ref } from 'vue'
import * as echarts from 'echarts';


const echartNode = ref<any>(null)


onMounted(() => {
    // type EChartsOption = echarts.EChartsCoreOption;

    var chartDom = echartNode.value;
    var myChart = echarts.init(chartDom);
    var option;

    option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
                }
            }
        },
        toolbox: {
            feature: {
                dataView: { show: true, readOnly: false },
                magicType: { show: true, type: ['line', 'bar'] },
                restore: { show: true },
                saveAsImage: { show: true }
            }
        },
        legend: {
            data: ['金额', '订单数量']
        },
        xAxis: [
            {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                axisPointer: {
                    type: 'shadow'
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '金额',
                min: 0,
                max: 100000,
                interval: 20000,
                axisLabel: {
                    formatter: '{value}元'
                }
            },
            {
                type: 'value',
                name: '订单数量',
                min: 0,
                max: 25,
                interval: 5,
                axisLabel: {
                    formatter: '{value}'
                }
            }
        ],
        series: [

            {
                name: '金额',
                type: 'bar',
                tooltip: {
                    valueFormatter: function (value: any) {
                        return (value as number) + '元';
                    }
                },
                data: [
                    10500, 21000, 10560, 50000, 45203, 75698, 56820,
                ]
            },
            {
                name: '订单数量',
                type: 'line',
                yAxisIndex: 1,
                tooltip: {
                    valueFormatter: function (value: any) {
                        return value;
                    }
                },
                data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
            }
        ]
    };

    option && myChart.setOption(option);

})
</script>
<style scoped lang="scss" >
.echart-container {
    width: 100%;
    height: 100%
}
</style>