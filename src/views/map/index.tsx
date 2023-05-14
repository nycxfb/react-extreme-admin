import React, { useRef, useState } from 'react';
import AMapLoader from '@amap/amap-jsapi-loader';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import { useMount } from 'ahooks';

const Map = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  const mapRef = useRef<any>(null);
  const AMapRef = useRef<any>(null);
  const GeocoderRef = useRef<any>(null);

  useMount(() => {
    initMap();
  });

  //初始化地图
  const initMap = () => {
    setLoading(true);
    AMapLoader.load({
      key: '37af84cc5693feb5a015c907469bf9c8',
      version: '2.0', // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
      plugins: ['AMap.Circle', 'AMap.AutoComplete', 'AMap.Geolocation', 'AMap.Geocoder'] // 需要使用的的插件列表，如比例尺'AMap.Scale'等
    })
      .then((AMap) => {
        AMapRef.current = AMap;

        // 地图实例化
        let map = new AMap.Map(ref.current, {
          resizeEnable: true, // 是否监控地图容器尺寸变化
          zoom: 10 // 初始地图级别
        });

        mapRef.current = map;
        GeocoderRef.current = new AMap.Geocoder({}); // 精确定位器

        // 右下角定位到当前IP
        let geolocation = new AMap.Geolocation({
          enableHighAccuracy: true, //是否使用高精度定位，默认:true
          timeout: 10000, //超过10秒后停止定位，默认：5s
          position: 'RB', //定位按钮的停靠位置
          offset: [10, 20], //定位按钮与设置的停靠位置的偏移量，默认：[10, 20]
          zoomToAccuracy: true, //定位成功后是否自动调整地图视野到定位点
          showCircle: false,
          showMarker: false
        });

        map.addControl(geolocation);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <Spin spinning={loading} indicator={<LoadingOutlined />}>
      <div ref={ref} style={{ height: '800px' }} />
    </Spin>
  );
};

export default Map;
