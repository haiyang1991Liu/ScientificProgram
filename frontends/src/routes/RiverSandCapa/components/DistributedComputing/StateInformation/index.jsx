/*
 * @Author: @yzcheng
 * @Date: 2020-11-17 21:08:56
 * @Version: 1.0
 * @LastEditors: @yzcheng
 * @Description:
 * @LastEditTime: 2020-11-24 19:59:50
 */
import React, { useState, useEffect } from 'react'
import { Button, Upload, message } from 'antd'
import styles from './index.module.scss'
import { inject, observer } from 'mobx-react'
function Index({ RiverSandCapa, data, percent, StartCounting, Suspended }) {
  const [fileList, setFileList] = useState([])
  const [uploading, setUploading] = useState(false)
  const [visible, setVisible] = useState(true)
  useEffect(() => {
    if (data.id) {
      setVisible(false)
    } else {
      setVisible(true)
    }
  }, [data])
  const handleUpload = () => {
    const formData = new FormData()
    fileList.forEach((file) => {
      formData.append('file', file)
    })
    formData.append('projectId', data.id)
    setUploading(true)
    RiverSandCapa.UploadShp(formData)
      .then((res) => {
        if (res.code === 200) {
          setFileList([])
          setUploading(false)
          message.success('文件上传成功')
        }
      })
      .catch((err) => {
        setUploading(false)
        message.error('文件上传失败请重新阅读步骤重新上传')
      })
  }

  const props = {
    multiple: true,
    onRemove: (file) => {
      const index = fileList.indexOf(file)
      const newFileList = fileList.slice()
      newFileList.splice(index, 1)
      return {
        fileList: newFileList,
      }
    },
    beforeUpload: (file, files) => {
      setFileList([...files])
      return false
    },
    fileList: [],
  }

  return (
    <div className={styles.image_cropping}>
      <div>影像文件：长江航道高分遥感影像图.tif</div>
      <div>
        <div>掩膜文件：{data.sedimentShp && data.sedimentShp.shpName}</div>
        <Upload {...props}>
          <Button
            disabled={visible}
            style={{ marginLeft: '.1rem' }}
            type="primary"
          >
            浏览
          </Button>
        </Upload>
        <Button
          type="primary"
          onClick={handleUpload}
          loading={uploading}
          style={{ marginLeft: '.1rem' }}
          disabled={fileList.length <= 1}
        >
          {uploading ? '正在上传' : '上传'}
        </Button>
      </div>
      <div>结果文件：</div>
      <div className={styles.image_cropping_operation}>
        <Button disabled={visible} onClick={() => Suspended()} danger>
          暂停
        </Button>
        <Button
          disabled={visible}
          onClick={() => StartCounting()}
          type="primary"
        >
          开始
        </Button>
        {percent > 0 && <Button type="primary">结果预览</Button>}
      </div>
    </div>
  )
}
export default inject('RiverSandCapa')(observer(Index))
