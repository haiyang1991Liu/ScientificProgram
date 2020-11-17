/*
 * @Author: @yzcheng
 * @Date: 2020-11-12 10:44:29
 * @Version: 1.0
 * @LastEditors: @yzcheng
 * @Description: 河道含沙界面
 * @LastEditTime: 2020-11-16 22:30:59
 */

import React, { Component } from 'react'
import { map } from '@utils/MapInstance'
import {
  TIANDITU_TOKEN,
  MAP_YGYX_ISERVER,
} from '@assets/constant/LeafletConstant'

import L from 'leaflet'
class RiverSandCapa extends Component {
  constructor(props) {
    super(props)
    this.map = null
    this.state = {}
  }
  componentDidMount() {
    this.map = map('map2D', {})
    L.supermap
      .tiandituTileLayer({ key: TIANDITU_TOKEN, layerType: 'img' })
      .addTo(this.map.map)
    L.supermap.tiledMapLayer(MAP_YGYX_ISERVER).addTo(this.map.map)
    L.control.scale().addTo(this.map.map)
  }

  render() {
    return <div id="map2D" style={{ width: '100%', height: '100%' }}></div>
  }
}

export default RiverSandCapa
