/*
 * @Author: @yzcheng
 * @Date: 2020-11-11 17:37:42
 * @Version: 1.0
 * @LastEditors: @yzcheng
 * @Description: 
 * @LastEditTime: 2020-11-11 18:03:44
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ErrorBoundary } from './components'
// 导入redux
import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import rootReducer from './store';
import { BrowserRouter as Router } from "react-router-dom";
// import { composeWithDevTools } from "redux-devtools-extension";
// import logger from 'redux-logger';
// const store = createStore(
//   rootReducer,
//   composeWithDevTools(
//     applyMiddleware(logger)
//   )
// );
ReactDOM.render(
  <ErrorBoundary>
    <Router>
      {/* <Provider store={store}> */}
        <React.StrictMode>
          <App />
        </React.StrictMode>
      {/* </Provider> */}
    </Router>
  </ErrorBoundary>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
