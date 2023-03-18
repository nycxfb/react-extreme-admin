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
					icon: "BankOutlined"
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
					title: "workbench",
					icon: "RobotOutlined"
				}
			}
		]
	},
	{
		path: "/systemManagement",
		element: <HomeLayout />,
		meta: {
			title: "systemManagement",
			icon: "SettingOutlined"
		},
		children: [
			{
				path: "/systemManagement/user",
				element: lazyLoad(() => import("@/views/systemManagement/user")),
				meta: {
					title: "userList",
					icon: "UsergroupDeleteOutlined"
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
					title: "roleList",
					icon: "UserOutlined"
				}
			}
		]
	},
	{
		path: "/dynamicComponent",
		element: <HomeLayout />,
		meta: {
			title: "dynamicComponents",
			icon: "BlockOutlined"
		},
		children: [
			{
				path: "/dynamicComponent/dynamicForm",
				element: lazyLoad(() => import("@/views/dynamicComponent/dynamicForm")),
				meta: {
					title: "dynamicForm",
					icon: "ProjectOutlined"
				}
			},
			{
				path: "/dynamicComponent/dynamicTable",
				element: lazyLoad(() => import("@/views/systemManagement/role")),
				meta: {
					title: "dynamicTable",
					icon: "TableOutlined"
				}
			}
		]
	},

	{
		path: "/pageScheme",
		element: <HomeLayout />,
		meta: {
			title: "pageScheme",
			icon: "ProfileOutlined"
		},
		children: [
			{
				path: "/pageScheme/strongRelationship",
				element: lazyLoad(() => import("@/views/pageScheme/strongRelationship")),
				meta: {
					title: "strongRelationship",
					icon: "RiseOutlined"
				}
			},
			{
				path: "/pageScheme/weakRelationship",
				element: lazyLoad(() => import("@/views/pageScheme/weakRelationship")),
				meta: {
					title: "weakRelationship",
					icon: "FallOutlined"
				}
			},
			{
				path: "/pageScheme/weakRelationship/detail",
				element: lazyLoad(() => import("@/views/pageScheme/weakRelationship/detail")),
				hidden: true,
				meta: {
					title: "weakRelationshipDetail"
				}
			}
		]
	},
	{
		path: "/designPattern",
		element: <HomeLayout />,
		meta: {
			title: "designPattern",
			icon: "ClusterOutlined"
		},
		children: [
			{
				path: "/designPattern/publishSubscribePattern",
				element: lazyLoad(() => import("@/views/designPattern/publishSubscribePattern")),
				meta: {
					title: "publishSubscribePattern",
					icon: "NotificationOutlined"
				}
			},
			{
				path: "/designPattern/strategyPattern",
				element: lazyLoad(() => import("@/views/designPattern/strategyPattern")),
				meta: {
					title: "strategyPattern",
					icon: "PartitionOutlined"
				}
			}
		]
	},
	{
		path: "/multiMenu",
		element: <HomeLayout />,
		meta: {
			title: "multiMenu",
			icon: "UnorderedListOutlined"
		},
		children: [
			{
				path: "/multiMenu/secondLevel",
				meta: {
					title: "secondLevel"
				},
				children: [
					{
						path: "/multiMenu/secondLevel/thirdLevel",
						element: lazyLoad(() => import("@/views/demo")),
						meta: {
							title: "instantMessage"
						}
					},
					{
						path: "/multiMenu/secondLevel/thirdLevel3",
						element: lazyLoad(() => import("@/views/demo")),
						meta: {
							title: "instantMessage"
						}
					}
				]
			},
			{
				path: "/multiMenu/secondLevel1",
				element: lazyLoad(() => import("@/views/demo")),
				meta: {
					title: "instantMessage"
				}
			}
		]
	},

	{
		path: "/microFront",
		element: <HomeLayout />,
		meta: {
			title: "microFront",
			icon: "PicRightOutlined"
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
			},
			{
				path: "/microFront/microApp",
				element: lazyLoad(() => import("@/views/microFront/microApp")),
				meta: {
					title: "microApp"
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
					title: "largeScreenDisplay",
					icon: "FundOutlined"
				}
			}
		]
	},
	{
		path: "/map",
		element: <HomeLayout />,
		meta: {
			title: "map"
		},
		children: [
			{
				path: "/map/index",
				element: lazyLoad(() => import("@/views/map")),
				meta: {
					title: "map",
					icon: "DribbbleOutlined"
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
					title: "editor",
					icon: "FormOutlined"
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
					title: "instantMessage",
					icon: "CommentOutlined"
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
		path: "/demo",
		element: <HomeLayout />,
		meta: {
			title: "test"
		},
		children: [
			{
				path: "/demo/demo1",
				element: lazyLoad(() => import(/* webpackChunkName: "user" */ "@/views/demo")),
				meta: {
					title: "test"
				}
			}
		]
	}
];

export default asyncRoutes;
