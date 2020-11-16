/*
 * @Author: @yzcheng
 * @Date: 2020-11-11 20:58:02
 * @Version: 1.0
 * @LastEditors: @yzcheng
 * @Description:
 * @LastEditTime: 2020-11-16 18:49:52
 */
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Provider } from 'mobx-react'
import  stores  from '@models'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
ReactDOM.render(
  <Router>
    <Provider {...stores}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
)
