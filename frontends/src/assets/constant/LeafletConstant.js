/*
 * @Author: @yzcheng
 * @Date: 2020-11-13 14:44:53
 * @Version: 1.0
 * @LastEditors: @yzcheng
 * @Description: 
 * @LastEditTime: 2020-11-20 10:22:33
 */
import L from 'leaflet';

// 天地图token
export const TIANDITU_TOKEN = "d57317c67e6f1a0ed69fcfa5bb021095";

export const MAP_INIT_OPTIONS = {
  CENTER: [ 31.34,120.92],
  ZOOM: 8,
  CRS: L.CRS.TianDiTu_WGS84,
}
export const MAP_YGYX_ISERVER =
  'http://10.25.111.179:8090/iserver/services/map-sediment_map/rest/maps/sediment%40map'
// 各featureGroup的key值
export const MAP_FEATUREGROUP = {
  INITIAL_FEATUREGROUP: {
    CODE: 'initial_featureGroup',
  },
  PROJECT_FEATUREGROUP: {
    CODE: 'project_featureGroup',
  },
}