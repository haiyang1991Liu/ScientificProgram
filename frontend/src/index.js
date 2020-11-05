/*
 * @Author: @yzcheng
 * @Date: 2020-11-02 09:32:14
 * @Version: 1.0
 * @LastEditors: @yzcheng
 * @Description: 
 * @LastEditTime: 2020-11-05 10:36:07
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// 导入redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './store';
// import { LocaleProvider } from 'antd'
// import zh_CN from 'antd/lib/locale-provider/zh_CN'
import { BrowserRouter as Router } from "react-router-dom";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from 'redux-logger';
const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(logger)
  )
);

ReactDOM.render(
  <Router>
    {/* <LocaleProvider locale={zh_CN}> */}
      <Provider store={store}>
        <App />
      </Provider>
    {/* </LocaleProvider> */}
  </Router>,

  document.getElementById('root')
);