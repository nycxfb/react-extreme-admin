import { MenuProps } from "antd";
import React from "react";
import { generateMenu } from "@/redux/module/menu/action";
import { useTranslation } from "react-i18next";
import { SettingOutlined } from "@ant-design/icons";

type MenuItem = Required<MenuProps>["items"][number];

const { t } = useTranslation();

function getItem(
	label: React.ReactNode,
	key: React.Key,
	icon?: React.ReactNode,
	children?: MenuItem[],
	type?: "group"
): MenuItem {
	const menuItem = {};
	label && Object.assign(menuItem, { label });
	key && Object.assign(menuItem, { key });
	icon && Object.assign(menuItem, { icon });
	children && Object.assign(menuItem, { children });
	type && Object.assign(menuItem, { type });
	return menuItem as MenuItem;
}

export const handleRouteToMenu = (route: any, path: string, handleRoutes: any = []) => {
	route.forEach((menuItem: any) => {
		if (path && !menuItem?.hidden) {
			handleRoutes.forEach((item: any) => {
				if (item.key == path) {
					item.children.push(getItem(t(`route.${menuItem.meta.title}`), menuItem.path));
				}
			});
		}

		if (menuItem.children) {
			if (menuItem.children.length > 1) {
				handleRoutes.push(getItem(t(`route.${menuItem.meta.title}`), menuItem.path, <SettingOutlined />, []));
				handleRouteToMenu(menuItem.children, menuItem.path);
			} else {
				if (!menuItem?.hidden) {
					const childrenItem = menuItem.children[0];
					handleRoutes.push(getItem(t(`route.${childrenItem.meta.title}`), childrenItem.path, <SettingOutlined />));
				}
			}
		} else {
		}
	});
	return handleRoutes;
};
