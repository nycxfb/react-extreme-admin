import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Avatar, Dropdown } from "antd";
import type { MenuProps } from "antd";
import { useNavigate } from "react-router-dom";
import { userLogOut } from "@/redux/module/user/action";
import "./index.less";

const UserInfo = (props: any) => {
	const [avatar, setAvatar] = useState<string>("");
	const [userName, setUserName] = useState<string>("");
	const navigate = useNavigate();
	const { userLogOut } = props;
	const logOut = () => {
		sessionStorage.clear();
		localStorage.clear();
		userLogOut();
		navigate("/login");
	};
	useEffect(() => {
		setAvatar(localStorage.getItem("avatar") || "");
		setUserName(localStorage.getItem("userName") || "");
	}, []);
	const items: MenuProps["items"] = [
		{
			key: "1",
			label: (
				<span
					onClick={() => {
						logOut();
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
				<Avatar size={40} src={avatar} />
			</Dropdown>
			<span>{userName}</span>
		</>
	);
};

const mapStateToProps = (state: any) => {
	return state;
};

export default connect(mapStateToProps, { userLogOut })(UserInfo);
