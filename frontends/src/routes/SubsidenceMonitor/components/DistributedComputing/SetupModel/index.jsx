/*
 * @Author: @yzcheng
 * @Date: 2020-11-17 21:08:56
 * @Version: 1.0
 * @LastEditors: @yzcheng
 * @Description:
 * @LastEditTime: 2020-11-25 14:57:22
 */
import React from 'react'
import { Button, Input } from 'antd'
import styles from './index.module.scss'
export default function index({ visible ,saveModel}) {
  return (
    <div className={styles.setup_model}>
      <div>裁剪影像文件：长江航道高分遥感影像图.tif</div>
      <div>
        <div>
          训练数据文件：
          <Input style={{ width: '2.3rem' }} readOnly="readOnly" />
        </div>
        <Button disabled={visible} type="primary">
          选择文件
        </Button>
      </div>
      <div>结果文件：</div>
      <div className={styles.setup_model_operation}>
        <Button disabled={visible} danger>
          清空
        </Button>
        <Button disabled={visible} onClick={saveModel} type="primary">
          保存
        </Button>
      </div>
    </div>
  )
}
