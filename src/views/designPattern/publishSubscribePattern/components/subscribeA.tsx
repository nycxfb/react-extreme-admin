import React, { useEffect, useState } from 'react';
import { Card } from 'antd';
import { useMount, useUnmount } from 'ahooks';
import Event from '@/utils/event';

const SubscribeA = () => {
  const [message, setMessage] = useState('');
  useMount(() => {
    Event.listen('message', (msg: any) => {
      setMessage(msg);
    });
  });
  useUnmount(() => {
    Event.remove('message');
  });
  // useEffect(() => {
  // 	Event.listen("message", (msg: any) => {
  // 		setMessage(msg);
  // 	});
  //
  // 	return () => {
  // 		Event.remove("message");
  // 	};
  // });
  return (
    <Card title={'订阅者A'} style={{ width: 500, height: 190 }}>
      {message}
    </Card>
  );
};

export default SubscribeA;
