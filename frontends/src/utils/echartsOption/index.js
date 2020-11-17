/*
 * @Author: @yzcheng
 * @Date: 2020-08-19 10:58:58
 * @Version: 1.0
 * @LastEditors: @yzcheng
 * @Description:
 * @LastEditTime: 2020-11-17 20:50:41
 */
//s数据看板柱状图
/**
 * 生成柱状统计图
 * @param data    柱状图渲染数据
 * @param Axis    x轴坐标信息
 * @returns  {option}  统计图相关配置
 */
export function getBarChart(data, Axis) {
  const option = {
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        areaStyle: {},
      },
    ],
  }

  return option;
}
