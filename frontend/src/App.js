/*
 * @Author: @yzcheng
 * @Date: 2020-11-02 09:32:14
 * @Version: 1.0
 * @LastEditors: @yzcheng
 * @Description: 
 * @LastEditTime: 2020-11-05 10:37:47
 */

import React, { Component } from 'react';
import Header from "./routes/Header";
import Footer from "./routes/Footer";
import Nav from "./routes/Nav";
import { Route} from "react-router-dom";
import "./assets/css/app.scss";
import RiverSandCapa from './routes/RiverSandCapa';
import ContructionProgress from './routes/ContructionProgress';
import BadGeoloyMonitor from './routes/BadGeoloyMonitor';
class App extends Component {
  constructor(props){
    // 构造函数
    super(props);
    this.state={
        // 状态均由小写和下划线组成
    }
   
  }
  getLocalTime=()=>{
    // 用于获取当地时间，并且传入footer 做版权时间自动更新
    console.log("进入getLocalTime 的函数");
    console.log("打印老的年份状态："+this.state.currentyear);
    let date = new Date();
    let currentYear=date.getFullYear();
    console.log(currentYear);
    return currentYear
  }
 
  render() {
    const currentYear = this.getLocalTime()
    return (
        <div id="App">
          <Header/>
              <div id="oeperation-panel">
                <Nav />
                <Route path="/" exact component={RiverSandCapa}/>
                <Route path="/constructionprogress" exact component={ContructionProgress}/>
                <Route path="/badgeologymonitor" exact component ={BadGeoloyMonitor} />
              </div>
          <Footer LocalTime={currentYear}/>
        </div>
    );
  }
}

export default App;