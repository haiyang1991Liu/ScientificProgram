/*
 * @Author: @yzcheng
 * @Date: 2020-11-12 10:44:29
 * @Version: 1.0
 * @LastEditors: @yzcheng
 * @Description: 沉降监测
 * @LastEditTime: 2020-12-01 14:20:38
 */

import { inject, observer } from 'mobx-react'
import React, { Component } from 'react'
import SubsidenceMonitorLegend from '@assets/images/SubsidenceMonitorLegend.png';
import MapTool from '@components/MapTool'
import Options from './components';
const style = {
  width: '3.85rem',
  height: '.86rem',
  zIndex: '9999',
  position: 'fixed',
  bottom: '0',
  right: '0',
}

@inject('SubsidenceMonitor')
@observer
class ContructionProgress extends Component {
  componentDidMount() {
    if (window.Cesium) {
      new window.Cesium.Viewer('map3D', {
        infoBox: false,
        selectionIndicator: false,
        orderIndependentTranslucency: false,
        automaticallyTrackDataSourceClocks: true,
        contextOptions: {
          webgl: {
            alpha: true,
          },
        },
        animation: false,
        timeline: false,
        shouldAnimate: true,
      })
    }
  }
  render() {
    return (
      <>
        <Options />
        <div id="map3D" style={{width:'100%',height:'100%'}}></div>
        <img style={style} src={SubsidenceMonitorLegend} alt="" />
        <MapTool />
      </>
    )
  }
}

export default ContructionProgress
