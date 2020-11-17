/*
 * @Author: @yzcheng
 * @Date: 2020-11-17 20:39:05
 * @Version: 1.0
 * @LastEditors: @yzcheng
 * @Description: 趋势图
 * @LastEditTime: 2020-11-17 20:51:43
 */
import React from 'react'
import ReactEcharts from 'echarts-for-react'
import { getBarChart } from '@utils/echartsOption/index'
export default function index() {
    return (
      <div>
        <ReactEcharts
          theme="theme"
          option={getBarChart()}
          notMerge={true}
          lazyUpdate={true}
          style={{ width: '100%', height: '65vh' }}
        />
      </div>
    )
}
