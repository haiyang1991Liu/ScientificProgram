/*
 * @Author: @yzcheng
 * @Date: 2020-11-17 16:48:48
 * @Version: 1.0
 * @LastEditors: @yzcheng
 * @Description: 项目管理
 * @LastEditTime: 2020-11-17 20:32:34
 */
import React, { Component } from 'react'
import { Table, Button, Form, Input, Upload, message } from 'antd'
import Modal from '@Modal'
import { UploadOutlined } from '@ant-design/icons'
// import reqwest from 'reqwest'
const dataSource = [
  {
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号',
  },
]
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
}
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
}
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
export default class index extends Component {
  constructor(props) {
    super()
    this.state = {
      visible: false,
      fileList: [],
      uploading: false,
    }
  }
  createData = () => {
    this.setState({
      visible: true,
    })
  }
  hide = () => {
    this.setState({
      visible: false,
    })
  }
  onFinish = (values) => {
    console.log('Success:', values)
  }

  onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }
  handleUpload = () => {
    const { fileList } = this.state
    const formData = new FormData()
    fileList.forEach((file) => {
      formData.append('files[]', file)
    })

    this.setState({
      uploading: true,
    })

    // You can use any AJAX library you like
    // reqwest({
    //   url: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    //   method: 'post',
    //   processData: false,
    //   data: formData,
    //   success: () => {
    //     this.setState({
    //       fileList: [],
    //       uploading: false,
    //     })
    //     message.success('upload successfully.')
    //   },
    //   error: () => {
    //     this.setState({
    //       uploading: false,
    //     })
    //     message.error('upload failed.')
    //   },
    // })
  }

  render() {
    const { visible, uploading, fileList } = this.state
    const props = {
      onRemove: (file) => {
        this.setState((state) => {
          const index = state.fileList.indexOf(file)
          const newFileList = state.fileList.slice()
          newFileList.splice(index, 1)
          return {
            fileList: newFileList,
          }
        })
      },
      beforeUpload: (file) => {
        this.setState((state) => ({
          fileList: [...state.fileList, file],
        }))
        return false
      },
      fileList,
    }
    return (
      <div>
        <Button onClick={this.createData} type="primary">
          新建
        </Button>
        <Table dataSource={dataSource} columns={columns} />
        <Modal onClose={this.hide} footer={null} visible={visible}>
          <Form
            {...layout}
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
          >
            <Form.Item label="项目名称" name="name">
              <Input />
            </Form.Item>
            <Form.Item label="项目名称" name="name">
              <Input style={{ width: '1.7rem' }} />
              <Upload {...props}>
                <Button icon={<UploadOutlined />}>Select File</Button>
              </Upload>
            </Form.Item>

            <Form.Item label="标签名称" name="password">
              <Input />
            </Form.Item>
            <Form.Item {...tailLayout}>
              <Button type="default">取消</Button>
              <Button type="primary" htmlType="submit">
                保存{' '}
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    )
  }
}
