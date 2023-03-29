import React, { useState } from "react";
import { connect } from "react-redux";
import { Divider, Drawer, Form, Switch } from "antd";
import { useTranslation } from "react-i18next";
import { toggleDrawer } from "@/redux/module/header/action";
import { store } from "@/redux";
import { CheckOutlined } from "@ant-design/icons";

import {
	toggleBreadcrumbPart,
	toggleTagPart,
	toggleLogoPart,
	toggleFooterPart,
	toggleMenuTheme
} from "@/redux/module/system/action";

import style from "./index.module.less";

const SettingDrawer = (props: any) => {
	const {
		toggleDrawer,
		drawerVisible,
		toggleBreadcrumbPart,
		toggleTagPart,
		toggleLogoPart,
		toggleFooterPart,
		isShowTag,
		isShowBreadcrumb,
		isShowLogo,
		isShowFooter,
		toggleMenuTheme
	} = props;

	const [theme, setTheme] = useState(store.getState().system.menuTheme);
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
	const onFooterChange = (checked: boolean) => {
		toggleFooterPart(checked);
	};

	const changeColor = (theme: string) => {
		toggleMenuTheme(theme);
		setTheme(theme);
	};

	return (
		<Drawer
			title={t("setting.systemSetting")}
			placement="right"
			onClose={closeDrawer}
			open={drawerVisible}
		>
			<Divider>{t("setting.menuColor")}</Divider>
			<div className={style["menu-color"]}>
				<div
					className={["white", theme == "light" ? "\n border" : null].join("")}
					onClick={() => {
						changeColor("light");
					}}
				>
					{theme === "light" && <CheckOutlined />}
				</div>
				<div
					className={"black"}
					onClick={() => {
						changeColor("dark");
					}}
				>
					{theme === "dark" && <CheckOutlined />}
				</div>
			</div>
			<Divider>{t("setting.uiSetting")}</Divider>
			<Form colon={false} labelCol={{ span: 20 }} labelAlign="left">
				<Form.Item label={t("setting.showTag")}>
					<Switch onChange={onTagChange} checked={isShowTag} />
				</Form.Item>
				<Form.Item label={t("setting.showBreadcrumb")}>
					<Switch onChange={breadcrumbChange} checked={isShowBreadcrumb} />
				</Form.Item>
				<Form.Item label={t("setting.showFooter")}>
					<Switch onChange={onFooterChange} checked={isShowFooter} />
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
	toggleLogoPart,
	toggleFooterPart,
	toggleMenuTheme
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingDrawer);
