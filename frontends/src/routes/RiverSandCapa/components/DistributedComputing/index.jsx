/*
 * @Author: @yzcheng
 * @Date: 2020-11-17 16:49:15
 * @Version: 1.0
 * @LastEditors: @yzcheng
 * @Description: 分布计算
 * @LastEditTime: 2020-11-20 15:23:58
 */
import React, { useState } from 'react'
import { Row, Col, Steps, Select } from 'antd'
import StateInformation from './StateInformation'
import { inject, observer } from 'mobx-react'
const { Step } = Steps
const { Option } = Select
function Index({ RiverSandCapa }) {
  const { RiverSandCapaData } = RiverSandCapa
  const [data, setdata] = useState({})
  const changeParticulars = async (value, item) => {
    if (value === '0') {
      setdata({})
      return 
    }
      await RiverSandCapa.getProjectParticulars(value).then((res) => {
        setdata(Object.assign({ ...item, ...res.data }))
      })
  }
  return (
    <div>
      <Row>
        <Col span={3}>空间分布计算</Col>
        <Col span={21}>
          <Select
            onChange={changeParticulars}
            defaultValue="0"
            style={{ width: 250 }}
          >
            <Option value={'0'}>请选择</Option>
            {RiverSandCapaData.map((item) => {
              return (
                <Option data={item} value={item.id}>
                  {item.projectName}
                </Option>
              )
            })}
          </Select>
        </Col>
        <Col span={3}>
          <Steps direction="vertical" size="default" current={0}>
            <Step />
            <Step />
            <Step />
          </Steps>
        </Col>
        <Col span={21}>
          <StateInformation data={data} />
        </Col>
      </Row>
    </div>
  )
}
export default inject('RiverSandCapa')(observer(Index))
