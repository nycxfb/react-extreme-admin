import React, { useState } from 'react';
import { Card, Form, Input, Space, Tag, Table, Button, message as Message } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import SearchFormCard from '@/components/SearchFormCard';
import { SearchOutlined, SyncOutlined } from '@ant-design/icons';
import { useMount } from 'ahooks';
import { http_role_list } from '@/api/systemManagement/role';

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
  roleType: string;
}

const Role: React.FC = () => {
  const [roleData, setRoleData] = useState([]);
  const [roleType, setRoleType] = useState(localStorage.getItem('roleType'));

  const columns: ColumnsType<DataType> = [
    {
      title: '角色',
      dataIndex: 'roleName',
      key: 'roleName'
    },
    {
      title: '描述',
      dataIndex: 'age',
      key: 'age',
      render: (_, record: DataType) => (
        <>{record.roleType == '0' ? '拥有全部权限' : record.roleType == '1' ? '拥有部分权限' : '没有权限'}</>
      )
    },
    {
      title: '创建时间',
      dataIndex: 'createdAt',
      key: 'createdAt'
    },
    {
      title: '操作',
      key: 'action',
      align: 'center',
      render: (_, _record: DataType) => (
        <>
          <Button type="link" disabled={roleType != '0'}>
            编辑
          </Button>
          <Button type="link" onClick={() => {}} disabled={roleType != '0'}>
            删除
          </Button>
        </>
      )
    }
  ];
  useMount(async () => {
    await getRoleList();
  });
  const getRoleList = async () => {
    const { code, data, message } = await http_role_list('');
    if (code == 200) {
      setRoleData(data);
    } else {
      Message.error(message);
    }
  };
  const resetForm = () => {};
  return (
    <div className="base-container">
      <SearchFormCard
        extra={
          <>
            <Button icon={<SearchOutlined />} style={{ margin: '0 20px 0 40px' }} type="primary" onClick={getRoleList}>
              查询
            </Button>
            <Button icon={<SyncOutlined />} onClick={resetForm}>
              重置
            </Button>
          </>
        }
      >
        <Form>
          <Form.Item label="角色">
            <Input></Input>
          </Form.Item>
        </Form>
      </SearchFormCard>
      <Card className="base-table-card">
        <Table columns={columns} dataSource={roleData} />
      </Card>
    </div>
  );
};

export default Role;
