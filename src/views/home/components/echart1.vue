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
    type EChartsOption = echarts.EChartsOption;

    var chartDom = echartNode.value;
    console.log(chartDom)
    var myChart = echarts.init(chartDom);
    var option: EChartsOption;

    let xAxisData: string[] = [];
    let data1: number[] = [];
    let data2: number[] = [];
    let data3: number[] = [];
    let data4: number[] = [];
    let data5: number[] = [];
    let data6: number[] = [];
    let data7: number[] = [];

    for (let i = 0; i < 7; i++) {
        xAxisData.push('12-1' + i);
        data1.push(+(Math.random() * 2).toFixed(2));
        data2.push(+(Math.random() * 5).toFixed(2));
        data3.push(+(Math.random() + 0.3).toFixed(2));
        data4.push(+Math.random().toFixed(2));
        data5.push(+(Math.random() * 1.5).toFixed(2));
        data6.push(+(Math.random() + 0.8).toFixed(2));
        data7.push(+(Math.random() * 4.2).toFixed(2));
    }

    var emphasisStyle = {
        itemStyle: {
            shadowBlur: 10,
            shadowColor: 'rgba(0,0,0,0.3)'
        }
    };

    option = {
        legend: {
            data: ['充电收入', '押金收入', '其他收入', '滞纳金', '电费', '退款', "优惠券"],
            left: '10%'
        },
        brush: {
            toolbox: ['rect', 'polygon', 'lineX', 'lineY', 'keep', 'clear'],
            xAxisIndex: 0
        },
        toolbox: {
            feature: {
                magicType: {
                    type: ['stack']
                },
                dataView: {}
            }
        },
        tooltip: {},
        xAxis: {
            data: xAxisData,
            name: '日期',
            axisLine: { onZero: true },
            splitLine: { show: false },
            splitArea: { show: false }
        },
        yAxis: {},
        grid: {
            bottom: 100
        },
        series: [
            {
                name: '充电收入',
                type: 'bar',
                stack: 'one',
                emphasis: emphasisStyle,
                data: data1
            },
            {
                name: '押金收入',
                type: 'bar',
                stack: 'one',
                emphasis: emphasisStyle,
                data: data2
            },
            {
                name: '其他收入',
                type: 'bar',
                stack: 'one',
                emphasis: emphasisStyle,
                data: data3
            },
            {
                name: '滞纳金',
                type: 'bar',
                stack: 'one',
                emphasis: emphasisStyle,
                data: data4
            },
            {
                name: '电费',
                type: 'bar',
                stack: 'two',
                emphasis: emphasisStyle,
                data: data5
            },
            {
                name: '退款',
                type: 'bar',
                stack: 'two',
                emphasis: emphasisStyle,
                data: data6
            },
            {
                name: '优惠券',
                type: 'bar',
                stack: 'two',
                emphasis: emphasisStyle,
                data: data7
            }
        ]
    };

    myChart.on('brushSelected', function (params: any) {
        var brushed = [];
        var brushComponent = params.batch[0];

        for (var sIdx = 0; sIdx < brushComponent.selected.length; sIdx++) {
            var rawIndices = brushComponent.selected[sIdx].dataIndex;
            brushed.push('[Series ' + sIdx + '] ' + rawIndices.join(', '));
        }

        myChart.setOption<echarts.EChartsOption>({
            title: {
                backgroundColor: '#333',
                text: 'SELECTED DATA INDICES: \n' + brushed.join('\n'),
                bottom: 0,
                right: '10%',
                width: 100,
                textStyle: {
                    fontSize: 12,
                    color: '#fff'
                }
            }
        });
    });
    option && myChart.setOption(option);
})
</script>
<style scoped lang="scss" >
.echart-container {
    width: 100%;
    height: 100%
}
</style>