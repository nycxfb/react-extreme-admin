import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Avatar, Dropdown, Modal, Button } from "antd";
import type { MenuProps } from "antd";
import { useNavigate } from "react-router-dom";
import { userLogOut } from "@/redux/module/user/action";
import "./index.less";

const User = (props: any) => {
	const [avatar, setAvatar] = useState<string>("");
	const [userName, setUserName] = useState<string>("");
	const [visible, setVisible] = useState<boolean>(false);

	const navigate = useNavigate();
	const { userLogOut } = props;

	useEffect(() => {
		setAvatar(localStorage.getItem("avatar") || "");
		setUserName(localStorage.getItem("userName") || "");
	}, []);

	const logOut = () => {
		setVisible(true);
		sessionStorage.clear();
		localStorage.clear();
		userLogOut();
		navigate("/login");
	};

	const items: MenuProps["items"] = [
		{
			key: "1",
			label: (
				<span
					onClick={() => {
						logOut();
					}}
				>
					首页
				</span>
			)
		},
		{
			key: "2",
			label: (
				<span
					onClick={() => {
						logOut();
					}}
				>
					我的主页
				</span>
			)
		},
		{
			key: "3",
			label: (
				<span
					onClick={() => {
						setVisible(true);
					}}
				>
					退出登录
				</span>
			)
		}
	];

	return (
		<>
			<Dropdown menu={{ items }} trigger={["click"]} placement="bottom">
				<Avatar size={35} src={avatar} />
			</Dropdown>
			<Modal
				title="温馨提示"
				open={visible}
				footer={[
					<Button
						key="back"
						size={"small"}
						onClick={() => {
							setVisible(false);
						}}
					>
						取消
					</Button>,
					<Button key="submit" size={"small"} type="primary" onClick={logOut}>
						确定
					</Button>
				]}
			>
				<p style={{ padding: "10px 0" }}>是否确认退出系统？</p>
			</Modal>
		</>
	);
};

const mapStateToProps = (state: any) => {
	return state;
};

export default connect(mapStateToProps, { userLogOut })(User);
