import React, { Component } from "react";
import { useLocation, Navigate, useNavigate, useMatch } from "react-router-dom";

const AuthRoute = (props: { children: JSX.Element }) => {
	const token = localStorage.getItem("token");
	const navigate = useNavigate();
	const { pathname } = useLocation();

	// if (token && pathname == "/demo/demo1") return <Navigate to="/login" replace />;

	return props.children;
};

export default AuthRoute;
