/*
 * @Author: @yzcheng
 * @Date: 2020-11-17 16:49:15
 * @Version: 1.0
 * @LastEditors: @yzcheng
 * @Description: 分布计算
 * @LastEditTime: 2020-11-25 15:37:16
 */
import React, { useState, useEffect } from 'react'
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
  const [percent, setPercent] = useState(0)
  const [time, setTime] = useState(null)
  const [visible, setVisible] = useState(true) //是否可以点击
  const [Steps, setSteps] = useState([
    { name: '影像裁剪', key: 1, status: 'undo' },
    { name: '模型设置', key: 2, status: 'undo' },
    { name: '计算', key: 3, status: 'undo' },
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
  useEffect(() => {
    if (data.id) {
      setVisible(false)
    } else {
      setVisible(true)
    }
  }, [data])
  useEffect(() => {
    return () => {
      if (time) {
        clearInterval(time)
      }
    }
  }, [time])
  const changeStep = ({ key }) => {
    setStep(key)
    setPercent(0)
  }
  const StartCounting = (val) => {
    let num = percent
    const times = setInterval(() => {
      num += Math.random()
      setPercent(Math.floor(num))
      if (num > 100) {
        Steps.find((item) => item.key === val).status = 'Done'
        Steps.find((item) => item.key === 2).status = 'Doing'
        setSteps([...Steps])
        clearInterval(times)
      }
    }, 50)
    Steps.find((item) => item.key === val).status = 'Doing'
    setSteps([...Steps])
    setTime(times)
  }
  const Suspended = () => {
    if (time) {
      clearInterval(time)
    }
  }
  const saveModel = () => {
    Steps.find((item) => item.key === 2).status = 'Done'
    Steps.find((item) => item.key === 3).status = 'Doing'
    setSteps([...Steps])
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
          {Steps.map((item, index) => {
            return (
              <div
                onClick={() => changeStep(item)}
                className={`${styles.distributed_step} ${
                  item.status === 'Doing' && styles.Doing
                } ${item.status === 'Done' && styles.Done}`}
                key={item.key}
              >
                {item.name}
              </div>
            )
          })}
        </div>
        <div>
          {Step === 1 && (
            <StateInformation
              StartCounting={StartCounting}
              Suspended={Suspended}
              visible={visible}
              percent={percent}
              data={data}
            />
          )}
          {Step === 2 && (
            <SetupModel saveModel={saveModel} visible={visible} data={data} />
          )}
          {Step === 3 && (
            <Calculate
              StartCounting={StartCounting}
              visible={visible}
              data={data}
            />
          )}
          <div>
            <Progress
              trailColor={'#216665'}
              strokeLinecap="round"
              strokeWidth={20}
              status="active"
              style={{ marginBottom: '.2rem' }}
              percent={percent}
              strokeColor={{
                from: '#00FFFF',
                to: '#00FFFF',
              }}
            />
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
