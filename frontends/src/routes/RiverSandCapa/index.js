/*
 * @Author: @yzcheng
 * @Date: 2020-11-12 10:44:29
 * @Version: 1.0
 * @LastEditors: @yzcheng
 * @Description: 河道含沙界面
 * @LastEditTime: 2020-11-24 16:39:13
 */
import React, { Component } from 'react'
import { map } from '@utils/MapInstance'
import {
  TIANDITU_TOKEN,
  MAP_YGYX_ISERVER,
} from '@assets/constant/LeafletConstant'
import Options from './components'
import { extendLeaflet } from '@utils/leafletExtend.js'
import L from 'leaflet'
import { inject, observer } from 'mobx-react'
import RiverSandCapaLegend from '@assets/images/RiverSandCapaLegend.png'

const style = {
  width: '3.85rem',
  height: '.43rem',
  zIndex: '9999',
  position: 'fixed',
  bottom: '0',
  right: '0',
}

@inject('RiverSandCapa')
@observer
class RiverSandCapa extends Component {
  constructor(props) {
    super(props)
    extendLeaflet()
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
    this.props.RiverSandCapa.initMap(this.map)
  }

  render() {
    return (
      <>
        <Options />
        <div id="map2D" style={{ width: '100%', height: '100%' }}></div>
        <img style={style} src={RiverSandCapaLegend} alt="" />
      </>
    )
  }
}

export default RiverSandCapa
