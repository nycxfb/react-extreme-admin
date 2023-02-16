import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { connect } from "react-redux";
import { Layout, theme } from "antd";
import { useLocation } from "react-router-dom";
import { HomeMenu, HomeHeader } from "./components/index";
import SvgIcon from "@/components/svgIcon";
import { toggleSideMenu } from "@/redux/module/menu/action";
import { toggleBreadcrumb, addVisitTag, toggleVisitTag } from "@/redux/module/header/action";
import asyncRoutes from "@/router/module/asyncRoutes";
import { generateBreadcrumb, generateTagName } from "@/router/util/handleRoute";
import "./index.less";

const { Sider, Content } = Layout;

const HomeLayout: React.FC = (props: any) => {
	const { pathname } = useLocation();
	const { isCollapse, toggleBreadcrumb, addVisitTag, toggleVisitTag } = props;
	const breadcrumb = generateBreadcrumb(asyncRoutes, pathname);
	const addTag = generateTagName(asyncRoutes, pathname);
	useEffect(() => {
		toggleBreadcrumb(breadcrumb);
		addVisitTag(addTag);
		toggleVisitTag(pathname);
	}, [pathname]);

	return (
		<Layout>
			<Sider trigger={null} collapsible collapsed={isCollapse}>
				<div className="side">
					<SvgIcon iconClass="logo" />
					{isCollapse ? <></> : <span className="title">ExtremeAdmin</span>}
				</div>
				<HomeMenu />
			</Sider>
			<Layout>
				<HomeHeader />
				<Content>
					<Outlet />
				</Content>
			</Layout>
		</Layout>
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
