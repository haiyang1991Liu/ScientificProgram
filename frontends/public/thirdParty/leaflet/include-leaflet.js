/* Copyright© 2000 - 2020 SuperMap Software Co.Ltd. All rights reserved.
 * This program are made available under the terms of the Apache License, Version 2.0
 * which accompanies this distribution and is available at http://www.apache.org/licenses/LICENSE-2.0.html.*/
(function () {
    let r = new RegExp("(^|(.*?\\/))(include-leaflet\.js)(\\?|$)"),
        s = document.getElementsByTagName("script"), targetScript;
    for (let i = 0; i < s.length; i++) {
        let src = s[i].getAttribute("src");
        if (src) {
            let m = src.match(r);
            if (m) {
                targetScript = s[i];
                break;
            }
        }
    }

    function inputScript(url) {
        let script = "<script type=\"text/javascript\" src=\"" + url + "\"><" + "/script>";
        document.writeln(script);
    }

    function inputCSS(url) {
        let css = "<link rel=\"stylesheet\" href=\"" + url + "\">";
        document.writeln(css);
    }

    function inArray(arr, item) {
        for (let i in arr) {
            if (arr[i] === item) {
                return true;
            }
        }
        return false;
    }

    //加载类库资源文件
    function load() {
        let includes = (targetScript.getAttribute("include") || "").split(",");
        let excludes = (targetScript.getAttribute("exclude") || "").split(",");
        // 在线
        if (!inArray(excludes, "leaflet")) {
            inputCSS("thirdParty/leaflet/leaflet1.6.0.css");
            inputScript("thirdParty/leaflet/leaflet-src.js");
        }
        if (inArray(includes, "leaflet.heat")) {
          inputScript("thirdParty/leaflet/leafletPlugins/leaflet-heat.js");
            // inputScript("https://cdn.bootcss.com/leaflet.heat/0.2.0/leaflet-heat.js");
        }
        if (inArray(includes, "leaflet.markercluster")) {
            inputCSS("https://cdn.bootcss.com/leaflet.markercluster/1.4.1/MarkerCluster.Default.css");
            inputCSS("https://cdn.bootcss.com/leaflet.markercluster/1.4.1/MarkerCluster.css");
            inputScript("https://cdn.bootcss.com/leaflet.markercluster/1.4.1/leaflet.markercluster.js");
        }
        if (inArray(includes, "leaflet.draw")) {
            inputCSS("thirdParty/leaflet/leafletPlugins/leaflet.draw.css");
            inputScript("thirdParty/leaflet/leafletPlugins/leaflet.draw.js");
        }
        if (inArray(includes, "contextmenu")) {
            inputCSS("thirdParty/leaflet/leafletPlugins/leaflet.contextmenu.min.css");
            inputScript("thirdParty/leaflet/leafletPlugins/leaflet.contextmenu.min.js");
        }
        if (inArray(includes, "leaflet-geoman")) {
            inputCSS("https://unpkg.com/@geoman-io/leaflet-geoman-free@latest/dist/leaflet-geoman.css");
            inputScript("https://unpkg.com/@geoman-io/leaflet-geoman-free@2.3.0/dist/leaflet-geoman.min.js");
        }
        if (inArray(includes, "leaflet.miniMap")) {
            inputCSS("https://cdn.bootcss.com/leaflet-minimap/3.6.1/Control.MiniMap.min.css");
            inputScript("https://cdn.bootcss.com/leaflet-minimap/3.6.1/Control.MiniMap.min.js");
        }
        if (inArray(includes, "mapv")) {
            inputScript("https://cdn.jsdelivr.net/npm/mapv@2.0.43/build/mapv.min.js");
        }
        if (inArray(includes, "turf")) {
            inputScript("https://cdn.bootcss.com/Turf.js/5.1.6/turf.min.js");
        }
        if (inArray(includes, "echarts")) {
            inputScript("https://cdn.jsdelivr.net/npm/echarts@4.5.0/dist/echarts.min.js");
        }
        if (inArray(includes, "elasticsearch")) {
            inputScript("https://cdn.bootcss.com/elasticsearch/16.5.0/elasticsearch.js");
        }
        if (inArray(includes, "xlsx")) {
            inputScript("https://cdn.jsdelivr.net/npm/xlsx@0.15.4/dist/xlsx.core.min.js");
        }
        // 本地
        if (inArray(includes, "leaflet.sidebyside")) {
            inputScript("https://iclient.supermap.io/web/libs/leaflet/plugins/leaflet-side-by-side/leaflet-side-by-side.min.js");
        }
        if (inArray(includes, "d3")) {
            inputScript("https://cdnjs.cloudflare.com/ajax/libs/d3/5.14.2/d3.min.js");
        }
        if (inArray(includes, "d3-hexbin")) {
            inputScript("https://d3js.org/d3-hexbin.v0.2.min.js");
        }
        if (inArray(includes, "d3Layer")) {
            inputScript("https://iclient.supermap.io/web/libs/leaflet/plugins/leaflet.d3Layer/leaflet-d3Layer.js");
        }
        if (inArray(includes, "osmbuildings")) {
            inputScript("https://iclient.supermap.io/web/libs/osmbuildings/OSMBuildings-Leaflet.js");
        }
        if (inArray(includes, "leaflet-icon-pulse")) {
            inputCSS("https://iclient.supermap.io/web/libs/leaflet/plugins/leaflet-icon-pulse/L.Icon.Pulse.css");
            inputScript("https://iclient.supermap.io/web/libs/leaflet/plugins/leaflet-icon-pulse/L.Icon.Pulse.js");
        }
        if (inArray(includes, "deck")) {
            inputScript("https://iclient.supermap.io/web/libs/deck.gl/5.1.3/deck.gl.min.js");
        }
        if (inArray(includes, "pixi")) {
            inputScript("https://cdnjs.cloudflare.com/ajax/libs/pixi.js/4.8.7/pixi.js");
            inputScript("https://cdn.jsdelivr.net/npm/leaflet-pixi-overlay@1.8.1/L.PixiOverlay.min.js");
            inputScript("https://iclient.supermap.io/web/libs/leaflet/plugins/Leaflet.PixiOverlay/1.8.1/MarkerContainer.js");
            inputScript("https://iclient.supermap.io/web/libs/bezier-easing/2.1.0/bezier-easing.js");
        }

        // iclient
        if (!inArray(excludes, "iclient-leaflet")) {
            inputScript("thirdParty/leaflet/iclient-leaflet.min.js");
        }
        if (!inArray(excludes, "iclient-leaflet-css")) {
            inputCSS("thirdParty/leaflet/iclient-leaflet.min.css");
        }
        // ellipse
        if (inArray(includes, "ellipse")) {
            inputScript("thirdParty/leaflet/leafletPlugins/l.ellipse.js");
        }
        if (inArray(includes, "draw-ellipse")) {
            inputScript("thirdParty/leaflet/leafletPlugins/edit.ellipse.js");
        }
        if (inArray(includes, "iclient-plot-leaflet")) {
            inputCSS("https://iclient.supermap.io/web/libs/plotting/leaflet/10.0.1/iclient-plot-leaflet.css");
            inputScript("https://iclient.supermap.io/web/libs/plotting/leaflet/10.0.1/iclient-plot-leaflet.min.js");
        }
        if (inArray(includes, "ant-design-vue")) {
            inputCSS("https://unpkg.com/ant-design-vue@1.3.9/dist/antd.min.css");
            inputScript("https://unpkg.com/ant-design-vue@1.3.9/dist/antd.min.js");
        }
        if (inArray(includes, "echarts-vue")) {
            inputScript("https://cdn.jsdelivr.net/npm/echarts@4.5.0/dist/echarts.min.js");
            inputScript("https://cdn.jsdelivr.net/npm/vue-echarts@4.0.4/dist/vue-echarts.min.js");
            inputScript("https://iclient.supermap.io/web/libs/echarts-liquidfill/echarts-liquidfill.min.js");
            inputScript("https://iclient.supermap.io/web/libs/echartsLayer/EchartsLayer.min.js");
        }
    }

    load();
    window.isLocal = false;
    window.server = document.location.toString().match(/file:\/\//) ? "http://localhost:8090" :
                    document.location.protocol + "//" + document.location.host;
})();
