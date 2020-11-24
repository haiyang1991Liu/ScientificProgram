/*
 * @Author: @yzcheng
 * @Date: 2020-11-17 21:08:56
 * @Version: 1.0
 * @LastEditors: @yzcheng
 * @Description:
 * @LastEditTime: 2020-11-24 17:05:56
 */
import React from 'react'
import { Button } from 'antd'
import styles from './index.module.scss'
export default function index({ data }) {
  return (
    <div className={styles.image_cropping}>
      <div>影像文件：长江航道高分遥感影像图.tif</div>
      <div>
        <div>掩膜文件：{data.sedimentShp && data.sedimentShp.shpName}</div>
        <Button type="primary">重新导入</Button>
      </div>
      <div>结果文件：</div>
      <div className={styles.image_cropping_operation}>
        <Button danger>暂停</Button>
        <Button type="primary">开始</Button>
        <Button type="primary">结果预览</Button>
      </div>
    </div>
  )
}
