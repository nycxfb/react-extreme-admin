import React from 'react';
import { Button, Card } from 'antd';
import SvgIcon from '@/components/svgIcon';
import './index.less';

import { http_demo } from '@/api/demo';

const Demo = () => {
  const test = async () => {
    const res = await http_demo({});
  };
  return (
    <Card className={'demo-card'}>
      <SvgIcon iconClass={'develop'}></SvgIcon>
    </Card>
  );
};

export default Demo;
