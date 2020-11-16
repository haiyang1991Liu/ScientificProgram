/*
 * @Author: @yzcheng
 * @Date: 2020-11-12 16:15:02
 * @Version: 1.0
 * @LastEditors: @yzcheng
 * @Description: 
 * @LastEditTime: 2020-11-16 18:50:05
 */
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, '.', dir)
}

/* config-overrides.js */
module.exports = function override(config, env) {
  //do stuff with the webpack config...
  // alias
  config['externals'] = {
    leaflet: 'window.L',
  }
  config.resolve.alias = {
    ...config.resolve.alias,
    '@': resolve('src'),
    '@components': resolve('src/components'),
    '@api': resolve('src/api'),
    '@store': resolve('src/store'),
    '@models': resolve('src/models'),
    '@utils': resolve('src/utils'),
    '@assets': resolve('src/assets'),
    '@routes': resolve('src/routes'),
  }
  return config
}
