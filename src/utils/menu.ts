import { MenuProps } from "antd";
import React from "react";
import asyncRoutes from "@/router/module/asyncRoutes";

type MenuItem = Required<MenuProps>["items"][number];

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
