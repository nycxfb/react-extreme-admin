import React from 'react';
import { Alert, Avatar, Button, Card, Col, Form, Input, Row, Table } from 'antd';
import { useNavigate } from 'react-router-dom';
import SearchFormCard from '@/components/SearchFormCard';
import type { ColumnsType } from 'antd/es/table';
import { UserOutlined, RightCircleOutlined } from '@ant-design/icons';
import Tips from '@/components/tips';

interface DataType {
  startTime: string | number;
  taskDescription: string;
  initiatePerson: string;
  taskStatus: string;
  taskType: string;
  handlePerson: string;
  handleSuggestion: string;
  [key: string]: any;
}

const WeakRelationship = () => {
  const navigate = useNavigate();
  const columns: ColumnsType<DataType> = [
    {
      title: '开始时间',
      dataIndex: 'startTime',
      align: 'center',
    },
    {
      title: '任务描述',
      dataIndex: 'taskDescription',
      align: 'center',
    },
    {
      title: '发起人员',
      dataIndex: 'initiatePerson',
      align: 'center',
    },
    {
      title: '任务状态',
      dataIndex: 'taskStatus',
      align: 'center',
    },
    {
      title: '任务类型',
      dataIndex: 'taskType',
      align: 'center',
    },
    {
      title: '处理人员',
      dataIndex: 'handlePerson',
      align: 'center',
      render: (_, record: DataType) => (
        <>
          <Avatar size={'small'} icon={<UserOutlined />} /> {record.handlePerson}
        </>
      ),
    },
    {
      title: '处理意见',
      dataIndex: 'handleSuggestion',
      align: 'center',
    },
    {
      title: '操作',
      dataIndex: 'operation',
      align: 'center',
      render: () => (
        <Button size={'small'} onClick={toDetail} icon={<RightCircleOutlined />}>
          详情
        </Button>
      ),
    },
  ];

  const toDetail = () => {
    navigate('/pageScheme/weakRelationship/detail');
  };

  const data = [
    {
      startTime: 2021,
      taskDescription: '测试',
      initiatePerson: '张三',
      taskStatus: '失败',
      taskType: '一',
      handlePerson: '李四',
      handleSuggestion: '同意',
    },
    {
      startTime: 2021,
      taskDescription: '测试',
      initiatePerson: '张三',
      taskStatus: '失败',
      taskType: '一',
      handlePerson: '李四',
      handleSuggestion: '同意',
    },
  ];

  return (
    <>
      <Tips message={'当页面关系联系度不高时,且需要展现的内容较多时,应该新开页面，避免造成用户视觉混乱！'} />
      <SearchFormCard>
        <Form labelCol={{ span: 8 }}>
          <Form.Item label={'任务描述'}>
            <Input />
          </Form.Item>

          <Form.Item label={'任务状态'}>
            <Input />
          </Form.Item>

          <Form.Item label={'发起人员'}>
            <Input />
          </Form.Item>

          <Form.Item label={'处理人员'}>
            <Input />
          </Form.Item>
        </Form>
      </SearchFormCard>

      <Card>
        <Table columns={columns} dataSource={data} />
      </Card>
    </>
  );
};

export default WeakRelationship;
