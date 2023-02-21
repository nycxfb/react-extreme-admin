import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Divider, Drawer, Form, Switch } from "antd";
import { useTranslation } from "react-i18next";
import { toggleDrawer } from "@/redux/module/header/action";
import { toggleBreadcrumbPart, toggleTagPart, toggleLogoPart } from "@/redux/module/system/action";

const SettingDrawer = (props: any) => {
	const {
		toggleDrawer,
		drawerVisible,
		toggleBreadcrumbPart,
		toggleTagPart,
		toggleLogoPart,
		isShowTag,
		isShowBreadcrumb,
		isShowLogo
	} = props;
	const { t } = useTranslation();

	const closeDrawer = () => {
		toggleDrawer(false);
	};

	const onTagChange = (checked: boolean) => {
		toggleTagPart(checked);
	};

	const breadcrumbChange = (checked: boolean) => {
		toggleBreadcrumbPart(checked);
	};

	const onLogoChange = (checked: boolean) => {
		toggleLogoPart(checked);
	};

	return (
		<Drawer title={t("setting.systemSetting")} placement="right" onClose={closeDrawer} open={drawerVisible}>
			<Divider>{t("setting.themeColor")}</Divider>
			<Divider>{t("setting.uiSetting")}</Divider>
			<Form colon={false} labelCol={{ span: 20 }} labelAlign="left">
				<Form.Item label={t("setting.showTag")}>
					<Switch onChange={onTagChange} checked={isShowTag} />
				</Form.Item>
				<Form.Item label={t("setting.showBreadcrumb")}>
					<Switch onChange={breadcrumbChange} checked={isShowBreadcrumb} />
				</Form.Item>
				<Form.Item label={t("setting.showFooter")}>
					<Switch />
				</Form.Item>
				<Form.Item label={"Logo"}>
					<Switch onChange={onLogoChange} checked={isShowLogo} />
				</Form.Item>
			</Form>
		</Drawer>
	);
};
const mapStateToProps = (state: any) => {
	return { ...state.header, ...state.system };
};

const mapDispatchToProps = {
	toggleDrawer,
	toggleBreadcrumbPart,
	toggleTagPart,
	toggleLogoPart
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingDrawer);
