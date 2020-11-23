/*
 * @Author: @yzcheng
 * @Date: 2020-11-17 21:08:56
 * @Version: 1.0
 * @LastEditors: @yzcheng
 * @Description: 
 * @LastEditTime: 2020-11-20 17:12:35
 */
import React from 'react'
import {Button,Col,Row,Progress} from 'antd'
export default function index({data}) {
    return (
      <div>
        <Row>
          <Col span={24}>影像文件：{data.projectName && data.projectName}</Col>
          <Col span={24}>
            掩膜文件：{data.sedimentShp && data.sedimentShp.shpPath}
            <Button>重新导入</Button>
          </Col>
          <Col span={24}>结果文件：</Col>
          <Col span={24}>
            <Button>暂停</Button>
            <Button type='primary'>开始</Button>
            {/* <Button>结果预览</Button> */}
          </Col>
          <Col span={24}>
            <Progress percent={0} />
          </Col>
          <Col span={24}>
            <Button color>未开始</Button>
            <Button>进行中</Button>
            <Button>完成</Button>
          </Col>
        </Row>
      </div>
    )
}
