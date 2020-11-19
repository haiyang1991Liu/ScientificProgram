/*
 * @Author: @yzcheng
 * @Date: 2020-11-18 19:07:00
 * @Version: 1.0
 * @LastEditors: @yzcheng
 * @Description:
 * @LastEditTime: 2020-11-18 19:24:16
 */
export const Format = (date) => {
    
    let Month = date.getMonth() + 1
    let  Year  =  date.getFullYear()
    let  Date  =  date.getDate()
    if (Month < 10) {
      Month = '0' + Month
    }
    if (Year < 10) {
      Year = '0' + Year
    }
    if (Date < 10) {
      Date = '0' + Date
    }
    return Year + '-' + Month + '-' + Date
}
