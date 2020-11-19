/*
 * @Author: @yzcheng
 * @Date: 2020-11-12 10:44:29
 * @Version: 1.0
 * @LastEditors: @yzcheng
 * @Description: 河道含沙界面
 * @LastEditTime: 2020-11-18 14:24:52
 */

import React, { Component } from 'react'
import { map } from '@utils/MapInstance'
import {
  TIANDITU_TOKEN,
  MAP_YGYX_ISERVER,
} from '@assets/constant/LeafletConstant'
import Options from './components'
import L from 'leaflet'
class RiverSandCapa extends Component {
  constructor(props) {
    super(props)
    this.map = null
    this.state = {}
  }
  componentDidMount() {
    this.map = map('map2D', {
      initBaseLayers: [
        L.supermap.tiandituTileLayer({ key: TIANDITU_TOKEN, layerType: 'img' }),
        L.supermap.tiledMapLayer(MAP_YGYX_ISERVER),
      ],
    })
  }

  render() {
    return (
      <>
        <Options />
        <div id="map2D" style={{ width: '100%', height: '100%' }}></div>
      </>
    )
  }
}

export default RiverSandCapa
