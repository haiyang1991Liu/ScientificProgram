/*
 * @Author: @yzcheng
 * @Date: 2020-11-17 16:49:39
 * @Version: 1.0
 * @LastEditors: @yzcheng
 * @Description: 变化监测
 * @LastEditTime: 2020-11-18 19:43:51
 */
import React from 'react'
import { Tabs } from 'antd'
import styles from './index.module.scss'
import Statistics from './Statistics'
import TrendChart from './TrendChart'
const { TabPane } = Tabs
export default function index() {
  return (
    <div className={styles.change_detection}>
      <Tabs
        defaultActiveKey="1"
        tabPosition={'top'}
      >
        <TabPane tab={'统计表'} key={1}>
          <Statistics />
        </TabPane>
        <TabPane tab={'趋势图'} key={2}>
          <TrendChart />
        </TabPane>
      </Tabs>
    </div>
  )
}
