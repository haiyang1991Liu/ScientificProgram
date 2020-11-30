/*
 * @Author: @yzcheng
 * @Date: 2020-11-04 17:01:43
 * @Version: 1.0
 * @LastEditors: @yzcheng
 * @Description:
 * @LastEditTime: 2020-11-27 16:25:51
 */
import { get, deletes, post_formData, post_data, put } from '@utils/axios'

/**
 *  含沙量 查询项目列表
 *
 * @returns Promise
 */
export const getList = () => {
  return get('/subside-project/list')
}
/**
 *  含沙量 删除项目
 *
 * @returns Promise
 */
export const deleteList = (id) => {
  return deletes(`/sediment-project/${id}`)
}
/**
 *  含沙量 历史平均含沙量查询
 *
 * @returns Promise
 */
export const getAverageList = (params) => {
  return get(`/sediment-average/list`, params)
}
/**
 *  含沙量 上传shp文件
 *
 * @returns Promise
 */
export const UploadShp = (data) => {
  return post_formData(`/sediment-shp/upload/shp`, data)
}
/**
 *  含沙量 新建项目
 *
 * @returns Promise
 */
export const createProject = (data) => {
  return post_data(`/sediment-project`, data)
}
/**
 *  含沙量 更新项目
 *
 * @returns Promise
 */
export const UpdataProject = (data) => {
  return put(`/sediment-project`, data)
}
/**
 *  含沙量 查询单个项目详情
 *
 * @returns Promise
 */
export const getProjectParticulars = (id) => {
  return get(`/subside-project/${id}`)
}
