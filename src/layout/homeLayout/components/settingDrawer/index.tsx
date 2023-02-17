import React from "react";
import { connect } from "react-redux";
import { Divider, Drawer, Form, Switch } from "antd";
import { toggleDrawer } from "@/redux/module/header/action";

const SettingDrawer = (props: any) => {
	const { toggleDrawer, drawerVisible } = props;

	const closeDrawer = () => {
		toggleDrawer(false);
	};
	return (
		<Drawer title="系统设置" placement="right" onClose={closeDrawer} open={drawerVisible}>
			<Divider>主题颜色</Divider>
			<Divider>界面设置</Divider>
			<Form colon={false} labelCol={{ span: 20 }} labelAlign="left">
				<Form.Item label={"显示标签"}>
					<Switch />
				</Form.Item>
				<Form.Item label={"显示面包屑"}>
					<Switch />
				</Form.Item>
				<Form.Item label={"页脚"}>
					<Switch />
				</Form.Item>
				<Form.Item label={"Logo"}>
					<Switch />
				</Form.Item>
			</Form>
		</Drawer>
	);
};
const mapStateToProps = (state: any) => {
	return state.header;
};

export default connect(mapStateToProps, { toggleDrawer })(SettingDrawer);
