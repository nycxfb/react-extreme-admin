import React from 'react';
import { Alert } from 'antd';
import style from './index.module.less';
import { componentProps } from '@/@types/global';

interface Props extends componentProps {
  message: string;
}

const Tips = (props: Props) => {
  const { children, message } = props;
  return (
    <div className={style['tips-wrapper']}>
      <Alert className={'alert'} showIcon closable message={message} />
    </div>
  );
};

export default Tips;
