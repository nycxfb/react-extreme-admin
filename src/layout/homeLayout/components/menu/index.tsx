import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu } from "antd";
import type { MenuProps } from "antd";
import { SettingOutlined, BankOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import asyncRoutes from "@/router/module/asyncRoutes";
import { toggleTags, addVisitTag } from "@/redux/module/header/action";
import { generateSubmenuPath } from "@/router/util/handleRoute";
import { baseRouter } from "@/router/interface";
import SvgIcon from "@/components/svgIcon";
import Icon from "@ant-design/icons";
import "./index.module.less";
import * as Icons from "@ant-design/icons";
import NProgress from "nprogress";
import { log } from "echarts/types/src/util/log";

type MenuItem = Required<MenuProps>["items"][number];

const HomeMenu: React.FC = (props: any) => {
	const [menuData, setMenuData] = useState<MenuItem[]>([]);
	const [openKeys, setOpenKeys] = useState<string[]>([""]);
	const [rootSubmenuKeys, setRootSubmenuKeys] = useState<string[]>([]);

	const { menuTheme } = props;

	const { pathname } = useLocation();
	const navigate = useNavigate();
	const { t, i18n } = useTranslation();

	const [selectedKeys, setSelectKeys] = useState<string[]>([pathname]);

	useEffect(() => {
		setRootSubmenuKeys(generateSubmenuPath(asyncRoutes));
	}, []);

	//根据路径展开菜单
	useEffect(() => {
		setSelectKeys([pathname]);
		setOpenKeys([`/${pathname.split("/")[1]}`]);
	}, [pathname]);

	//菜单点击
	const clickMenu = (props: any) => {
		navigate(props.key);
	};

	// 动态渲染 Icon 图标
	const customIcons: { [key: string]: any } = Icons;
	const handleIcon = (name: string) => {
		if (name) {
			name = name.replace(/\s*/g, "");
			if (customIcons[name]) {
				return React.createElement(customIcons[name]);
			} else {
				return <SvgIcon width={20} height={20} iconClass={name} />;
			}
		} else {
			return <></>;
		}
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
	const handleMenu = (route: any) =>
		route.map((routeItem: any) => {
			if (routeItem.children) {
				if (routeItem.children.length > 1) {
					return (
						<Menu.SubMenu
							title={t(`route.${routeItem?.meta?.title}`)}
							key={routeItem.path}
							icon={handleIcon(routeItem.meta.icon)}
						>
							{handleMenu(routeItem.children)}
						</Menu.SubMenu>
					);
				} else {
					const childrenItem = routeItem.children[0];
					if (!childrenItem.hidden) {
						return (
							<Menu.Item key={childrenItem.path} icon={handleIcon(childrenItem.meta.icon)}>
								{t(`route.${childrenItem?.meta?.title}`)}
							</Menu.Item>
						);
					} else {
						return <></>;
					}
				}
			} else {
				if (!routeItem.hidden) {
					return (
						<Menu.Item icon={handleIcon(routeItem.meta.icon)} key={routeItem.path}>
							{t(`route.${routeItem?.meta?.title}`)}
						</Menu.Item>
					);
				} else {
					return <></>;
				}
			}
		});

	return (
		<section className="menu">
			<Menu
				mode="inline"
				theme={menuTheme}
				triggerSubMenuAction="click"
				onClick={clickMenu}
				openKeys={openKeys}
				selectedKeys={selectedKeys}
				onOpenChange={onOpenChange}
			>
				{handleMenu(asyncRoutes)}
			</Menu>
		</section>
	);
};

const mapStateToProps = (state: any) => {
	return state.system;
};
const mapDispatchToProps = {
	toggleTags,
	addVisitTag
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeMenu);
