import React from 'react';
import { Button, Card } from 'antd';
import SvgIcon from '@/components/svgIcon';
import style from './index.module.less';

const Develop = () => {
  return (
    <Card className={style['develop-card']}>
      <SvgIcon iconClass={'develop'} />
    </Card>
  );
};

export default Develop;
