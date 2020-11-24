/*
 * @Author: @yzcheng
 * @Date: 2020-11-17 21:08:56
 * @Version: 1.0
 * @LastEditors: @yzcheng
 * @Description:
 * @LastEditTime: 2020-11-24 17:06:20
 */
import React from 'react'
import { Button, Progress, Input } from 'antd'
import styles from './index.module.scss'
export default function index() {
  return (
    <div className={styles.setup_model}>
      <div>裁剪影像文件：长江航道高分遥感影像图.tif</div>
      <div>
        <div>
          训练数据文件：
          <Input style={{ width: '2.3rem' }} readOnly="readOnly" />
        </div>
        <Button type="primary">选择文件</Button>
      </div>
      <div>结果文件：</div>
      <div className={styles.setup_model_operation}>
        <Button danger>清空</Button>
        <Button type="primary">保存</Button>
      </div>
    </div>
  )
}
