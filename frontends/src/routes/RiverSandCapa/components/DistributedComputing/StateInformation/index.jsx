/*
 * @Author: @yzcheng
 * @Date: 2020-11-17 21:08:56
 * @Version: 1.0
 * @LastEditors: @yzcheng
 * @Description: 
 * @LastEditTime: 2020-11-17 21:13:16
 */
import React from 'react'
import {Button,Col,Row,Progress} from 'antd'
export default function index() {
    return (
      <div>
        <Row>
          <Col span={24}>影像文件 XXXX</Col>
          <Col span={24}>
            掩膜文件 XXXX(新建项目中上传的矢量文件)<Button>重新导入</Button>
          </Col>
          <Col span={24}>结果文件 E:\result\XXXX</Col>
          <Col span={24}>
            <Button>暂停</Button>
            <Button>开始</Button>
            <Button>结果预览</Button>
          </Col>
          <Col span={24}>
            <Progress percent={70} status="exception" />
          </Col>
          <Col span={24}>
            <Button>未开始</Button>
            <Button>进行中</Button>
            <Button>完成</Button>
          </Col>
        </Row>
      </div>
    )
}
