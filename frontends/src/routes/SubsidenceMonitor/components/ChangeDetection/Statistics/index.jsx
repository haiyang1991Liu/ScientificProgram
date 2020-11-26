/*
 * @Author: @yzcheng
 * @Date: 2020-11-17 20:38:33
 * @Version: 1.0
 * @LastEditors: @yzcheng
 * @Description: 统计表
 * @LastEditTime: 2020-11-24 18:48:29
 */
import React, { useState } from 'react'
import { Button, Table, DatePicker } from 'antd'
import { inject, observer } from 'mobx-react'
import Modal from '@Modal'
import { IMG_URL } from '@utils/serverUrl.js'
import './index.scss'
const { RangePicker } = DatePicker

const style = {
  width:'7rem'
}
function Index({ RiverSandCapa }) {
  const { AverageListData } = RiverSandCapa
  const [date, setDate] = useState('')
  const [visible, setVisible] = useState(false)
  const [columns] = useState([
    {
      title: '日期',
      dataIndex: 'date',
      key: 'date',
      align: 'center',
      width: 150,
    },
    {
      title: '平均表层含沙量浓度(kg/m³)',
      dataIndex: 'concentration',
      key: 'concentration',
      align: 'center',
      width: 300,
      render: (value) => {
        return value.toFixed(4)
      },
    },
    {
      title: '操作',
      dataIndex: 'date',
      key: 'address',
      align: 'center',
      width: 200,
      render: (value, item, index) => {
        return (
          <Button onClick={() => ShowResults(value)} type="primary">
            查看结果
          </Button>
        )
      },
    },
  ])
  const getAverageListData = (date, dateString) => {
    RiverSandCapa.getAverageListData(dateString)
  }
  const ShowResults = (date) => {
    setDate(date.replace(/-/g, ''))
    setVisible(true)
  }
  const close = () => {
    setVisible(false)
  }
  return (
    <div>
      <RangePicker onChange={getAverageListData} format="YYYY-MM-DD" />
      <Table
        dataSource={AverageListData}
        rowKey={(record) => record.id}
        columns={columns}
        pagination={{
          size: 'small',
          position: ['bottomCenter'],
          showSizeChanger:false,
        }}
        rowClassName={'table-td-color'}
      />
      <Modal
        footer={null}
        visible={visible}
        create
        onClose={() => close()}
        title="结果图片"
        className="image_results"
      >
        <img style={style} src={`${IMG_URL}/picture/${date}.png`} alt="" />
      </Modal>
    </div>
  )
}
export default inject('RiverSandCapa')(observer(Index))
