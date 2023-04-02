import React, { useState } from 'react';
import { Col, Row } from 'antd';
import SvgIcon from '@/components/svgIcon';
import { useMount } from 'ahooks';
import { http_weather } from '@/api/external';
import style from './index.module.less';

const Weather = (props: any) => {
  const [weatherInfo, setWeatherInfo] = useState<any>({});
  useMount(async () => {
    await getWeatherInfo();
  });

  const getWeatherInfo = async () => {
    try {
      const res = await http_weather('');
      setWeatherInfo(res.data);
    } catch (e) {
      console.log(e);
    } finally {
      props.changeLoading();
    }
  };

  return (
    <div className={style.weather}>
      <Row>
        <Col span={16}>
          <h2>Hello,{localStorage.getItem('phone') || localStorage.getItem('nickname')}!</h2>
          <p>Welcome to Extreme Admin, it's a clean and compact system,wish you enjoy it !</p>
          <div className={'thermometer-info'}>
            <div>
              <span>上海</span>
              <span>城市</span>
            </div>
            <div>
              <span>{weatherInfo?.temp}</span>
              <span>{weatherInfo?.weather}</span>
            </div>
            <div>
              <span>{weatherInfo?.windPower}</span>
              <span>{weatherInfo?.windDirection}风</span>
            </div>
            <div>
              <span>{weatherInfo?.humidity}</span>
              <span>空气湿度</span>
            </div>
          </div>
        </Col>
        <Col span={8} className={'icon'}>
          <SvgIcon width={200} height={120} iconClass={'weather'} />
        </Col>
      </Row>
    </div>
  );
};

export default Weather;
