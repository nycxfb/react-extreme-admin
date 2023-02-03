import React, {useEffect} from 'react';
import {Card, Form, Input, Row, Col, Space, Table, Tag} from 'antd'
import type {ColumnsType} from 'antd/es/table';
import {store} from '@/redux/index'

interface DataType {
    key: string;
    name: string;
    age: number;
    address: string;
    tags: string[];
}

const columns: ColumnsType<DataType> = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Age',
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

const data: DataType[] = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
];


const User: React.FC = () => {
    return (
        <div className="base-container">
            <Card className="base-form-card">
                <Form>
                    <Row gutter={24}>
                        <Col span={7}>
                            <Form.Item label="姓名">
                                <Input></Input>
                            </Form.Item>
                        </Col>
                        <Col span={7}>
                            <Form.Item label="手机">
                                <Input></Input>
                            </Form.Item>
                        </Col>
                        <Col span={7}>
                            <Form.Item label="状态">
                                <Input></Input>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </Card>

            <Card className="base-table-card">
                <Table columns={columns} dataSource={data}/>
            </Card>
        </div>
    )
}

export default User;
