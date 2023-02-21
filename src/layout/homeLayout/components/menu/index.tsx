import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu } from "antd";
import type { MenuProps } from "antd";
import { SettingOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import asyncRoutes from "@/router/module/asyncRoutes";
import { toggleTags, addVisitTag } from "@/redux/module/header/action";
import { baseRouter } from "@/router/interface";
import "./index.less";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
	label: React.ReactNode,
	key: React.Key,
	icon?: React.ReactNode,
	children?: MenuItem[],
	type?: "group"
): MenuItem {
	const routeItem = {};
	label && Object.assign(routeItem, { label });
	key && Object.assign(routeItem, { key });
	icon && Object.assign(routeItem, { icon });
	children && Object.assign(routeItem, { children });
	type && Object.assign(routeItem, { type });
	return routeItem as MenuItem;
}

const HomeMenu: React.FC = () => {
	const [menuData, setMenuData] = useState<MenuItem[]>([]);
	const [openKeys, setOpenKeys] = useState<string[]>([""]);
	const [rootSubmenuKeys, setRootSubmenuKeys] = useState<string[]>([]);

	const { pathname } = useLocation();
	const navigate = useNavigate();
	const { t, i18n } = useTranslation();

	const [selectedKeys, setSelectKeys] = useState<string[]>([pathname]);

	//根据路径展开菜单
	useEffect(() => {
		setSelectKeys([pathname]);
		setOpenKeys([`/${pathname.split("/")[1]}`]);
	}, [pathname]);

	//切换菜单语言
	useEffect(() => {
		generateMenuData(asyncRoutes);
	}, [i18n.language, asyncRoutes]);

	//菜单点击
	const clickMenu = (props: any) => {
		navigate(props.key);
	};

	//将路由处理成 ant-menu 需要的数据格式
	const generateMenuData = (
		routeArray: baseRouter[],
		path?: string,
		tempMenuData: MenuItem[] = [],
		tempRootSubmenuKeys: Array<any> = []
	) => {
		routeArray.forEach((routeItem: baseRouter) => {
			if (path && !routeItem?.hidden) {
				for (const [index, tempMenuItem] of tempMenuData.entries()) {
					if (tempMenuItem?.key === path) {
						// @ts-ignore
						tempMenuItem?.children.push(getItem(t(`route.${routeItem.meta.title}`), routeItem.path));
						break;
					}
				}
			}

			if (routeItem.children) {
				if (routeItem.children.length > 1) {
					tempRootSubmenuKeys.push(routeItem.path);
					tempMenuData.push(getItem(t(`route.${routeItem?.meta?.title}`), routeItem?.path, <SettingOutlined />, []));
					generateMenuData(routeItem.children, routeItem.path, tempMenuData);
				} else {
					if (!routeItem?.hidden) {
						const childrenItem = routeItem.children[0];
						tempMenuData.push(getItem(t(`route.${childrenItem?.meta?.title}`), childrenItem.path, <SettingOutlined />));
					}
				}
			}
		});
		setMenuData(tempMenuData);
		setRootSubmenuKeys(tempRootSubmenuKeys);
	};

	//处理菜单展开逻辑,只展开一项
	const onOpenChange: MenuProps["onOpenChange"] = keys => {
		const latestOpenKey: string | undefined = keys.find(key => openKeys.indexOf(key) === -1);
		if (rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
			setOpenKeys(keys);
		} else {
			setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
		}
	};

	return (
		<section className="menu">
			<Menu
				mode="inline"
				theme="dark"
				items={menuData}
				triggerSubMenuAction="click"
				onClick={clickMenu}
				openKeys={openKeys}
				selectedKeys={selectedKeys}
				onOpenChange={onOpenChange}
			/>
		</section>
	);
};

const mapStateToProps = (state: any) => {
	return state.header;
};
const mapDispatchToProps = {
	toggleTags,
	addVisitTag
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeMenu);
