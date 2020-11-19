/*
 * @Author: @yzcheng
 * @Date: 2020-11-17 16:48:48
 * @Version: 1.0
 * @LastEditors: @yzcheng
 * @Description: 项目管理
 * @LastEditTime: 2020-11-18 20:25:48
 */
import React, { Component } from 'react'
import { Table, Button, Form, Input, Upload, Popconfirm } from 'antd'
import Modal from '@Modal'
import { UploadOutlined } from '@ant-design/icons'
import { observer, inject } from 'mobx-react'
// import reqwest from 'reqwest'
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
@inject('RiverSandCapa')
@observer
class index extends Component {
  constructor(props) {
    super()
    this.state = {
      visible: false,
      fileList: [],
      uploading: false,
      columns: [
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
          dataIndex: 'projectName',
          key: 'projectName',
        },
        {
          title: '标签名称',
          dataIndex: 'labelName',
          key: 'labelName',
        },
        {
          title: '区域矢量文件',
          dataIndex: 'imageName',
          key: 'imageName',
        },
        {
          title: '操作',
          dataIndex: 'id',
          key: 'id',
          render: (value, item, index) => {
            return (
              <>
                <Button type="primary">编辑</Button>
                <Popconfirm
                  placement="right"
                  title={'确定删除当前项目吗？'}
                  onConfirm={this.Delete.bind(this, value)}
                  okText="确认删除"
                  cancelText="取消"
                >
                  <Button type="primary" danger>
                    删除
                  </Button>
                </Popconfirm>
              </>
            )
          },
        },
      ],
    }
  }
  createData = () => {
    this.setState({
      visible: true,
    })
  }
  Delete(id) {
    this.props.RiverSandCapa.deleteListData(id)
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
    const { RiverSandCapaData } = this.props.RiverSandCapa
    const { visible, fileList, columns } = this.state
    console.log(RiverSandCapaData)
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
        <Table dataSource={RiverSandCapaData} columns={columns} />
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
                保存
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    )
  }
}

export default index
