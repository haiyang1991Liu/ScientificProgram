/*
 * @Author: @yzcheng
 * @Date: 2020-11-12 10:44:29
 * @Version: 1.0
 * @LastEditors: @yzcheng
 * @Description: 河道含沙界面
 * @LastEditTime: 2020-11-18 21:25:51
 */
import { observable, makeObservable, computed, action } from 'mobx'
import { getList, deleteList, getAverageList } from '@api/RiverSandCapa'
import { Format } from '@utils/DateFormat.js'
class RiverSandCapa {
  constructor() {
    makeObservable(this)
  }
  @observable RiverSandCapaData = []
  @observable AverageListData = []
  @observable endDate = Format(new Date())
  @observable startDate = '2000-01-01'
  @action getListData() {
    this.getAverageListData()
    getList().then((res) => {
      this.RiverSandCapaData = res.data
    })
  }
  @action deleteListData(id) {
    deleteList(id).then((res) => {
      this.RiverSandCapaData = res.data
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
}
const commonStore = new RiverSandCapa()

export default commonStore
