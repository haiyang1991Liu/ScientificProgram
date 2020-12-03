import React,{useState} from 'react'
import styles from './index.module.scss'
function Index({ data }) {
  const [key] = useState({
    projectName: '项目名称',
    infrastructureType: '交通基础设施类别',
    satellite: '卫星',
    trackAlignment: '轨道方向',
    technicalMethod: '技术方法',
    startTime: '开始时间',
    endTime: '结束时间',
    imageNum: '影像数量',
    serverUrl: '服务地址',
  })
  return (
    <div className={styles.details_content}>
      {data &&
        Object.keys(key).map((item,index) => {
          return (
            <div key={index}className={styles.details_item}>
              <div className={styles.details_key}>{key[item]+ '：'}</div>
              <div className={styles.details_value}>
                {data[item]}
              </div>
            </div>
          )
        })}
    </div>
  )
}

export default Index
