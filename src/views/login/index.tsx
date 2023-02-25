import React, { useState, useEffect } from "react";
import { setToken } from "@/redux/module/user/action";
import { Form, Input, Button, Row, Col, message } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import SvgIcon from "@/components/svgIcon";
import LoginForm from "./component/loginForm";
import SignupForm from "./component/signupForm";
import Language from "@/components/language";

import "./index.module.less";

const Login = function (props: any) {
	const [formType, setFormType] = useState<string>("login");

	const { setToken } = props;
	const [form] = Form.useForm();
	const { t, i18n } = useTranslation();

	const toggleForm = (type: string) => {
		setFormType(type);
	};

	return (
		<div className={"login-container"}>
			<div className={"test"}>
				<SvgIcon iconClass={"logo_react"} width={270} height={270} />
				<h1>{t("login.slogan")}</h1>
			</div>
			{formType === "login" ? (
				<div className="login-form">
					<h1 style={{ width: "60%", padding: "15px 0" }}>{t("login.welcome")}</h1>
					<LoginForm onToggleForm={toggleForm} />
				</div>
			) : (
				<div className="login-form">
					<h1 style={{ width: "60%", padding: "15px 0" }}>用户注册</h1>
					<SignupForm onToggleForm={toggleForm} />
				</div>
			)}
			<Language />
		</div>
	);
};
export default Login;
