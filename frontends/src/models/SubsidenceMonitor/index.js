/*
 * @Author: @yzcheng
 * @Date: 2020-11-12 10:44:29
 * @Version: 1.0
 * @LastEditors: @yzcheng
 * @Description: 不良地质监测
 * @LastEditTime: 2020-11-26 10:20:45
 */
import { observable, } from 'mobx'
class SubsidenceMonitor {
  @observable user = {
    name: 'adimn',
    pass: 'www111',
  }
}
const commonStore = new SubsidenceMonitor()

export default commonStore
