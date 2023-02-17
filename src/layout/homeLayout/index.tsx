import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { connect } from "react-redux";
import { Layout, theme, Drawer, Divider, Form, Switch } from "antd";
import { useLocation } from "react-router-dom";
import { HomeMenu, HomeHeader, Logo, SettingDrawer } from "./components";
import SvgIcon from "@/components/svgIcon";
import { toggleSideMenu } from "@/redux/module/menu/action";
import { toggleBreadcrumb, addVisitTag, toggleVisitTag } from "@/redux/module/header/action";
import asyncRoutes from "@/router/module/asyncRoutes";
import { generateBreadcrumb, generateTagName } from "@/router/util/handleRoute";
import "./index.less";

const { Sider, Content } = Layout;

const HomeLayout: React.FC = (props: any) => {
	const { pathname } = useLocation();
	const { isCollapse, drawerVisible, toggleBreadcrumb, addVisitTag, toggleVisitTag } = props;
	const breadcrumb = generateBreadcrumb(asyncRoutes, pathname);
	const addTag = generateTagName(asyncRoutes, pathname);
	useEffect(() => {
		toggleBreadcrumb(breadcrumb);
		addVisitTag(addTag);
		toggleVisitTag(pathname);
	}, [pathname]);
	return (
		<>
			<Layout>
				<Sider trigger={null} collapsible collapsed={isCollapse}>
					<Logo />
					<HomeMenu />
				</Sider>
				<Layout>
					<HomeHeader />
					<Content>
						<Outlet />
					</Content>
				</Layout>
			</Layout>
			<SettingDrawer />
		</>
	);
};

const mapStateToProps = (state: any) => {
	return state.menu;
};

const mapDispatchToProps = {
	toggleSideMenu,
	toggleBreadcrumb,
	addVisitTag,
	toggleVisitTag
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeLayout);
