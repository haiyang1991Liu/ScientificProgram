/*
 * @Author: @yzcheng
 * @Date: 2020-11-12 10:44:29
 * @Version: 1.0
 * @LastEditors: @yzcheng
 * @Description: 河道含沙界面
 * @LastEditTime: 2020-11-19 14:17:40
 */
import { observable, makeObservable, computed, action } from 'mobx'
import {
  getList,
  deleteList,
  getAverageList,
  UploadShp,
  createProject,
} from '@api/RiverSandCapa'
import { Format } from '@utils/DateFormat.js'
import { message } from 'antd'
class RiverSandCapa {
  constructor() {
    makeObservable(this)
  }
  @observable RiverSandCapaData = []
  @observable AverageListData = []
  @observable endDate = Format(new Date())
  @observable startDate = '2000-01-01'
  @action getListData() {
    getList().then((res) => {
      this.RiverSandCapaData = res.data
    })
  }
  @action deleteListData(id) {
    deleteList(id).then((res) => {
      if (res.code === 200) {
        this.getListData()
      } else {
        message.error(res.msg)
      }
    })
  }
  @action getAverageListData(data) {
    const { endDate, startDate } = this
    let end = '',
      start = ''
    if (data && !data.filter((item) => item === '').length) {
      start = data[0]
      end = data[1]
    } else {
      start = startDate
      end = endDate
    }
    getAverageList({ endDate: end, startDate: start }).then((res) => {
      this.AverageListData = res.data
    })
  }
  @action UploadShp(data) {
    return UploadShp(data)
  }
  @action CreateProject(data) {
    return  createProject(data)
  }
}
const commonStore = new RiverSandCapa()

export default commonStore
