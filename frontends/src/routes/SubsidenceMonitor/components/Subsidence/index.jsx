/*
 * @Author: @yzcheng
 * @Date: 2020-11-17 16:49:15
 * @Version: 1.0
 * @LastEditors: @yzcheng
 * @Description: 分布计算
 * @LastEditTime: 2020-12-03 16:13:12
 */
import React, { useState, useEffect } from 'react'
import { Select, Progress, Form, Input, Button, Table } from 'antd'
import { inject, observer } from 'mobx-react'
import styles from './index.module.scss'
const { Option } = Select

const layout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 18,
  },
}
const tailLayout = {
  wrapperCol: {
    offset: 6,
    span: 18,
  },
}
function Index({ RiverSandCapa }) {
  const [percent, setPercent] = useState(1)
  const [times, setTimes] = useState(null)
  const [columns] = useState([
    {
      title: '序号',
      dataIndex: 'name',
      key: 'name',
      align: 'center',
      render: (value, item, index) => {
        return index + 1
      },
    },
    {
      title: '项目名称',
      dataIndex: 'projectName',
      key: 'projectName',
      align: 'center',
      width: 300,
    },
  ])
  const forScreening = (item) => {
    if (times) return
    let num = percent
    const time = setInterval(() => {
      num += Math.random()
      setPercent(Math.floor(num))
      if (num > 100) {
        clearInterval(time)
      }
    }, 50)
    setTimes(time)
  }
  const onFinish = (values) => {
    console.log(values)
  }

  return (
    <div className={styles.subsidence_content}>
      <div>
        项目名称：
        <Select defaultValue="xxx" style={{ width: '2.4rem' }}>
          <Option value="xxx">xxx项目</Option>
          <Option value="xxx1">adasd项目</Option>
          <Option value="xxx2">asda项目</Option>
        </Select>
        <Button onClick={() => forScreening()} type="primary">
          沉降监测
        </Button>
      </div>
      <div className={styles.project_progress}>
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
      <div>
        <h1></h1>
        <Form {...layout} name="control-hooks" className={styles.sub_name} onFinish={onFinish}>
          <Form.Item colon={false} name="a" label="沉降速率   <">
            <Input />
            mm/y
          </Form.Item>
          <Form.Item colon={false} name="b" label="沉降速率   >">
            <Input />
            mm/y
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              查询
            </Button>
            <Button danger htmlType="button">
              清除
            </Button>
          </Form.Item>
        </Form>
      </div>
      <Table
        onRow={(record) => {
          return {
            onClick: (event) => {
              this.onShowMap(record)
            }, // 点击行
          }
        }}
        pagination={{
          size: 'small',
          position: ['bottomCenter'],
          showSizeChanger: false,
        }}
        rowKey={(record) => record.id}
        dataSource={[]}
        columns={columns}
      />
    </div>
  )
}
export default inject('RiverSandCapa')(observer(Index))
