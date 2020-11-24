/*
 * @Author: @yzcheng
 * @Date: 2020-11-17 16:49:15
 * @Version: 1.0
 * @LastEditors: @yzcheng
 * @Description: 分布计算
 * @LastEditTime: 2020-11-24 16:54:07
 */
import React, { useState } from 'react'
import { Select, Progress } from 'antd'
import StateInformation from './StateInformation'
import SetupModel from './SetupModel'
import Calculate from './Calculate'
import { inject, observer } from 'mobx-react'
import styles from './index.module.scss'
const { Option } = Select
function Index({ RiverSandCapa }) {
  const { RiverSandCapaData } = RiverSandCapa
  const [data, setData] = useState({})
  const [Steps] = useState([
    { name: '影像裁剪', key: 1 },
    { name: '模型设置', key: 2 },
    { name: '计算', key: 3 },
  ])
  const [Step, setStep] = useState(1)
  const changeParticulars = async (value, item) => {
    if (value === '0') {
      setData({})
      return
    }
    await RiverSandCapa.getProjectParticulars(value).then((res) => {
      setData(Object.assign({ ...item, ...res.data }))
    })
  }
  const changeStep = ({key}) => {
    setStep(key)
  }
  return (
    <div className={styles.distributed_content}>
      <div className={styles.distributed_header}>
        <div className={styles.distributed_title}>空间分布计算：</div>
        <Select
          onChange={changeParticulars}
          defaultValue="0"
          style={{ width: 250 }}
        >
          <Option key={'0'} value={'0'}>
            请选择
          </Option>
          {RiverSandCapaData.map((item) => {
            return (
              <Option data={item} key={item.id} value={item.id}>
                {item.projectName}
              </Option>
            )
          })}
        </Select>
      </div>
      <div className={styles.distributed_box}>
        <div className={styles.distributed_steps}>
          {Steps.map((item) => {
            return (
              <div
                onClick={() => changeStep(item)}
                className={styles.distributed_step}
                key={item.key}
              >
                {item.name}
              </div>
            )
          })}
        </div>
        <div>
          {Step === 1 && <StateInformation data={data} />}
          {Step === 2 && <SetupModel data={data} />}
          {Step === 3 && <Calculate data={data} />}
          <div>
            <Progress percent={0} />
          </div>
          <div className={styles.image_cropping_legend}>
            <div>未开始</div>
            <div>进行中</div>
            <div>完成</div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default inject('RiverSandCapa')(observer(Index))
