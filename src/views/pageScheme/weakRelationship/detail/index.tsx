import React from 'react';
import PartA from './partA';
import PartB from './partB';
import PartC from './partC';
import { Button, Card } from 'antd';
import style from './index.module.less';

const Detail = () => {
  return (
    <div className={style['weak-wrapper']}>
      <PartA />
      <Card
        title={'任务详情'}
        extra={
          <>
            <Button disabled>关闭任务</Button>
            <Button disabled style={{ margin: '10px' }}>
              转他人处理
            </Button>
            <Button disabled>处理意见</Button>
          </>
        }
      >
        <div className={'weak-wrapper-bottom'}>
          <PartB />
          <PartC />
        </div>
      </Card>
    </div>
  );
};

export default Detail;
