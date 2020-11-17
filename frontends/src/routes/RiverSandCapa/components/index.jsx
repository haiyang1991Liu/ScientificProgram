/*
 * @Author: @yzcheng
 * @Date: 2020-11-17 14:53:26
 * @Version: 1.0
 * @LastEditors: @yzcheng
 * @Description:
 * @LastEditTime: 2020-11-17 18:34:41
 */
import React, { useState } from 'react'
import styles from './index.module.scss'
import Modal from '@Modal'
import ChangeDetection from './ChangeDetection'
import DistributedComputing from './DistributedComputing'
import ProjectManagement from './ProjectManagement'
export default function Index() {
  const [options] = useState(['项目管理', '分布计算', '变化监测'])
  const [componentKey, setComponentKey] = useState()
  const [visible, setVisible] = useState(false)
  const setView = (key) => {
    setVisible(false)
    setVisible(true)
    setComponentKey(key)
  }
  const hide = (key) => {
    setVisible(false)
  }
  return (
    <div className={styles.tooltip}>
      {options.map((item, index) => {
        return (
          <div key={index} onClick={() => setView(item)}>
            {item}
          </div>
        )
      })}
      <Modal
        onClose={() => hide()}
        footer={null}
        visible={visible}
      >
        {componentKey === '项目管理' && <ProjectManagement />}
        {componentKey === '分布计算' && <DistributedComputing />}
        {componentKey === '变化监测' && <ChangeDetection />}
      </Modal>
    </div>
  )
}