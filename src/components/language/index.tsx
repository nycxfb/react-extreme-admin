import React from "react";
import { Dropdown, message } from "antd";
import type { MenuProps } from "antd";
import SvgIcon from "@/components/svgIcon";
import { useTranslation } from "react-i18next";

const Language = () => {
	const { i18n } = useTranslation();
	const items: MenuProps["items"] = [
		{
			key: "1",
			disabled: i18n.language === "en" ? false : true,
			label: (
				<span
					onClick={async () => {
						await toggleLanguage();
					}}
				>
					简体中文
				</span>
			)
		},
		{
			key: "2",
			disabled: i18n.language === "zh" ? false : true,
			label: (
				<span
					onClick={async () => {
						await toggleLanguage();
					}}
				>
					English
				</span>
			)
		}
	];
	const toggleLanguage = async () => {
		await i18n.changeLanguage(i18n.language == "en" ? "zh" : "en");
		if (i18n.language == "en") {
			message.success("Switch to English mode！");
		} else {
			message.success("切换为中文模式！");
		}
	};
	return (
		<Dropdown menu={{ items }} trigger={["click"]} placement="bottom">
			<div className={"language"}>
				<SvgIcon iconClass={"zhen"} width={25} height={25} cursor={"pointer"} />
			</div>
		</Dropdown>
	);
};

export default Language;
