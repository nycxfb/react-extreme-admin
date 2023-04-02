import React from 'react';
import { Card, Tabs } from 'antd';
import type { TabsProps } from 'antd';
import LineChart from './components/lineChart';
import ColumnChart from './components/columnChart';
import './index.module.less';

const items: TabsProps['items'] = [
  {
    key: '1',
    label: `流量趋势`,
    children: <LineChart />
  },
  {
    key: '2',
    label: `访问量`,
    children: <ColumnChart />
  }
];
const Trend = () => {
  return (
    <Card className={'part-B'}>
      <Tabs defaultActiveKey="1" items={items} />
    </Card>
  );
};

export default Trend;
