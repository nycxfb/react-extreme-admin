import React from 'react';
import microApp from '@micro-zoe/micro-app';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from 'antd';
const Index = () => {
  const { pathname } = useLocation();
  const sendData = () => {
    microApp.setData('app1', { type: '新的数据' });
  };
  return (
    <div>
      <div className={'base-application'}>主应用</div>
      <Button onClick={sendData}>发送</Button>
      <micro-app name="app1" url="http://localhost:8082/" baseroute={'/'} />
    </div>
  );
};

export default Index;
