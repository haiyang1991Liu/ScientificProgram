/*
 * @Author: @yzcheng
 * @Date: 2020-11-04 17:01:43
 * @Version: 1.0
 * @LastEditors: @yzcheng
 * @Description: 
 * @LastEditTime: 2020-11-18 18:35:31
 */
import { get, deletes } from '@utils/axios'
export const getList = () => {
    return get('/sediment-project/list')
}
export const deleteList = (id) => {
    return deletes(`/sediment-project/${id}`)
}
export const getAverageList = (params) => {
    return get(`/sediment-average/list`, params)
}