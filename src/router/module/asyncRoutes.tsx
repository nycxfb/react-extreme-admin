import React, { Component } from "react";
import { baseRouter } from "@/router/interface";
import { lazyLoad } from "@/router/util/lazyLoad";
import HomeLayout from "@/layout/homeLayout";

const asyncRoutes: baseRouter[] = [
	{
		path: "/home",
		element: <HomeLayout />,
		meta: {
			title: "主页"
		},
		children: [
			{
				path: "/home/index",
				element: lazyLoad(() => import("@/views/home")),
				meta: {
					title: "首页"
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
			title: "系统管理"
		},
		children: [
			{
				path: "/systemManagement/user",
				element: lazyLoad(() => import("@/views/systemManagement/user")),
				meta: {
					title: "用户列表"
				}
			},
			{
				path: "/systemManagement/role",
				element: lazyLoad(() => import("@/views/systemManagement/role")),
				meta: {
					title: "角色列表"
				}
			}
		]
	},
	{
		path: "/dynamicComponent",
		element: <HomeLayout />,
		meta: {
			title: "动态组件"
		},
		children: [
			{
				path: "/dynamicComponent/dynamicForm",
				element: lazyLoad(() => import("@/views/dynamicComponent/dynamicForm")),
				meta: {
					title: "动态表单"
				}
			},
			{
				path: "/dynamicComponent/dynamicTable",
				element: lazyLoad(() => import("@/views/systemManagement/role")),
				meta: {
					title: "动态表格"
				}
			}
		]
	},
	{
		path: "/largeScreenDisplay",
		element: <HomeLayout />,
		meta: {
			title: "大屏展示"
		},
		children: [
			{
				path: "/largeScreenDisplay/demo1",
				element: lazyLoad(() => import("@/views/demo")),
				meta: {
					title: "大屏展示"
				}
			}
		]
	},
	{
		path: "/customComponent",
		element: <HomeLayout />,
		meta: {
			title: "自定义组件"
		},
		children: [
			{
				path: "/customComponent/demo1",
				element: lazyLoad(() => import("@/views/demo")),
				meta: {
					title: "自定义组件"
				}
			}
		]
	},
	{
		path: "/microFront",
		element: <HomeLayout />,
		meta: {
			title: "微前端"
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
			title: "设计模式"
		},
		children: [
			{
				path: "/designMode/demo1",
				element: lazyLoad(() => import("@/views/demo")),
				meta: {
					title: "设计模式"
				}
			}
		]
	},
	{
		path: "/editor",
		element: <HomeLayout />,
		meta: {
			title: "编辑器"
		},
		children: [
			{
				path: "/editor/demo1",
				element: lazyLoad(() => import("@/views/editor")),
				meta: {
					title: "编辑器"
				}
			}
		]
	},
	{
		path: "/ganttChart",
		element: <HomeLayout />,
		meta: {
			title: "甘特图"
		},
		children: [
			{
				path: "/ganttChart/demo1",
				element: lazyLoad(() => import("@/views/demo")),
				meta: {
					title: "甘特图"
				}
			}
		]
	},
	{
		path: "/storageScheme",
		element: <HomeLayout />,
		meta: {
			title: "存储方案"
		},
		children: [
			{
				path: "/storageScheme/demo1",
				element: lazyLoad(() => import("@/views/demo")),
				meta: {
					title: "存储方案"
				}
			}
		]
	},
	{
		path: "/pageScheme",
		element: <HomeLayout />,
		meta: {
			title: "页面方案"
		},
		children: [
			{
				path: "/pageScheme/strongRelationship",
				element: lazyLoad(() => import("@/views/pageScheme/strongRelationship")),
				meta: {
					title: "强关联"
				}
			},
			{
				path: "/pageScheme/weakRelationship",
				element: lazyLoad(() => import("@/views/pageScheme/weakRelationship")),
				meta: {
					title: "弱关联"
				}
			}
		]
	},
	{
		path: "/instantMessage",
		element: <HomeLayout />,
		meta: {
			title: "即时通信"
		},
		children: [
			{
				path: "/instantMessage/demo1",
				element: lazyLoad(() => import("@/views/demo")),
				meta: {
					title: "即时通信"
				}
			}
		]
	},
	{
		path: "/demo",
		element: <HomeLayout />,
		meta: {
			title: "测试"
		},
		children: [
			{
				path: "/demo/demo1",
				element: lazyLoad(() => import("@/views/demo")),
				meta: {
					title: "接口测试"
				}
			}
		]
	}
];

export default asyncRoutes;
