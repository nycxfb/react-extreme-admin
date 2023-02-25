import React from "react";
import { Button, Form, Input } from "antd";
import { useTranslation } from "react-i18next";

const SignupForm = (props: any) => {
	const [form] = Form.useForm();
	const { t } = useTranslation();

	const { onToggleForm } = props;

	const userSignup = () => {};

	return (
		<Form form={form}>
			<Form.Item name="userName">
				<Input placeholder="Username" />
			</Form.Item>
			<Form.Item name="phone" rules={[{ required: true, message: t("login.userPhone") }]}>
				<Input placeholder="Username" />
			</Form.Item>
			<Form.Item
				name="password"
				autoComplete="off"
				rules={[{ required: true, message: t("login.userPhone") }]}
			>
				<Input.Password placeholder="Username" autoComplete="new-password" />
			</Form.Item>
			<Form.Item name="passwordConfirm" rules={[{ required: true, message: t("login.userPhone") }]}>
				<Input.Password placeholder="Username" />
			</Form.Item>
			<Form.Item>
				<Button
					type={"primary"}
					onClick={userSignup}
					className="login-button"
					style={{ "margin-bottom": "15px" }}
				>
					注册
				</Button>
				<Button
					className="login-button"
					onClick={() => {
						onToggleForm("login");
					}}
				>
					返回
				</Button>
			</Form.Item>
		</Form>
	);
};

export default SignupForm;
