/*
 * @Author: @yzcheng
 * @Date: 2020-11-13 14:20:06
 * @Version: 1.0
 * @LastEditors: @yzcheng
 * @Description:
 * @LastEditTime: 2020-11-19 17:47:36
 */
import L from 'leaflet'
import {
  MAP_INIT_OPTIONS,
  // MAP_FEATUREGROUP,
} from '@assets/constant/LeafletConstant'
// import { message } from 'antd'
class Map {
  constructor(mapId, options) {
    this.map = L.map(mapId, {
      zoom: MAP_INIT_OPTIONS.ZOOM,
      center: MAP_INIT_OPTIONS.CENTER,
      crs: MAP_INIT_OPTIONS.CRS,
      zoomControl:false,
      ...options,
    })
    this.initBaseLayers = options.initBaseLayers || [] // 初始底图
    this.init()
  }
  init() {
    this.changeBaseLayer(this.initBaseLayers)
    L.control.scale().addTo(this.map)
  }
  changeBaseLayer(layers) {
    if (!layers || !layers.length || layers.length === 0) {
      // message.error('底图图层信息为空，联系管理员')
      return 
    }
    layers.forEach(item => {
      item.addTo(this.map)
      // console.log(this.map.getLayerId(item))
    })
  }
}

export function map(mapId, option) {
  return new Map(mapId, option)
}
