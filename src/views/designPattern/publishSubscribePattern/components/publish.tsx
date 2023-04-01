import React, { useEffect, useRef, useState } from 'react';
import { Button, Card, Col, Input, Row, message } from 'antd';
import { useMount } from 'ahooks';
import Event from '@/utils/event';
import { http_dailyWord } from '@/api/external';

const Publish = () => {
  const [inputVal, setInputVal] = useState('');
  const [loading, setLoading] = useState<boolean>(false);
  const messageRef = useRef<any>(null);

  useMount(async () => {
    await getDailyWord();
  });

  const onChange = (value: any) => {
    setInputVal(value.target.value);
  };

  const getDailyWord = async () => {
    setLoading(true);
    const res = await http_dailyWord();
    if (res.code == '200') {
      setInputVal(res.data[0].content);
    } else {
      message.error(res.message);
    }
    setLoading(false);
  };

  const publishMessage = () => {
    const message = messageRef.current.resizableTextArea.textArea.value;
    Event.trigger('message', message);
  };

  return (
    <Card title={'发布者'} style={{ width: 500, height: 400 }} loading={loading}>
      <Row gutter={24}>
        <Col span={16}>
          <Input.TextArea autoSize ref={messageRef} value={inputVal} onChange={onChange} />
        </Col>
        <Col span={8}>
          <Button type={'primary'} onClick={publishMessage}>
            发布消息
          </Button>
        </Col>
      </Row>
    </Card>
  );
};

export default Publish;
