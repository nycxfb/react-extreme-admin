import React from "react";
import { Button, Form, Input } from "antd";
import "./registrationForm.less";
import { http_user_register } from "@/api/system/user";

const RegistrationForm = (props: any) => {
	const [form] = Form.useForm();
	const switchForm = () => {
		props.onSwitchForm("login");
	};

	const userRegister = async () => {
		const params = form.getFieldsValue();
		const res = await http_user_register(params);
	};
	return (
		<>
			<Form labelCol={{ span: 5 }} form={form}>
				<Form.Item label={""}>
					<h2>用户注册</h2>
				</Form.Item>
				<Form.Item label="用户名" name="userName">
					<Input />
				</Form.Item>
				<Form.Item label="手机号" name="phone">
					<Input />
				</Form.Item>
				<Form.Item label="密码" name="password">
					<Input />
				</Form.Item>
				<Form.Item label="确认密码" name="passwordConfirm">
					<Input />
				</Form.Item>
			</Form>
			<div className={"button-wrapper"}>
				<Button type={"primary"} onClick={userRegister}>
					注册
				</Button>
				<Button type={"primary"} onClick={switchForm}>
					返回
				</Button>
			</div>
		</>
	);
};

export default RegistrationForm;
