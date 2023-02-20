import React, { useEffect, useState, useRef } from "react";
import { Card, Form, Input, Row, Col, Space, Table, Tag, Button, Avatar } from "antd";
import type { ColumnsType } from "antd/es/table";
import { http_user_list, http_user_delete } from "@/api/systemManagement/user";
import UserFormDialog from "./components/userFormDialog";

interface DataType {
	key: string;
	name: string;
	age: number;
	address: string;
	tags: string[];
	avatarUrl: string;
}

const User: React.FC = () => {
	const columns: ColumnsType<DataType> = [
		{
			title: "姓名",
			dataIndex: "userName",
			key: "userName",
			align: "center"
		},
		{
			title: "年龄",
			dataIndex: "age",
			key: "age",
			align: "center"
		},
		{
			title: "手机号码",
			dataIndex: "phone",
			key: "phone",
			align: "center"
		},
		{
			title: "地址",
			dataIndex: "address",
			key: "address",
			align: "center"
		},
		{
			title: "用户头像",
			key: "avatarUrl",
			align: "center",
			render: (_, record: DataType) => <>{record?.avatarUrl && <Avatar shape="square" size="large" src={record.avatarUrl} />}</>
		},
		{
			title: "操作",
			key: "action",
			align: "center",
			render: (_, record: DataType) => (
				<>
					<Button
						type="link"
						onClick={() => {
							newUser("edit", record);
						}}
					>
						编辑
					</Button>
					<Button
						type="link"
						onClick={() => {
							deleteUser(record);
						}}
					>
						删除
					</Button>
				</>
			)
		}
	];
	const userFormRef = useRef<any>(null);
	const [loading, setLoading] = useState<boolean>(false);
	const [userList, setUserList] = useState<DataType[]>([]);
	useEffect(() => {
		getUserList();
	}, []);

	const getUserList = async () => {
		setLoading(true);
		const res = await http_user_list(null);
		const userList = res.data;
		userList.forEach((item: any) => {
			Object.assign(item, { key: item.userId });
		});
		setUserList(userList);
		setLoading(false);
	};
	const newUser = (type: string, record?: Object) => {
		userFormRef.current.showModal(type, record);
	};
	const deleteUser = async (record: any) => {
		await http_user_delete({ userId: record.userId });
		getUserList();
	};

	return (
		<>
			<UserFormDialog ref={userFormRef} onGetUserList={getUserList} />
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
					<Row>
						<Col span={3}>
							<Button type="primary" onClick={getUserList}>
								查询
							</Button>
						</Col>
						<Col span={3}>
							<Button>重置</Button>
						</Col>
					</Row>
				</Card>

				<Card
					className="base-table-card"
					title="用户列表"
					extra={
						<Button
							type="primary"
							onClick={() => {
								newUser("add");
							}}
						>
							新增
						</Button>
					}
				>
					<Table columns={columns} dataSource={userList} loading={loading} />
				</Card>
			</div>
		</>
	);
};

export default User;
