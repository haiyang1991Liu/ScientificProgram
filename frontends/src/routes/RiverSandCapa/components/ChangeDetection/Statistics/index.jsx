/*
 * @Author: @yzcheng
 * @Date: 2020-11-17 20:38:33
 * @Version: 1.0
 * @LastEditors: @yzcheng
 * @Description: 统计表
 * @LastEditTime: 2020-11-18 21:24:05
 */
import React from 'react'
import { Button, Table, DatePicker } from 'antd'
import { inject, observer } from 'mobx-react'
const { RangePicker } = DatePicker
const columns = [
  {
    title: '日期',
    dataIndex: 'date',
    key: 'date',
    render: (value) => {
      return value.join('-')
    },
  },
  {
    title: '平均表层含沙量浓度(kg/m³)',
    dataIndex: 'concentration',
    key: 'concentration',
    render: (value) => {
      return value.toFixed(4)
    },
  },
  {
    title: '操作',
    dataIndex: 'address',
    key: 'address',
    render: (value, item, index) => {
      return <Button type="primary">查看结果</Button>
    },
  },
]
function index({ RiverSandCapa }) {
  const { AverageListData } = RiverSandCapa
  const getAverageListData = (date, dateString) => {
    RiverSandCapa.getAverageListData(dateString)
  }
  return (
    <div>
      <RangePicker onChange={getAverageListData} format="YYYY-MM-DD" />
      <Table
        dataSource={AverageListData}
        rowKey={(record) => record.id}
        columns={columns}
      />
    </div>
  )
}
export default inject('RiverSandCapa')(observer(index))