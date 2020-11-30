/*
 * @Author: @yzcheng
 * @Date: 2020-11-17 14:53:26
 * @Version: 1.0
 * @LastEditors: @yzcheng
 * @Description:
 * @LastEditTime: 2020-11-27 15:12:27
 */
import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'
import Modal from '@Modal'
import ChangeDetection from './ChangeDetection'
import DistributedComputing from './DistributedComputing'
import ProjectManagement from './ProjectManagement'
import { observer, inject } from 'mobx-react'
function Index({ RiverSandCapa, SubsidenceMonitor }) {
  const [options] = useState([
    { name: '项目管理', icon: 'iconxiangmuguanli' },
    { name: '沉降监测', icon: 'iconzu9092' },
    { name: '隐患排查', icon: 'iconyinhuanpaicha' },
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
    SubsidenceMonitor.getSubsidenceListData()
  }, [RiverSandCapa, SubsidenceMonitor])
  return (
    <div className={styles.tooltip}>
      {options.map((item, index) => {
        return (
          <div
            key={index}
            className={action === index ? styles.action : ''}
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
          {componentKey === '沉降监测' && <DistributedComputing />}
          {componentKey === '隐患排查' && <ChangeDetection />}
        </>
      </Modal>
    </div>
  )
}

export default inject('RiverSandCapa', 'SubsidenceMonitor')(observer(Index))
