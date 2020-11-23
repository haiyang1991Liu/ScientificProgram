/*
 * @Author: @yzcheng
 * @Date: 2020-11-17 14:53:26
 * @Version: 1.0
 * @LastEditors: @yzcheng
 * @Description:
 * @LastEditTime: 2020-11-23 16:46:53
 */
import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'
import Modal from '@Modal'
import ChangeDetection from './ChangeDetection'
import DistributedComputing from './DistributedComputing'
import ProjectManagement from './ProjectManagement'
import { observer, inject } from 'mobx-react'
function Index({ RiverSandCapa }) {
  const [options] = useState([
    { name: '项目管理', icon: 'iconxiangmuguanli' },
    { name: '分布计算', icon: 'iconfenbu' },
    { name: '变化监测', icon: 'iconshouye-feiyongqushifenxi' },
  ])
  const [componentKey, setComponentKey] = useState()
  const [action, setAction] = useState()
  const [visible, setVisible] = useState(false)
  const setView = (key, index) => {
    setVisible(true)
    setComponentKey(key.name)
    setAction(index)
  }
  const hide = (key) => {
    setVisible(false)
     setAction()
  }
  useEffect(() => {
    RiverSandCapa.getAverageListData()
    RiverSandCapa.getListData()
  }, [RiverSandCapa])
  return (
    <div className={styles.tooltip}>
      {options.map((item, index) => {
        return (
          <div
            key={index}
            className={action === index ? styles.action:''}
            onClick={() => setView(item, index)}
          >
            <div className={`iconfont ${item.icon}`}></div>
            <div>{item.name}</div>
          </div>
        )
      })}
      <Modal
        title={componentKey}
        onClose={() => hide()}
        footer={null}
        visible={visible}
      >
        <>
          {componentKey === '项目管理' && <ProjectManagement />}
          {componentKey === '分布计算' && <DistributedComputing />}
          {componentKey === '变化监测' && <ChangeDetection />}
        </>
      </Modal>
    </div>
  )
}

export default inject('RiverSandCapa')(observer(Index))
