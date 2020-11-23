/*
 * @Author: @yzcheng
 * @Date: 2020-11-17 20:38:33
 * @Version: 1.0
 * @LastEditors: @yzcheng
 * @Description: 统计表
 * @LastEditTime: 2020-11-23 16:41:24
 */
import React from 'react'
import { Button, Table, DatePicker } from 'antd'
import { inject, observer } from 'mobx-react'
import'./index.scss';
const { RangePicker } = DatePicker
const columns = [
  {
    title: '日期',
    dataIndex: 'date',
    key: 'date',
    align: 'center',
    render: (value) => {
      return value.join('-')
    },
  },
  {
    title: '平均表层含沙量浓度(kg/m³)',
    dataIndex: 'concentration',
    key: 'concentration',
    align: 'center',
    render: (value) => {
      return value.toFixed(4)
    },
  },
  {
    title: '操作',
    dataIndex: 'address',
    key: 'address',
    align: 'center',
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
        scroll={{ x: '10.24rem', y: '5rem' }}
        rowClassName={'table-td-color'}
      />
    </div>
  )
}
export default inject('RiverSandCapa')(observer(index))