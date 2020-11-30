/*
 * @Author: @yzcheng
 * @Date: 2020-11-12 10:44:29
 * @Version: 1.0
 * @LastEditors: @yzcheng
 * @Description: 沉降监测
 * @LastEditTime: 2020-11-27 17:04:52
 */
import { action, makeObservable, observable } from 'mobx'
import { getList, getProjectParticulars } from '@api/SubsidenceMonitor'
class SubsidenceMonitor {
  constructor() {
    makeObservable(this)
  }
  @observable SubsidenceMonitorData = []
  @observable tableLoading = false
  @action getSubsidenceListData() {
    this.tableLoading = true
    getList().then((res) => {
      if (res.code === 200) {
        this.tableLoading = false
        this.SubsidenceMonitorData = res.data
      }
    })
  }
  @action updataSubsidenceList(id) {
    return getProjectParticulars(id)
  }
}
const commonStore = new SubsidenceMonitor()

export default commonStore
