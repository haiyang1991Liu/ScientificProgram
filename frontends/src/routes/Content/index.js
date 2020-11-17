/*
 * @Author: @yzcheng
 * @Date: 2020-08-04 16:27:00
 * @Version: 1.0
 * @LastEditors: @yzcheng
 * @Description:   登陆界面
 * @LastEditTime: 2020-11-17 11:08:12
 */
import React, { Component } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import RiverSandCapa from '../RiverSandCapa'
import ContructionProgress from '../ContructionProgress'
import BadGeoloyMonitor from '../BadGeoloyMonitor'
import SubsidenceMonitor from '../SubsidenceMonitor'
import { Route,Redirect } from 'react-router-dom'
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
    console.log(currentYear)
    return currentYear
  }
  render() {
    const currentYear = this.getLocalTime()

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
          <Route path="/BadGeoloyMonitor" exact component={BadGeoloyMonitor} />
          <Route
            path="/SubsidenceMonitor"
            exact
            component={SubsidenceMonitor}
          />
          <Redirect from="/" to="/RiverSandCapa" />
        </div>
        <Footer LocalTime={currentYear} />
      </>
    )
  }
}
export default index
