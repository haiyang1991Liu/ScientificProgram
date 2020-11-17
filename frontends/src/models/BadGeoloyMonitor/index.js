/*
 * @Author: @yzcheng
 * @Date: 2020-11-12 10:44:29
 * @Version: 1.0
 * @LastEditors: @yzcheng
 * @Description: 不良地质监测
 * @LastEditTime: 2020-11-16 22:27:41
 */
import { observable, computed, action } from 'mobx'
class BadGeoloyMonitor {
  @observable user = {
    name: 'adimn',
    pass: 'www111',
  }
  count = 0
  @computed get userName() {
    return this.user.name
  }
  @action changeUser() {
    if (this.count % 2 === 1) {
      this.user = {
        name: 'admin',
        role: '管理员',
      }
    } else {
      this.user.name = 'guest'
      this.user.role = '访客'
      this.user.isGuest = 'true'
    }
    this.count++
  }
}
const commonStore = new BadGeoloyMonitor()

export default commonStore
