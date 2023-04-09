import React, { useRef } from 'react';
import { Button, Card, DatePicker, Form, Input, Table } from 'antd';
import Tips from '@/components/tips';
import SearchFormCard from '@/components/SearchFormCard';
import { SearchOutlined, SyncOutlined } from '@ant-design/icons';
import { ColumnsType } from 'antd/es/table';
import WorkOrder from './components/newWorkOrder';

interface DataType {
  order: string | number;
  workCode: string;
  workDescription: string;
  taskStatus: string;
  initiator: string;
  startTime: string;
  consume: string;
  [key: string]: any;
}

const StrongRelationship = () => {
  const columns: ColumnsType<DataType> = [
    {
      title: '序号',
      dataIndex: 'order',
      align: 'center'
    },
    {
      title: '工单编号',
      dataIndex: 'workCode',
      align: 'center'
    },
    {
      title: '问题描述',
      dataIndex: 'workDescription',
      align: 'center'
    },
    {
      title: '工单类型',
      dataIndex: 'orderType',
      align: 'center'
    },
    {
      title: '发起人员',
      dataIndex: 'initiator',
      align: 'center'
    },
    {
      title: '发起时间',
      dataIndex: 'startTime',
      align: 'center'
    },
    {
      title: '耗时',
      dataIndex: 'consume',
      align: 'center'
    },
    {
      title: '工单状态',
      dataIndex: 'orderStatus',
      align: 'center'
    },
    {
      title: '紧急程度',
      dataIndex: 'degree',
      align: 'center'
    }
  ];

  const data = [
    {
      order: 1,
      workCode: '202201',
      orderType: '检查工单',
      workDescription: '缺少材料',
      taskStatus: '失败',
      initiator: '张明',
      startTime: '2022-03-04 09:34',
      consume: '一周',
      orderStatus: '关闭',
      degree: '一般'
    },
    {
      order: 2,
      workCode: '202201',
      orderType: '检查工单',
      workDescription: '缺少材料',
      taskStatus: '失败',
      initiator: '张明',
      startTime: '2022-03-04 09:34',
      consume: '一周',
      orderStatus: '关闭',
      degree: '一般'
    },
    {
      order: 3,
      orderType: '检查工单',
      workCode: '202201',
      workDescription: '缺少材料',
      taskStatus: '失败',
      initiator: '张明',
      startTime: '2022-03-04 09:34',
      consume: '一周',
      orderStatus: '关闭',
      degree: '一般'
    },
    {
      order: 4,
      orderType: '检查工单',
      workCode: '202201',
      workDescription: '缺少材料',
      taskStatus: '失败',
      initiator: '张明',
      startTime: '2022-03-04 09:34',
      consume: '一周',
      orderStatus: '关闭',
      degree: '一般'
    },
    {
      order: 5,
      workCode: '202201',
      orderType: '检查工单',
      workDescription: '缺少材料',
      taskStatus: '失败',
      initiator: '张明',
      startTime: '2022-03-04 09:34',
      consume: '一周',
      orderStatus: '关闭',
      degree: '一般'
    },
    {
      order: 6,
      workCode: '202201',
      orderType: '检查工单',
      workDescription: '缺少材料',
      taskStatus: '失败',
      initiator: '张明',
      startTime: '2022-03-04 09:34',
      consume: '一周',
      orderStatus: '关闭',
      degree: '一般'
    }
  ];
  const workOrderRef = useRef<any>(null);
  const openDialog = () => {
    workOrderRef.current.openDialog();
  };
  return (
    <>
      <Tips
        message={
          '当页面内容联系较强时,页面操作内容较少,应该以弹窗形式展示在同一个页面内完成操作，避免用户视觉焦点离开！'
        }
      />
      <SearchFormCard
        extra={
          <>
            <Button disabled icon={<SearchOutlined />} style={{ margin: '0 20px 0 40px' }} type="primary">
              查询
            </Button>
            <Button disabled icon={<SyncOutlined />}>
              重置
            </Button>
          </>
        }
      >
        <Form labelCol={{ span: 8 }}>
          <Form.Item label={'问题描述'}>
            <Input />
          </Form.Item>
          <Form.Item label={'发起机构'}>
            <Input />
          </Form.Item>
          <Form.Item label={'发起时间'}>
            <DatePicker />
          </Form.Item>
          <Form.Item label={'工单状态'}>
            <Input />
          </Form.Item>
          <Form.Item label={'工单类型'}>
            <Input />
          </Form.Item>
        </Form>
      </SearchFormCard>

      <Card
        extra={
          <Button type={'primary'} onClick={openDialog}>
            新增
          </Button>
        }
      >
        <Table columns={columns} dataSource={data} />
      </Card>

      <WorkOrder ref={workOrderRef} />
    </>
  );
};

export default StrongRelationship;
