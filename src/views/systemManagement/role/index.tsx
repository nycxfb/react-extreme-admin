import React from 'react';
import {Card, Col, Form, Input, Row, Space, Tag,Table} from 'antd'
import type {ColumnsType} from 'antd/es/table';

interface DataType {
    key: string;
    name: string;
    age: number;
    address: string;
    tags: string[];
}

const columns: ColumnsType<DataType> = [
    {
        title: '角色',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: '描述',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: (_, {tags}) => (
            <>
                {tags.map((tag) => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';
                    if (tag === 'loser') {
                        color = 'volcano';
                    }
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </>
        ),
    },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <a>Invite {record.name}</a>
                <a>Delete</a>
            </Space>
        ),
    },
];

const Role: React.FC = () => {
    return (
        <div className="base-container">
            <Card className="base-form-card">
                <Form>
                    <Row gutter={24}>
                        <Col span={7}>
                            <Form.Item label="角色">
                                <Input></Input>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </Card>
            <Card className="base-table-card">
                <Table columns={columns}></Table>
            </Card>
        </div>
    )
}

export default Role;