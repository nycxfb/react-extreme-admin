import React from "react";
import { connect } from "react-redux";
import { toggleSideMenu } from "@/redux/module/menu/action";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import "./index.less";

const SwitchButton = (props: any) => {
	const { isCollapse, toggleSideMenu } = props;
	const ontoggle = () => {
		toggleSideMenu(!isCollapse);
	};
	return (
		<div className="switch-button" onClick={ontoggle}>
			{props.isCollapse ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
		</div>
	);
};

const mapStateToProps = (state: any) => {
	return state.menu;
};
const mapDispatchToProps = {
	toggleSideMenu
};
export default connect(mapStateToProps, mapDispatchToProps)(SwitchButton);
