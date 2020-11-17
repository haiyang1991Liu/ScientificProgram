/*
 * @Author: @yzcheng
 * @Date: 2020-11-17 16:49:15
 * @Version: 1.0
 * @LastEditors: @yzcheng
 * @Description: 分布计算
 * @LastEditTime: 2020-11-17 21:13:42
 */
import React from 'react'
import { Row, Col, Steps, Select } from 'antd'
import StateInformation from './StateInformation'
const { Step } = Steps
const { Option } = Select
export default function index() {
  return (
    <div>
      <Row>
        <Col span={3}>空间分布计算</Col>
        <Col span={21}>
          <Select style={{ width: 120 }}>
            <Option value="1">项目1</Option>
          </Select>
        </Col>
        <Col span={3}>
          <Steps direction="vertical" size="default" current={1}>
            <Step />
            <Step />
            <Step />
          </Steps>
        </Col>
        <Col span={21}>
          <StateInformation />
        </Col>
      </Row>
    </div>
  )
}
