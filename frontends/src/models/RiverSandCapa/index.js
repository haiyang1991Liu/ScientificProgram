/*
 * @Author: @yzcheng
 * @Date: 2020-11-12 10:44:29
 * @Version: 1.0
 * @LastEditors: @yzcheng
 * @Description: 河道含沙界面
 * @LastEditTime: 2020-11-20 12:25:12
 */
import { observable, makeObservable, action } from 'mobx'
import {
  getList,
  deleteList,
  getAverageList,
  UploadShp,
  createProject,
  getProjectParticulars,
  UpdataProject,
} from '@api/RiverSandCapa'
import { Format } from '@utils/DateFormat.js'
import { message } from 'antd'
class RiverSandCapa {
  constructor() {
    makeObservable(this)
  }
  @observable Map = null
  @observable RiverSandCapaData = []
  @observable AverageListData = []
  @observable endDate = Format(new Date())
  @observable startDate = '2000-01-01'
  @observable tableLoading = false
  @action getListData() {
    this.tableLoading = true
    getList().then((res) => {
      if (res.code === 200) {
        this.tableLoading = false
        this.RiverSandCapaData = res.data
      }
    })
  }
  @action deleteListData(id) {
    deleteList(id).then((res) => {
      if (res.code === 200) {
        this.getListData()
        message.error('删除成功')
      } else {
        message.error(res.msg)
      }
    })
  }
  @action initMap(map) {
    this.map = map
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
    return createProject(data)
  }
  @action UpdataProject(data) {
    return UpdataProject(data)
  }
  /**
   * 获取项目详情
   *
   * @param {*} id
   * @returns
   * @memberof RiverSandCapa
   */
  @action getProjectParticulars(id) {
    return getProjectParticulars(id)
  }
}
const commonStore = new RiverSandCapa()

export default commonStore
