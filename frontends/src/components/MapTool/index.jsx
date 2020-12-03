import { CaretDownOutlined } from '@ant-design/icons'
// import "@components/Content/map.scss";
import { Dropdown, Menu } from 'antd'
import React, { Component } from 'react'
import screenfull from 'screenfull'
import styles from './index.module.scss'

// let allAreArr = [] //绘制的面数组
// let allMoveLineArr = [] //绘制中的线数组
// let allLineArr = [] //绘制的线数组
// let DRAWPOLYLINE //绘制的折线
// let DRAWMOVEPOLYLINE //绘制过程中的折线
// let measureMarkers = [] //测量显示marker 带上divIcon显示测量结果
class index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      DRAWING: false, //是否正在绘制
      DRAWLAYERS: [],
      BarDRAWLAYERS: [],
      ISMEASURE: false, //是否是量距
      DRAWPOLYLINEPOINTS: [], //绘制的折线的节点集
      DRAWPOLYGONPOINTS: [], //绘制的面的节点集
      isFullscreen: false,
      tuli: {
        active: false,
      },
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.resize.bind(this))
  }


  componentWillUnmount() {
    window.removeEventListener('resize', this.resize)
  }

  /**监控窗体变化*/
  resize() {
    if (!this.checkFull()) {
      // 全屏下按键esc后要执行的动作
      this.setState({
        isFullscreen: false,
      })
    }
  }

  /**
   * 复位
   */
  resetMap() {}

  /**
   * 全屏
   */
  fullScreen = () => {
    if (!screenfull.isEnabled) {
      return false
    }
    screenfull.toggle()
    this.setState({
      isFullscreen: !this.state.isFullscreen,
    })
  }

  checkFull() {
    let isFull =
      document.fullscreenEnabled ||
      window.fullScreen ||
      document.webkitIsFullScreen ||
      document.msFullscreenEnabled
    // to fix : false || undefined == undefined
    if (isFull === undefined) {
      isFull = false
    }
    return isFull
  }

  /**
   * 切换矢量底图
   */
  switchVectorBaseLayer() {}

  /**
   * 切换影像底图
   */
  switchImgBaseLayer() {}

  render() {
    const baseLayerMenu = (
      <Menu className={styles.menu}>
        <Menu.Item key="vec">
          <div
            rel="noopener noreferrer"
            onClick={this.switchVectorBaseLayer.bind(this)}
          >
            矢量地图
          </div>
        </Menu.Item>
        <Menu.Item key="img">
          <div
            rel="noopener noreferrer"
            onClick={this.switchImgBaseLayer.bind(this)}
          >
            卫星影像
          </div>
        </Menu.Item>
      </Menu>
    )
    return (
      <div className={styles.maptools}>
        <div className={styles.maptool}>
          <span className={'iconfont icondianxuan ' + styles.iconfont}></span>
          <div className={styles.maptoolText}>点选</div>
        </div>
        <div className={styles.maptool}>
          <span className={'iconfont iconkuangxuan ' + styles.iconfont}></span>
          <div className={styles.maptoolText}>框选</div>
        </div>
        <div className={styles.maptool}>
          <span
            className={'iconfont iconpoumianxian ' + styles.iconfont}
          ></span>
          <div className={styles.maptoolText}>剖面线</div>
        </div>
        <div className={styles.maptool}>
          <span className={'iconfont iconqingchu ' + styles.iconfont}></span>
          <div className={styles.maptoolText}>清除</div>
        </div>
        <div className={styles.maptool}>
          <span className={'iconfont iconchenjiang ' + styles.iconfont}></span>
          <div className={styles.maptoolText}>
            <Dropdown
              overlayClassName={styles.dropdown}
              overlay={baseLayerMenu}
              trigger={['click']}
            >
              <div
                className="ant-dropdown-link"
                onClick={(e) => e.preventDefault()}
              >
                沉降点 <CaretDownOutlined style={{ color: 'white' }} />
              </div>
            </Dropdown>
          </div>
        </div>
        <div className={styles.maptool}>
          <span className={'iconfont icontuceng1 ' + styles.iconfont}></span>
          <div className={styles.maptoolText}>
            <Dropdown
              overlayClassName={styles.dropdown}
              overlay={baseLayerMenu}
              trigger={['click']}
            >
              <div
                className="ant-dropdown-link"
                onClick={(e) => e.preventDefault()}
              >
                图层 <CaretDownOutlined style={{ color: 'white' }} />
              </div>
            </Dropdown>
          </div>
        </div>
        <div className={styles.maptool} onClick={this.resetMap.bind(this)}>
          <span className={'iconfont icondingwei ' + styles.iconfont}></span>
          <div className={styles.maptoolText}>复位</div>
        </div>
        <div className={styles.maptool} onClick={this.fullScreen.bind(this)}>
          <span
            className={
              'iconfont icon-quanping ' +
              (this.state.isFullscreen
                ? 'iconquanpingtuichu '
                : 'iconquanping ') +
              styles.iconfont
            }
          ></span>
          <div className={styles.maptoolText}>
            {this.state.isFullscreen ? '退出全屏' : '全屏'}
          </div>
        </div>
      </div>
    )
  }
}

export default index
