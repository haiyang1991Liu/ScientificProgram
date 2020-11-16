/*
 * @Author: @yzcheng
 * @Date: 2020-11-12 15:01:42
 * @Version: 1.0
 * @LastEditors: @yzcheng
 * @Description: 
 * @LastEditTime: 2020-11-12 15:48:25
 */
const { createProxyMiddleware } = require('http-proxy-middleware')
module.exports = function (app) {
  // ...
    app.use(createProxyMiddleware('/api', { target: 'http://localhost:5000/' }))
}