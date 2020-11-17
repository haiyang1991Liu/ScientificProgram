/*
 * @Author: @yzcheng
 * @Date: 2020-11-17 20:38:33
 * @Version: 1.0
 * @LastEditors: @yzcheng
 * @Description: 统计表
 * @LastEditTime: 2020-11-17 20:53:44
 */
import React from 'react'
import { Button, Table, Input } from 'antd'
const { Search } = Input
const dataSource = [
  {
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号',
  },
]
const columns = [
  {
    title: '序号',
    dataIndex: 'name',
    key: 'name',
    render: (value, item, index) => {
      return index + 1
    },
  },
  {
    title: '项目名称',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '标签名称',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '区域矢量文件',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '操作',
    dataIndex: 'address',
    key: 'address',
    render: (value, item, index) => {
      return (
        <>
          <Button type="primary">编辑</Button>{' '}
          <Button type="primary" danger>
            删除
          </Button>
        </>
      )
    },
  },
]
export default function index() {
    return (
      <div>
        <Search
          placeholder="input search text"
          enterButton
        />
        <Table dataSource={dataSource} columns={columns} />
      </div>
    )
}
