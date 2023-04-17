import React from 'react';
import { GithubOutlined } from '@ant-design/icons';
import style from './index.module.less';

const Footer = () => {
  return (
    <div className={style.footer}>
      <a href={'https://github.com/nycxfb/react-extreme-admin'}>
        <GithubOutlined />
      </a>
      <span>Copyright ©2023 Extreme Admin</span>
    </div>
  );
};

export default React.memo(Footer);
