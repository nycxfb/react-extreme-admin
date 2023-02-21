import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { Layout, theme, Drawer, Divider, Form, Switch } from "antd";
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
	const { isCollapse, toggleBreadcrumb, addVisitTag, toggleVisitTag, isShowLogo } = props;

	//根据路径变化处理面包屑、标签等配置
	useEffect(() => {
		const breadcrumb = generateBreadcrumb(asyncRoutes, pathname);
		const addTag = generateTagName(asyncRoutes, pathname);
		toggleBreadcrumb(breadcrumb);
		addVisitTag(addTag);
		toggleVisitTag(pathname);
	}, [pathname]);

	return (
		<>
			<Layout>
				<Sider trigger={null} collapsible collapsed={isCollapse}>
					{isShowLogo ? <Logo /> : <></>}
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
	return { ...state.menu, ...state.system };
};

const mapDispatchToProps = {
	toggleSideMenu,
	toggleBreadcrumb,
	addVisitTag,
	toggleVisitTag
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeLayout);
