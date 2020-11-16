/*
 * @Author: @yzcheng
 * @Date: 2020-11-13 14:44:53
 * @Version: 1.0
 * @LastEditors: @yzcheng
 * @Description: 
 * @LastEditTime: 2020-11-16 15:46:38
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
    CODE: "initial_featureGroup",
    Z_INDEX: 0
  },
  SOURCE_TREE_FEATUREGROUP: {
    CODE: "source_tree_featureGroup"
  },
  BASE_LAYER_FEATUREGROUP: {
    CODE: "base_layer_featureGroup"
  },
  SEARCH_FEATUREGROUP: {
    CODE: "search_layer_featureGroup"
  },
  CLICK_MAP_FEATUREGROUP: {
    CODE: "click_map_featureGroup"
  },
  URGENT_VECLAYER_FEATUREGROUP:{
    CODE: "urgent_veclayer_featureGroup"
  }
};