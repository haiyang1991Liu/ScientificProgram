/*
 * @Author: @yzcheng
 * @Date: 2020-11-19 18:44:58
 * @Version: 1.0
 * @LastEditors: @yzcheng
 * @Description:
 * @LastEditTime: 2020-11-20 11:24:19
 */
import L from 'leaflet'
export function extendLeaflet() {
  L.Map.addInitHook(function () {
    this.initFeatureGroups(this.options.initFeatureGroups)
  })
  L.Layer.include({
    /**
     * 为layer添加自定义字段，以便于操作
     * @param val 键值
     */
    addId: function (val) {
      this._addProperty('_leaflet_id', val)
      return this
    },
    /**
     * 为图层添加属性
     * @param key 键名
     * @param val 键值
     * @param enumerable 是否可遍历
     */
    _addProperty: function (key, val, enumerable) {
      Object.defineProperty(this, key, {
        enumerable: !!enumerable,
        configurable: true,
        writable: true,
        value: val,
      })
    },
  })
  L.FeatureGroup.include({
    addLayer: function (layer, loaded) {
      if (this.hasLayer(layer)) {
        return this
      }
      layer.addEventParent(this)
      L.LayerGroup.prototype.addLayer.call(this, layer, loaded)
      return this.fire('layeradd', { layer: layer })
    },
  })
  L.LayerGroup.include({
    addLayer: function (layer, loaded) {
      const id = this.getLayerId(layer)
      this._layers[id] = layer
      if (this._map) {
        this._map.addLayer(layer)
      }
      return this
    },
  })
  L.Map.include({
    getLayer: function (id) {
      if (this._layers[id]) {
        return this._layers[id]
      }
    },
    initFeatureGroups(featureGroups) {
      for (const featureGroupsKey in featureGroups) {
        if (featureGroups.hasOwnProperty(featureGroupsKey)) {
          let featureGroup = L.featureGroup().addId(
            featureGroups[featureGroupsKey].CODE
          )
          this.addLayer(featureGroup)
        }
      }
    },
  })
}
