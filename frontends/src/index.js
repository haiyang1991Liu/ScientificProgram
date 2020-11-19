/*
 * @Author: @yzcheng
 * @Date: 2020-11-11 20:58:02
 * @Version: 1.0
 * @LastEditors: @yzcheng
 * @Description:
 * @LastEditTime: 2020-11-18 21:13:08
 */
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Provider } from 'mobx-react'
import { configure } from 'mobx'
import  {stores}  from '@models'
import App from './App'
import { ConfigProvider } from 'antd'
import { BrowserRouter as Router } from 'react-router-dom'
import zhCN from 'antd/lib/locale/zh_CN'
import moment from 'moment'
import 'moment/locale/zh-cn'
moment.locale('zh-cn')
configure({ enforceActions: 'always' })
ReactDOM.render(
  <Router>
    <ConfigProvider locale={zhCN}>
      <Provider {...stores}>
        <App />
      </Provider>
    </ConfigProvider>
  </Router>,
  document.getElementById('root')
)
