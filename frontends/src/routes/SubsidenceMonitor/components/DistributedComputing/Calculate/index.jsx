/*
 * @Author: @yzcheng
 * @Date: 2020-11-17 21:08:56
 * @Version: 1.0
 * @LastEditors: @yzcheng
 * @Description:
 * @LastEditTime: 2020-11-25 11:06:16
 */
import React from 'react'
import { Button} from 'antd'
import styles from './index.module.scss'
export default function index({ visible }) {
  return (
    <div className={styles.calculate}>
      <div>
        正在计算表层含沙量，这可能需要几分钟时间，请稍候。
        （如果计算完成，则提示计算完成
      </div>
      <div className={styles.calculate_operation}>
        <Button disabled={visible} type="primary">
          结果查看
        </Button>
      </div>
    </div>
  )
}
