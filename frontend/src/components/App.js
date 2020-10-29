
import React, { Component } from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Nav from "./Nav";
import {BrowserRouter as Router, Route} from "react-router-dom";
import "../css/app.scss";
import RiverSandCapa from './function_page_module/RiverSandCapa';
import ContructionProgress from './function_page_module/ContructionProgress';
import BadGeoloyMonitor from './function_page_module/BadGeoloyMonitor';
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
      <Router>
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
      </Router>
    );
  }
}

export default App;