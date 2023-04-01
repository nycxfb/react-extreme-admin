import React from 'react';
import SvgIcon from '@/components/svgIcon';
import style from './index.module.less';

const ErrorPage = () => {
  return (
    <div className={style['error-wrapper']}>
      <SvgIcon width={380} height={340} iconClass="404" />;
    </div>
  );
};

export default ErrorPage;
