/*
 * @Author: @yzcheng
 * @Date: 2020-08-04 16:27:00
 * @Version: 1.0
 * @LastEditors: @yzcheng
 * @Description:   登陆界面
 * @LastEditTime: 2020-11-23 10:34:37
 */
import React, { Component } from 'react'
import Header from '@routes/Header'
import RiverSandCapa from '@routes/RiverSandCapa'
import ContructionProgress from '@routes/ContructionProgress'
import BadGeoloyMonitor from '@routes/BadGeoloyMonitor'
import SubsidenceMonitor from '@routes/SubsidenceMonitor'
import { Route, Redirect } from 'react-router-dom'
class index extends Component {
  constructor(props) {
    // 构造函数
    super(props)
    this.state = {
      // 状态均由小写和下划线组成
      currentyear: '',
    }
  }
  getLocalTime = () => {
    // 用于获取当地时间，并且传入footer 做版权时间自动更新
    let date = new Date()
    let currentYear = date.getFullYear()
    return currentYear
  }
  render() {

    return (
      <>
        <Header />
          <div id="oeperation-panel">
            <Route path="/RiverSandCapa" exact component={RiverSandCapa} />
            <Route
              path="/ContructionProgress"
              exact
              component={ContructionProgress}
            />
            <Route
              path="/BadGeoloyMonitor"
              exact
              component={BadGeoloyMonitor}
            />
            <Route
              path="/SubsidenceMonitor"
              exact
              component={SubsidenceMonitor}
            />
            <Redirect from="/" to="/RiverSandCapa" />
          </div>
      </>
    )
  }
}
export default index
