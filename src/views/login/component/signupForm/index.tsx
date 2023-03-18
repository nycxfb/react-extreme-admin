import React from "react";
import { Button, Form, Input, message } from "antd";
import { useTranslation } from "react-i18next";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import SvgIcon from "@/components/svgIcon";
import { http_user_register } from "@/api/system/user";

const SignupForm = (props: any) => {
	const [form] = Form.useForm();
	const { t } = useTranslation();

	const { onToggleForm } = props;

	const userSignup = async () => {
		try {
			await form.validateFields();
			const { passwordConfirm, ...params } = form.getFieldsValue();
			if (params.password === passwordConfirm) {
				const res = await http_user_register(params);
				const { code, message } = res;
				if (code == 200) {
					message.success(message);
				}
			} else {
				message.error("密码不一致,请检查！");
			}
		} catch (e) {}
	};

	return (
		<Form form={form} onFinish={userSignup}>
			<Form.Item name="nickname" rules={[{ required: true, message: t("login.userNickname")! }]}>
				<Input prefix={<UserOutlined />} placeholder={t("login.nickname")!} />
			</Form.Item>
			<Form.Item name="phone" rules={[{ required: true, message: t("login.userPhone")! }]}>
				<Input
					prefix={<SvgIcon iconClass={"phone"} width={15} height={15} />}
					placeholder={t("login.phoneHolder")!}
				/>
			</Form.Item>
			<Form.Item name="password" rules={[{ required: true, message: t("login.userPassword")! }]}>
				<Input.Password
					prefix={<LockOutlined />}
					placeholder={t("login.passwordHolder")!}
					autoComplete="new-password"
				/>
			</Form.Item>
			<Form.Item
				name="passwordConfirm"
				rules={[{ required: true, message: t("login.confirmPasswordHolder")! }]}
			>
				<Input.Password
					prefix={<SvgIcon iconClass={"confirmPassword"} width={15} height={15} />}
					placeholder={t("login.confirmPasswordHolder")!}
				/>
			</Form.Item>
			<Form.Item>
				<Button
					htmlType={"submit"}
					type={"primary"}
					className="login-button"
					style={{ marginBottom: "15px" }}
				>
					{t("login.register")}
				</Button>
				<Button
					className="login-button"
					onClick={() => {
						onToggleForm("login");
					}}
				>
					{t("login.back")}
				</Button>
			</Form.Item>
		</Form>
	);
};

export default SignupForm;
