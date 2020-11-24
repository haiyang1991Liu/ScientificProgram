/*
 * @Author: @yzcheng
 * @Date: 2020-08-19 10:58:58
 * @Version: 1.0
 * @LastEditors: @yzcheng
 * @Description:
 * @LastEditTime: 2020-11-24 17:37:48
 */
//s数据看板柱状图
/**
 * 生成柱状统计图
 * @param data    柱状图渲染数据
 * @param Axis    x轴坐标信息
 * @returns  {option}  统计图相关配置
 */
import echarts from 'echarts'
export function getBarChart(data) {
  const colorList = ['#9E87FF', '#73DDFF', '#fe9a8b', '#F56948', '#9E87FF']
  const option = {
    title: {
      text: '上海南槽航道表层含沙量演变趋势分析',
      textStyle: {
        fontSize: 12,
        fontWeight: 400,
        color: '#FFF',
      },
      left: 'center',
      top: '5%',
    },
    legend: {
      icon: 'circle',
      top: '5%',
      right: '5%',
      itemWidth: 6,
      itemGap: 20,
      textStyle: {
        color: '#FFF',
      },
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        label: {
          show: true,
          backgroundColor: '#fff',
          color: '#556677',
          borderColor: 'rgba(0,0,0,0)',
          shadowColor: 'rgba(0,0,0,0)',
          shadowOffsetY: 0,
        },
        lineStyle: {
          width: 0,
        },
      },
      backgroundColor: '#fff',
      textStyle: {
        color: '#5c6c7c',
      },
      padding: [10, 10],
      extraCssText: 'box-shadow: 1px 0 2px 0 rgba(163,163,163,0.5)',
    },
    grid: {
      top: '15%',
    },
    xAxis: [
      {
        type: 'category',
        data: data && data.map((item) => item.date),
        axisLine: {
          lineStyle: {
            color: '#DCE2E8',
          },
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          interval: 0,
          rotate: 45,
          textStyle: {
            color: '#FFF',
          },
          // 默认x轴字体大小
          fontSize: 12,
          // margin:文字到x轴的距离
          margin: 15,
        },
        axisPointer: {
          label: {
            // padding: [11, 5, 7],
            padding: [0, 0, 10, 0],
            /*
    除了padding[0]建议必须是0之外，其他三项可随意设置
    
    和CSSpadding相同，[上，右，下，左]
    
    如果需要下边线超出文字，设左右padding即可，注：左右padding最好相同
    
    padding[2]的10:
    
    10 = 文字距下边线的距离 + 下边线的宽度
                
    如：UI图中文字距下边线距离为7 下边线宽度为2
    
    则padding: [0, 0, 9, 0]
                
                */
            // 这里的margin和axisLabel的margin要一致!
            margin: 15,
            // 移入时的字体大小
            fontSize: 12,
            backgroundColor: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: '#fff', // 0% 处的颜色
                },
                {
                  // offset: 0.9,
                  offset: 0.86,
                  /*
0.86 = （文字 + 文字距下边线的距离）/（文字 + 文字距下边线的距离 + 下边线的宽度）
                        
                        */
                  color: '#fff', // 0% 处的颜色
                },
                {
                  offset: 0.86,
                  color: '#33c0cd', // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: '#33c0cd', // 100% 处的颜色
                },
              ],
              global: false, // 缺省为 false
            },
          },
        },
        boundaryGap: false,
      },
    ],
    yAxis: [
      {
        name: '表层含沙量浓度(kg/m³)',
        nameTextStyle: { color: '#FFF', align: 'center' },
        nameLocation: 'middle',
        type: 'value',
        nameGap: '45',
        axisTick: {
          show: false,
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: '#DCE2E8',
          },
        },
        axisLabel: {
          textStyle: {
            color: '#FFF',
          },
        },
        splitLine: {
          show: false,
        },
      },
    ],
    series: [
      {
        name: '含沙量浓度',
        type: 'line',
        data: data && data.map((item) => item.concentration.toFixed(4)),
        symbolSize: 1,
        symbol: 'circle',
        smooth: true,
        yAxisIndex: 0,
        showSymbol: false,
        lineStyle: {
          width: 5,
          color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
            {
              offset: 0,
              color: '#9effff',
            },
            {
              offset: 1,
              color: '#9E87FF',
            },
          ]),
          shadowColor: 'rgba(158,135,255, 0.3)',
          shadowBlur: 10,
          shadowOffsetY: 20,
        },
        itemStyle: {
          normal: {
            color: colorList[0],
            borderColor: colorList[0],
          },
        },
      },
    ],
  }
  return option
}
