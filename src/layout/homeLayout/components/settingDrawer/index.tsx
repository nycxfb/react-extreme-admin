import React from "react";
import { connect } from "react-redux";
import { Divider, Drawer, Form, Switch } from "antd";
import { useTranslation } from "react-i18next";
import { toggleDrawer } from "@/redux/module/header/action";

const SettingDrawer = (props: any) => {
	const { toggleDrawer, drawerVisible } = props;
	const { t } = useTranslation();

	const closeDrawer = () => {
		toggleDrawer(false);
	};
	return (
		<Drawer title={t("setting.systemSetting")} placement="right" onClose={closeDrawer} open={drawerVisible}>
			<Divider>{t("setting.themeColor")}</Divider>
			<Divider>{t("setting.uiSetting")}</Divider>
			<Form colon={false} labelCol={{ span: 20 }} labelAlign="left">
				<Form.Item label={t("setting.showTag")}>
					<Switch />
				</Form.Item>
				<Form.Item label={t("setting.showBreadcrumb")}>
					<Switch />
				</Form.Item>
				<Form.Item label={t("setting.showFooter")}>
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
