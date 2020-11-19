/*
 * @Author: @yzcheng
 * @Date: 2020-11-12 16:15:02
 * @Version: 1.0
 * @LastEditors: @yzcheng
 * @Description:
 * @LastEditTime: 2020-11-18 15:13:21
 */
const path = require('path')
const { override, addDecoratorsLegacy } = require('customize-cra')
function resolve(dir) {
  return path.join(__dirname, '.', dir)
}

module.exports = override(addDecoratorsLegacy(), (config, env) => {
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
    '@Modal': resolve('src/components/Modal/Modal.jsx'),
    '@assets': resolve('src/assets'),
    '@routes': resolve('src/routes'),
  }
  return config
})
/* config-overrides.js */
