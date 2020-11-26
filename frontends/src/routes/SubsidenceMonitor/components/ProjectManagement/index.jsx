/*
 * @Author: @yzcheng
 * @Date: 2020-11-17 16:48:48
 * @Version: 1.0
 * @LastEditors: @yzcheng
 * @Description: 项目管理
 * @LastEditTime: 2020-11-26 11:07:41
 */
import React, { Component } from 'react'
import {
  Table,
  Button,
  Form,
  Input,
  Upload,
  Popconfirm,
  message,
  Tooltip,
  Select,
} from 'antd'
import Modal from '@Modal'
import { observer, inject } from 'mobx-react'
import './index.scss'
const { Option } = Select
const layout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 18,
  },
}
const ItemLayout = {
  wrapperCol: {
    span: 13,
  },
}
const tailLayout = {
  wrapperCol: {
    offset: 6,
    span: 13,
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
      isUpdata: false, //是否是更新
      uploading: false,
      projectId: '', //项目ID
      shpData: [],
      columns: [
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
        {
          title: '操作',
          dataIndex: 'id',
          align: 'center',
          key: 'id',
          render: (value, item, index) => {
            return (
              <>
                <Button style={{ marginRight: '.1rem' }} type="primary" danger>
                  查看详情
                </Button>
                <Button
                  onClick={this.updata.bind(this, item)}
                  style={{ marginRight: '.1rem' }}
                  danger
                  type="primary"
                >
                  编辑
                </Button>
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
      isUpdata: false,
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
  Cancel = () => {
    this.setState({
      fileList: [],
      shpData: [],
      visible: false,
    })
  }
  updata(item) {
    this.formRef = React.createRef()
    this.setState({
      visible: true,
      isUpdata: true,
      projectId: item.id,
    })
    this.props.RiverSandCapa.getProjectParticulars(item.id).then((res) => {
      if (res.code === 200) {
        const { sedimentShp } = res.data
        setTimeout(() => {
          this.formRef.current.setFieldsValue({
            ...item,
            id: item.id,
            shpId: sedimentShp && sedimentShp.id,
          })
        }, 0)
      } else {
        message.error('数据获取失败请重新检查并操作')
      }
    })
  }
  onFinish = async (values) => {
    if (values.shpId) {
      message.error('项目文件为必传项')
      return
    }
    this.setState({
      uploading: true,
    })
    const { shpData, isUpdata } = this.state
    if (isUpdata) {
      await this.props.RiverSandCapa.UpdataProject(values)
        .then((res) => {
          if (res.code === 200) {
            this.setState({
              uploading: false,
              visible: false,
            })
            this.props.RiverSandCapa.getListData()
            message.success('更新项目成功')
          } else {
            this.setState({
              uploading: false,
            })
            message.error('更新项目失败请重新调整格式重新上传')
          }
        })
        .catch((err) => {
          this.setState({
            uploading: false,
          })
          message.error(err)
        })
    } else {
      if (shpData.length) {
        values['shpId'] = shpData.map((item) => item.id)[0]
        values['imageName'] = shpData.map((item) => item.shpName)[0]
      }
      await this.props.RiverSandCapa.CreateProject(values)
        .then((res) => {
          if (res.code === 200) {
            this.setState({
              uploading: false,
              visible: false,
            })
            this.props.RiverSandCapa.getListData()
            message.success('新建项目成功')
          } else {
            this.setState({
              uploading: false,
            })
            message.error('新建项目失败请重新调整格式重新上传')
          }
        })
        .catch((err) => {
          this.setState({
            uploading: false,
          })
          message.error(err.message)
        })
    }
  }

  /**
   * 表单提交失败方法
   *
   * @memberof index
   */
  onFinishFailed = (errorInfo) => {
    message.error('新建项目失败请重新调整格式重新上传')
  }
  handleUpload = () => {
    const { fileList } = this.state
    const formData = new FormData()
    fileList.forEach((file) => {
      formData.append('file', file)
    })
    // if (isUpdata) {
    //   formData.append('projectId', projectId)
    // } else {
    formData.append('projectId', '')
    // }
    this.setState({
      uploading: true,
    })
    this.props.RiverSandCapa.UploadShp(formData)
      .then((res) => {
        if (res.code === 200) {
          this.setState({
            fileList: [],
            shpData: res.data,
            uploading: false,
          })
          message.success('文件上传成功')
        }
      })
      .catch((err) => {
        this.setState({
          uploading: false,
        })
        message.error('文件上传失败请重新阅读步骤重新上传')
      })
  }
  /**
   * 点击table 行 渲染项目
   *
   * @memberof index
   */
  onShowMap = (data) => {
    const { id } = data
    this.props.RiverSandCapa.getProjectParticulars(id).then((res) => {
      if (res.code === 200) {
        const { sedimentShp } = res.data
        this.props.RiverSandCapa.map._addProjectLayersToFeatureGroup({
          url: sedimentShp && sedimentShp.shpServerUrl,
        })
      } else {
        message.error('数据获取失败请重新检查并操作')
      }
    })
  }
  render() {
    const { RiverSandCapaData, tableLoading } = this.props.RiverSandCapa
    const { visible, fileList, columns, uploading, isUpdata } = this.state
    const props = {
      multiple: true,
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
      fileList: [],
    }
    return (
      <div>
        <Button onClick={this.createData} type="primary">
          新建
        </Button>
        <Table
          loading={tableLoading}
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
          scroll={{ x: '8rem' }}
          rowKey={(record) => record.id}
          dataSource={RiverSandCapaData}
          columns={columns}
        />
        <Modal
          onClose={this.hide}
          title={isUpdata ? '更改项目' : '新建项目'}
          footer={null}
          visible={visible}
          create
        >
          <Form
            {...layout}
            name="basic"
            ref={this.formRef}
            initialValues={{
              remember: true,
            }}
            className={'createProject'}
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
          >
            <Form.Item
              label="项目名称"
              name="projectName"
              {...ItemLayout}
              rules={[{ required: true, message: '项目名称不能为空' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item required={true} label="卫星雷达影像">
              <Tooltip
                title={
                  fileList.length
                    ? fileList.map((item) => item.name)
                    : '.shp、.shx'
                }
              >
                <Input
                  value={
                    fileList.length ? fileList.map((item) => item.name) : ''
                  }
                  placeholder=".shp、.shx"
                  readOnly="readOnly"
                />
              </Tooltip>
              <Upload {...props}>
                <Button style={{ marginLeft: '.1rem' }} type="primary">
                  浏览...
                </Button>
              </Upload>
              <Button
                type="primary"
                onClick={this.handleUpload}
                loading={uploading}
                style={{ marginLeft: '.1rem' }}
                disabled={fileList.length <= 1}
              >
                {uploading ? '正在上传' : '上传'}
              </Button>
            </Form.Item>
            <Form.Item required={true} label="BEM">
              <Tooltip
                title={
                  fileList.length
                    ? fileList.map((item) => item.name)
                    : '.shp、.shx'
                }
              >
                <Input
                  value={
                    fileList.length ? fileList.map((item) => item.name) : ''
                  }
                  placeholder=".shp、.shx"
                  readOnly="readOnly"
                />
              </Tooltip>
              <Upload {...props}>
                <Button style={{ marginLeft: '.1rem' }} type="primary">
                  浏览...
                </Button>
              </Upload>
              <Button
                type="primary"
                onClick={this.handleUpload}
                loading={uploading}
                style={{ marginLeft: '.1rem' }}
                disabled={fileList.length <= 1}
              >
                {uploading ? '正在上传' : '上传'}
              </Button>
            </Form.Item>
            <Form.Item required={true} label="区域">
              <Tooltip
                title={
                  fileList.length
                    ? fileList.map((item) => item.name)
                    : '.shp、.shx'
                }
              >
                <Input
                  value={
                    fileList.length ? fileList.map((item) => item.name) : ''
                  }
                  placeholder=".shp、.shx"
                  readOnly="readOnly"
                />
              </Tooltip>
              <Upload {...props}>
                <Button style={{ marginLeft: '.1rem' }} type="primary">
                  浏览...
                </Button>
              </Upload>
              <Button
                type="primary"
                onClick={this.handleUpload}
                loading={uploading}
                style={{ marginLeft: '.1rem' }}
                disabled={fileList.length <= 1}
              >
                {uploading ? '正在上传' : '上传'}
              </Button>
            </Form.Item>
            <Form.Item {...ItemLayout} required={true} label="方法">
              <Select defaultValue="0">
                <Option value="0">请选择</Option>
              </Select>
            </Form.Item>
            <Form.Item {...tailLayout}>
              <Button
                loading={uploading}
                onClick={this.Cancel}
                type="default"
                danger
                style={{ float: 'right' }}
              >
                取消
              </Button>
              <Button loading={uploading} type="primary" htmlType="submit">
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
