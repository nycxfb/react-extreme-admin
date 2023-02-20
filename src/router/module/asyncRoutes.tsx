import React, { Component } from "react";
import { baseRouter } from "@/router/interface";
import { lazyLoad } from "@/router/util/lazyLoad";
import HomeLayout from "@/layout/homeLayout";

const asyncRoutes: baseRouter[] = [
	{
		path: "/home",
		element: <HomeLayout />,
		meta: {
			title: "index"
		},
		children: [
			{
				path: "/home/index",
				element: lazyLoad(() => import("@/views/home")),
				meta: {
					title: "index",
					icon: ""
				}
			}
		]
	},
	{
		path: "/workbench",
		element: <HomeLayout />,
		meta: {
			title: "workbench"
		},
		children: [
			{
				path: "/workbench/index",
				element: lazyLoad(() => import("@/views/workbench")),
				meta: {
					title: "workbench"
				}
			}
		]
	},
	{
		path: "/error",
		element: <HomeLayout />,
		hidden: true,
		meta: {
			title: "测试"
		},
		children: [
			{
				path: "/error/404",
				element: lazyLoad(() => import("@/views/errorPage")),
				hidden: true,
				meta: {
					title: "错误页面"
				}
			}
		]
	},
	{
		path: "/systemManagement",
		element: <HomeLayout />,
		meta: {
			title: "systemManagement"
		},
		children: [
			{
				path: "/systemManagement/user",
				element: lazyLoad(() => import("@/views/systemManagement/user")),
				meta: {
					title: "userList"
				}
			},
			{
				path: "/systemManagement/user/detail",
				element: lazyLoad(() => import("@/views/systemManagement/user/detail")),
				hidden: true,
				meta: {
					title: "detail"
				}
			},
			{
				path: "/systemManagement/role",
				element: lazyLoad(() => import("@/views/systemManagement/role")),
				meta: {
					title: "roleList"
				}
			}
		]
	},
	{
		path: "/dynamicComponent",
		element: <HomeLayout />,
		meta: {
			title: "dynamicComponents"
		},
		children: [
			{
				path: "/dynamicComponent/dynamicForm",
				element: lazyLoad(() => import("@/views/dynamicComponent/dynamicForm")),
				meta: {
					title: "dynamicForm"
				}
			},
			{
				path: "/dynamicComponent/dynamicTable",
				element: lazyLoad(() => import("@/views/systemManagement/role")),
				meta: {
					title: "dynamicTable"
				}
			}
		]
	},
	{
		path: "/largeScreenDisplay",
		element: <HomeLayout />,
		meta: {
			title: "largeScreenDisplay"
		},
		children: [
			{
				path: "/largeScreenDisplay/demo1",
				element: lazyLoad(() => import("@/views/demo")),
				meta: {
					title: "largeScreenDisplay"
				}
			}
		]
	},
	{
		path: "/customComponent",
		element: <HomeLayout />,
		meta: {
			title: "customComponents"
		},
		children: [
			{
				path: "/customComponent/demo1",
				element: lazyLoad(() => import("@/views/demo")),
				meta: {
					title: "customComponents"
				}
			}
		]
	},
	{
		path: "/microFront",
		element: <HomeLayout />,
		meta: {
			title: "microFront"
		},
		children: [
			{
				path: "/microFront/iframe",
				element: lazyLoad(() => import("@/views/microFront/iframe")),
				meta: {
					title: "iframe"
				}
			},
			{
				path: "/microFront/qiankun",
				element: lazyLoad(() => import("@/views/microFront/qiankun")),
				meta: {
					title: "qiankun"
				}
			}
		]
	},
	{
		path: "/designMode",
		element: <HomeLayout />,
		meta: {
			title: "designMode"
		},
		children: [
			{
				path: "/designMode/publishSubscribePattern",
				element: lazyLoad(() => import("@/views/designPattern/publishSubscribePattern")),
				meta: {
					title: "publishSubscribePattern"
				}
			},
			{
				path: "/designMode/demo1",
				element: lazyLoad(() => import("@/views/demo")),
				meta: {
					title: "designMode"
				}
			}
		]
	},
	{
		path: "/editor",
		element: <HomeLayout />,
		meta: {
			title: "editor"
		},
		children: [
			{
				path: "/editor/demo1",
				element: lazyLoad(() => import("@/views/editor")),
				meta: {
					title: "editor"
				}
			}
		]
	},
	{
		path: "/ganttChart",
		element: <HomeLayout />,
		meta: {
			title: "ganttChart"
		},
		children: [
			{
				path: "/ganttChart/demo1",
				element: lazyLoad(() => import("@/views/demo")),
				meta: {
					title: "ganttChart"
				}
			}
		]
	},
	{
		path: "/storageScheme",
		element: <HomeLayout />,
		meta: {
			title: "storageScheme"
		},
		children: [
			{
				path: "/storageScheme/demo1",
				element: lazyLoad(() => import("@/views/demo")),
				meta: {
					title: "storageScheme"
				}
			}
		]
	},
	{
		path: "/pageScheme",
		element: <HomeLayout />,
		meta: {
			title: "pageScheme"
		},
		children: [
			{
				path: "/pageScheme/strongRelationship",
				element: lazyLoad(() => import("@/views/pageScheme/strongRelationship")),
				meta: {
					title: "strongRelationship"
				}
			},
			{
				path: "/pageScheme/weakRelationship",
				element: lazyLoad(() => import("@/views/pageScheme/weakRelationship")),
				meta: {
					title: "weakRelationship"
				}
			}
		]
	},
	{
		path: "/instantMessage",
		element: <HomeLayout />,
		meta: {
			title: "instantMessage"
		},
		children: [
			{
				path: "/instantMessage/demo1",
				element: lazyLoad(() => import("@/views/demo")),
				meta: {
					title: "instantMessage"
				}
			}
		]
	},
	{
		path: "/demo",
		element: <HomeLayout />,
		meta: {
			title: "test"
		},
		children: [
			{
				path: "/demo/demo1",
				element: lazyLoad(() => import("@/views/demo")),
				meta: {
					title: "test"
				}
			}
		]
	}
];

export default asyncRoutes;
