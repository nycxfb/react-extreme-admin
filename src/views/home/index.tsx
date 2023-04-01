import React from 'react';
import { Col, Row, Spin } from 'antd';
import { SettingOutlined, CodeOutlined, ClockCircleOutlined } from '@ant-design/icons';
import Weather from './components/weather';
import PageSetting from './components/pageSetting';
import TechnologyStack from './components/technologyStack';
import DevelopProgress from './components/developProgress';
import Trend from './components/trend';
import style from './index.module.less';

const componentsArray = [
  {
    id: 1,
    title: '页面设置',
    icon: SettingOutlined,
    component: PageSetting,
  },
  {
    id: 2,
    title: '技术栈',
    icon: CodeOutlined,
    component: TechnologyStack,
  },
  {
    id: 3,
    title: '开发进度',
    icon: ClockCircleOutlined,
    component: DevelopProgress,
  },
];

const Home: React.FC = () => {
  const b = 345;
  return (
    <Spin spinning={false}>
      <div className={style['home-container']}>
        <Row>
          <Col span={16} className={'part-A'}>
            <Weather />
            <Trend />
          </Col>
          <Col span={8} className={'part-B'}>
            {componentsArray.map((item) => (
              <div key={item.id}>
                <div className={'part-B-item'}>
                  {React.createElement(item.icon)}
                  <span>{item.title}</span>
                </div>
                {React.createElement(item.component)}
              </div>
            ))}
          </Col>
        </Row>
      </div>
    </Spin>
  );
};

export default Home;
