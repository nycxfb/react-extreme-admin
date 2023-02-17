import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { setToken } from "@/redux/module/user/action";
import { Form, Input, Button } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import SvgIcon from "@/components/svgIcon";
import RegistrationForm from "./component/registrationForm";
import { http_user_login, http_user_captcha } from "@/api/system/user";
import "./index.less";

const Login = function (props: any) {
	const [loading, setLoading] = useState<boolean>(false);
	const [formType, setFormType] = useState<string>("login");
	const [test, setTest] = useState();
	const { setToken } = props;
	const navigate = useNavigate();
	const [form] = Form.useForm();

	useEffect(() => {
		getCaptcha();
	}, []);
	const getCaptcha = () => {
		http_user_captcha().then(res => {
			setTest(res.data.data.data);
		});
	};
	const userLogin = async () => {
		try {
			await form.validateFields();
			setLoading(true);
			const params = form.getFieldsValue();
			const res = await http_user_login(params);
			setToken(res.data.data.token);
			localStorage.setItem("userName", res.data.data.userInfo.userName);
			localStorage.setItem("avatar", res.data.data.userInfo.avatarUrl);
			navigate("/home/index");
		} catch (e) {
		} finally {
			setLoading(false);
		}
	};

	const switchForm = (type: string) => {
		setFormType(type);
	};
	return (
		<div className="login">
			<div className="login-inset">
				<SvgIcon iconClass="bgc2" />
			</div>
			{formType === "login" ? (
				<div className="login-form">
					<div className="logo-title">
						<SvgIcon iconClass="logo" />
						<div className="title">
							<h4>
								EXTREMEADMIN <span className="react">react</span>
							</h4>
							<p>A compact, clean system!</p>
						</div>
					</div>
					<Form form={form} initialValues={{ remember: false }} autoComplete="off" onFinish={userLogin}>
						<Form.Item name="phone" rules={[{ required: true, message: "Please input your phone!" }]}>
							<Input prefix={<UserOutlined />} placeholder="Username" />
						</Form.Item>
						<Form.Item name="password" rules={[{ required: true, message: "Please input your password!" }]}>
							<Input.Password prefix={<LockOutlined />} autoComplete="false" type="password" placeholder="Password" />
						</Form.Item>
						<Form.Item>
							<Input />
							<div dangerouslySetInnerHTML={{ __html: test }}></div>
						</Form.Item>
						<Form.Item>
							<Button type="primary" loading={loading} className="login-button" htmlType={"submit"}>
								登录
							</Button>
						</Form.Item>
						<span>
							还没有账号? 点击
							<a
								href="javascript:void(0)"
								onClick={() => {
									switchForm("register");
								}}
							>
								注册
							</a>
						</span>
					</Form>
				</div>
			) : (
				<div className="login-form">
					<RegistrationForm onSwitchForm={switchForm} />
				</div>
			)}
		</div>
	);
};

const mapStateToProps = (state: any) => {
	return state.user;
};

const mapDispatchToProps = { setToken };

export default connect(mapStateToProps, mapDispatchToProps)(Login);
