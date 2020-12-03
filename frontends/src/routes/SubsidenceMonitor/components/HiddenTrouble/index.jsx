/*
 * @Author: @yzcheng
 * @Date: 2020-11-17 16:49:39
 * @Version: 1.0
 * @LastEditors: @yzcheng
 * @Description: 变化监测
 * @LastEditTime: 2020-12-02 16:18:39
 */
import React, { useState } from 'react'
import { Select, Progress, Table, Button } from 'antd'
import styles from './index.module.scss'
const { Option } = Select
export default function Index() {
  const [percent, setPercent] = useState(1)
  const [times,setTimes] = useState(null)
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
  return (
    <div className={styles.hidden_rouble}>
      <div>
        项目名称：
        <Select defaultValue="xxx" style={{ width: '2.4rem' }}>
          <Option value="xxx">xxx项目</Option>
          <Option value="xxx1">adasd项目</Option>
          <Option value="xxx2">asda项目</Option>
        </Select>
        <Button onClick={() => forScreening()} type="primary">
          隐患排查
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
