import React from "react";
import { useLocation, Navigate } from "react-router-dom";
import asyncRoutes from "@/router/module/asyncRoutes";
import { generateRoutePath } from "@/router/util/handleRoute";

const AuthRoute = (props: { children: JSX.Element }) => {
	const { pathname } = useLocation();
	const routePath = generateRoutePath(asyncRoutes);
	const token = localStorage.getItem("token");

	//路由白名单
	const whiteList = ["/login", "/test"];

	if (token) {
		if (routePath.includes(pathname)) {
			return props.children;
		} else if (["/", "/login"].includes(pathname)) {
			return <Navigate to="/home/index" />;
		} else {
			if (pathname == "/error/404") {
				return props.children;
			} else {
				return <Navigate to="/error/404" />;
			}
		}
	} else {
		if (whiteList.includes(pathname)) {
			return props.children;
		} else {
			return <Navigate to={"/login"} replace />;
		}
	}
};

export default AuthRoute;
