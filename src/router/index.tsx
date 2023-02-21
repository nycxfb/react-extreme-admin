import React, { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import asyncRoutes from "@/router/module/asyncRoutes";
import constantRoutes from "@/router/module/constantRoutes";

const allRouter = constantRoutes.concat(asyncRoutes);

export default () => {
	// @ts-ignore
	return useRoutes(allRouter);
};
