/*
 * @Author: @yzcheng
 * @Date: 2020-11-17 20:39:05
 * @Version: 1.0
 * @LastEditors: @yzcheng
 * @Description: 趋势图
 * @LastEditTime: 2020-11-18 20:22:30
 */
import React from 'react'
import ReactEcharts from 'echarts-for-react'
import { getBarChart } from '@utils/echartsOption/index'
import { observer, inject } from 'mobx-react'
function index({ RiverSandCapa }) {
  const { AverageListData } = RiverSandCapa
  return (
    <div>
      <ReactEcharts
        theme="theme"
        option={getBarChart(AverageListData)}
        notMerge={true}
        lazyUpdate={true}
        style={{ width: '40vw', height: '35vh' }}
      />
    </div>
  )
}
export default inject('RiverSandCapa')(observer(index))