import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Col, Form, Input, message, Row } from "antd";
import { useTranslation } from "react-i18next";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import SvgIcon from "@/components/svgIcon";
import { http_user_captcha, http_user_login } from "@/api/system/user";
import { connect } from "react-redux";
import { setToken } from "@/redux/module/user/action";

const LoginForm = (props: any) => {
	const [loading, setLoading] = useState<boolean>(false);
	const [captcha, setCaptcha] = useState<string>("");

	const { onToggleForm, setToken } = props;

	const navigate = useNavigate();

	const { t } = useTranslation();
	const [form] = Form.useForm();

	useEffect(() => {
		getCaptcha();
	}, []);

	// 获取验证码
	const getCaptcha = async () => {
		const res = await http_user_captcha();
		setCaptcha(res.data.data);
	};

	const toggleForm = (type: string) => {
		onToggleForm(type);
	};

	// 用户登录
	const userLogin = async () => {
		try {
			await form.validateFields();
			setLoading(true);
			const params = form.getFieldsValue();
			const res: any = await http_user_login(params);
			if (res.code == 200) {
				console.log(res.data, "llllllllllllllll");
				setToken(res.data.token);
				localStorage.setItem("userName", res.data.userInfo.userName);
				localStorage.setItem("avatar", res.data.userInfo.avatarUrl);
				navigate("/home/index");
			} else {
				await getCaptcha();
				message.error(res.message);
			}
		} catch (e) {
		} finally {
			setLoading(false);
		}
	};

	return (
		<Form form={form} onFinish={userLogin}>
			<Form.Item name="phone" rules={[{ required: true, message: t("login.userPhone") }]}>
				<Input prefix={<UserOutlined />} placeholder="Username" />
			</Form.Item>

			<Form.Item name="password" rules={[{ required: true, message: t("login.password") }]}>
				<Input.Password
					prefix={<LockOutlined />}
					autoComplete="false"
					type="password"
					placeholder="Password"
				/>
			</Form.Item>

			<Form.Item name={"captcha"} rules={[{ required: true, message: t("login.captcha") }]}>
				<Row gutter={4}>
					<Col span={18}>
						<Input
							prefix={<SvgIcon width={15} height={15} iconClass={"verifyCode"} />}
							placeholder="Verify code"
						/>
					</Col>
					<Col className={"captcha"} span={5}>
						<div dangerouslySetInnerHTML={{ __html: captcha }} onClick={getCaptcha}></div>
					</Col>
				</Row>
			</Form.Item>

			<Form.Item>
				<Button type="primary" loading={loading} className="login-button" htmlType={"submit"}>
					{t("login.login")}
				</Button>
			</Form.Item>

			<span>
				{t("login.account")}
				<a
					href="javascript:void(0)"
					onClick={() => {
						toggleForm("signup");
					}}
				>
					{t("login.register")}
				</a>
			</span>
		</Form>
	);
};

const mapStateToProps = (state: any) => {
	return state.user;
};

const mapDispatchToProps = { setToken };

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
