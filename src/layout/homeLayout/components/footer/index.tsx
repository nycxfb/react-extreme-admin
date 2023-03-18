import React from "react";
import { GithubOutlined } from "@ant-design/icons";
import "./index.module.less";
import { Layout } from "antd";

const Footer = () => {
	return (
		<div className={"footer"}>
			<a href={"https://github.com/nycxfb/react-extreme-admin"}>
				<GithubOutlined />
			</a>
			<span>Copyright ©2023 Extreme Admin</span>
		</div>
	);
};

export default Footer;
