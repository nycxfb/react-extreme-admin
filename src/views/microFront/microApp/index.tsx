import React from 'react';
import microApp from '@micro-zoe/micro-app';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from 'antd';
import SvgIcon from '@/components/svgIcon';
const Index = () => {
  const { pathname } = useLocation();
  const sendData = () => {
    microApp.setData('app1', { type: '新的数据' });
  };
  return (
    <div>
      <SvgIcon iconClass={'develop'} />;
    </div>
  );
};

export default Index;
