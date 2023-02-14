import React, { useState, forwardRef, useRef, useImperativeHandle } from "react";
import { Col, Form, Input, Modal, Row, Button } from "antd";
import { http_user_add, http_user_edit } from "@/api/systemManagement/user";

const UserFormDialog = forwardRef((props: any, ref) => {
	useImperativeHandle(ref, () => ({ showModal }));

	const [isModalOpen, setIsModalOpen] = useState(false);
	const [type, setType] = useState("");
	const [column, setColumn] = useState<any>({});
	const formRef = useRef<any>(null);

	const [form] = Form.useForm();

	// 展示弹窗
	const showModal = async (type: string, record: any) => {
		setType(type);
		setColumn(record);
		await setIsModalOpen(true);
		type === "edit" &&
			formRef.current.setFieldsValue({
				userName: record.userName,
				phone: record.phone,
				address: record.address,
				age: record.age
			});
	};

	// 提交表单项
	const handleOk = async () => {
		const params = form.getFieldsValue();
		if (type === "add") {
			const res = await http_user_add(params);
			if (res.data.code == "0000") {
				props.onGetUserList();
				form.resetFields();
				setIsModalOpen(false);
			}
		} else {
			const res = await http_user_edit({ ...params, userId: column.userId });
			setIsModalOpen(false);
			form.resetFields();
			props.onGetUserList();
		}
	};
	// 关闭弹窗
	const handleCancel = () => {
		form.resetFields();
		setIsModalOpen(false);
	};

	return (
		<Modal
			className="base-dialog"
			title={type === "add" ? "新增用户" : "编辑用户"}
			open={isModalOpen}
			onOk={handleOk}
			onCancel={handleCancel}
			footer={[
				<Button key="submit" type="primary" size={"middle"} onClick={handleOk}>
					确定
				</Button>,
				<Button key="back" size={"middle"} onClick={handleCancel}>
					取消
				</Button>
			]}
		>
			<Form ref={formRef} form={form} labelCol={{ span: 4 }}>
				<Form.Item label="姓名" name="userName">
					<Input></Input>
				</Form.Item>
				<Form.Item label="手机" name="phone">
					<Input></Input>
				</Form.Item>
				<Form.Item label="年龄" name="age">
					<Input></Input>
				</Form.Item>
				<Form.Item label="地址" name="address">
					<Input></Input>
				</Form.Item>
			</Form>
		</Modal>
	);
});

export default UserFormDialog;
