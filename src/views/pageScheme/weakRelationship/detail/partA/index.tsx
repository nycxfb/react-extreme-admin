import React from 'react';
import { Avatar, Card, Col, Row, Progress } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const PartA = () => {
  return (
    <Card style={{ marginBottom: '10px' }} className={'part-A'}>
      <Row>
        <Col span={2} className={'user'}>
          <Avatar icon={<UserOutlined />} />
          <span>冯娟娟</span>
          <span>2021-03-15 17:27</span>
        </Col>
        <Col span={20}>
          <Progress percent={30} showInfo={false} strokeColor={'#4bced0'} />
        </Col>
        <Col span={2} className={'user'}>
          <Avatar icon={<UserOutlined />} />
          <span>赵严</span>
          <span>处理中</span>
        </Col>
      </Row>
    </Card>
  );
};

export default PartA;
