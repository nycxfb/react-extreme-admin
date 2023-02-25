import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Checkbox, Divider, Drawer, Form, Switch } from "antd";
import { useTranslation } from "react-i18next";
import { toggleDrawer } from "@/redux/module/header/action";
import { toggleBreadcrumbPart, toggleTagPart, toggleLogoPart, toggleFooterPart } from "@/redux/module/system/action";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
import type { CheckboxValueType } from "antd/es/checkbox/Group";

const CheckboxGroup = Checkbox.Group;

const plainOptions = ["Apple", "Pear", "Orange"];
const defaultCheckedList = ["Apple", "Orange"];

const plainOptions1 = [""];
const plainOptions2 = [""];

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
		isShowFooter
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
	const onFooterChange = (checked: boolean) => {
		toggleFooterPart(checked);
	};

	const [checkedList, setCheckedList] = useState<CheckboxValueType[]>(defaultCheckedList);
	const [indeterminate, setIndeterminate] = useState(true);
	const [checkAll, setCheckAll] = useState(false);

	const onChange = (list: CheckboxValueType[]) => {
		setCheckedList(list);
		setIndeterminate(!!list.length && list.length < plainOptions.length);
		setCheckAll(list.length === plainOptions.length);
	};

	const onCheckAllChange = (e: CheckboxChangeEvent) => {
		setCheckedList(e.target.checked ? plainOptions : []);
		setIndeterminate(false);
		setCheckAll(e.target.checked);
	};

	return (
		<Drawer title={t("setting.systemSetting")} placement="right" onClose={closeDrawer} open={drawerVisible}>
			<Divider>{t("setting.themeColor")}</Divider>
			<Divider>{t("setting.menuColor")}</Divider>
			<Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
				Check all
			</Checkbox>
			<Divider />
			<CheckboxGroup options={plainOptions} value={checkedList} onChange={onChange} />
			<Divider />

			<CheckboxGroup options={plainOptions1} value={checkedList} onChange={onChange} />
			<CheckboxGroup options={plainOptions2} value={checkedList} onChange={onChange} />

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
	toggleFooterPart
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingDrawer);
