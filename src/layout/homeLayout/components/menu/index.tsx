import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { SettingOutlined } from "@ant-design/icons";
import asyncRoutes from "@/router/module/asyncRoutes";
import { toggleTags, addVisitTag } from "@/redux/module/header/action";
import "./index.less";

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

const menuArr_: any = [];
const subMenuArr: any = [];

const HomeMenu: React.FC = () => {
	const navigate = useNavigate();
	const [menuArr, setMenuArr] = useState([]);
	const [openKeys, setOpenKeys] = useState([""]);
	const [rootSubmenuKeys, setRootSubmenuKeys] = useState<string[]>([]);
	const childrenArr: any = [];
	const { pathname } = useLocation();
	const [selectedKeys, setSelectKeys] = useState<string[]>([pathname]);

	useEffect(() => {
		setSelectKeys([pathname]);
		const pathArr = pathname.split("/");
		const openKeys = `/${pathArr[1]}`;
		setOpenKeys([openKeys]);
	}, [pathname]);
	useEffect(() => {
		menuArr_.length = 0;
		handleRoutes(asyncRoutes, "");
	}, []);

	const clickMenu = (props: any) => {
		const arr = props.key.split("/");
		arr.shift();
		navigate(props.key);
		childrenArr.length = 0;
		menuArr_.forEach((item: any) => {
			if (item.children) {
				item.children.forEach((item_: any) => {
					childrenArr.push(item_);
				});
			}
		});
	};

	//将路由处理成 ant-menu 需要的数据格式
	const handleRoutes = (menuArr: any, path: string) => {
		menuArr.forEach((menuItem: any) => {
			if (path && !menuItem?.hidden) {
				menuArr_.forEach((item: any) => {
					if (item.key == path) {
						item.children.push(getItem(menuItem.meta.title, menuItem.path));
					}
				});
			}

			if (menuItem.children) {
				if (menuItem.children.length > 1) {
					subMenuArr.push(menuItem.path);
					menuArr_.push(getItem(menuItem.meta.title, menuItem.path, <SettingOutlined />, []));
					handleRoutes(menuItem.children, menuItem.path);
				} else {
					if (!menuItem?.hidden) {
						const childrenItem = menuItem.children[0];
						menuArr_.push(getItem(childrenItem.meta.title, childrenItem.path, <SettingOutlined />));
					}
				}
			} else {
			}
		});
		setMenuArr(menuArr_);
		setRootSubmenuKeys(subMenuArr);
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
				items={menuArr}
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
