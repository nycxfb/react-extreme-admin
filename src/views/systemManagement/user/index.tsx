import React, { useEffect, useState, useRef } from "react";
import { Card, Form, Input, Row, Col, Space, Table, Tag, Button, Avatar, Select } from "antd";
import { SearchOutlined, RedoOutlined } from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";
import { http_user_list, http_user_delete } from "@/api/systemManagement/user";
import UserFormDialog from "./components/userFormDialog";
import { useMount } from "ahooks";
import "./index.less";

import SearchFormCard from "@/components/SearchFormCard";

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
			title: "昵称",
			dataIndex: "nickname",
			key: "nickname",
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
			title: "角色",
			dataIndex: "role",
			key: "role",
			align: "center"
		},
		{
			title: "用户头像",
			key: "avatarUrl",
			align: "center",
			render: (_, record: DataType) => (
				<>{record?.avatarUrl && <Avatar shape="square" size="large" src={record.avatarUrl} />}</>
			)
		},
		{
			title: "创建时间",
			dataIndex: "createdAt",
			key: "createdAt",
			align: "center"
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

	useMount(() => {
		getUserList();
	});

	const getUserList = async () => {
		setLoading(true);
		const res = await http_user_list(form.getFieldsValue());
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

	const handleChange = () => {};

	const [form] = Form.useForm();

	const resetForm = () => {
		form.resetFields();
		getUserList();
	};

	return (
		<>
			<UserFormDialog ref={userFormRef} onGetUserList={getUserList} />
			<div className="base-container">
				<SearchFormCard
					extra={
						<>
							<Button
								icon={<SearchOutlined />}
								style={{ margin: "0 20px 0 40px" }}
								type="primary"
								onClick={getUserList}
							>
								查询
							</Button>
							<Button icon={<RedoOutlined />} onClick={resetForm}>
								重置
							</Button>
						</>
					}
				>
					<Form labelCol={{ span: 7 }} form={form}>
						<Form.Item label="昵称" name={"nickname"}>
							<Input allowClear></Input>
						</Form.Item>
						<Form.Item label="手机" name={"phone"}>
							<Input allowClear></Input>
						</Form.Item>
						<Form.Item label="状态">
							<Input allowClear></Input>
						</Form.Item>
						<Form.Item label="角色">
							<Select
								defaultValue=""
								onChange={handleChange}
								options={[
									{ value: "super", label: "超级管理员" },
									{ value: "middle", label: "管理员" },
									{ value: "primary", label: "普通用户" }
								]}
							/>
						</Form.Item>
					</Form>
				</SearchFormCard>

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
					<Table columns={columns} dataSource={userList} bordered loading={loading} />
				</Card>
			</div>
		</>
	);
};

export default User;
