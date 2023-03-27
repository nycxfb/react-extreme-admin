import React, { useEffect, useState } from "react";
import { useMount, useUnmount } from "ahooks";
import * as echarts from "echarts";
import { Card, Radio, Tabs } from "antd";
import type { TabsProps } from "antd";
import "./index.module.less";

const items: TabsProps["items"] = [
	{
		key: "1",
		label: `流量趋势`
	},
	{
		key: "2",
		label: `访问量`
	}
];
// const option1 = {
// 	title: {
// 		text: "Stacked Area Chart"
// 	},
// 	tooltip: {
// 		trigger: "axis",
// 		axisPointer: {
// 			type: "cross",
// 			label: {
// 				backgroundColor: "#6a7985"
// 			}
// 		}
// 	},
// 	legend: {
// 		data: ["Email", "Union Ads", "Video Ads", "Direct", "Search Engine"]
// 	},
// 	toolbox: {
// 		feature: {
// 			saveAsImage: {}
// 		}
// 	},
// 	grid: {
// 		left: "3%",
// 		right: "4%",
// 		bottom: "3%",
// 		containLabel: true
// 	},
// 	xAxis: [
// 		{
// 			type: "category",
// 			boundaryGap: false,
// 			data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
// 		}
// 	],
// 	yAxis: [
// 		{
// 			type: "value"
// 		}
// 	],
// 	series: [
// 		{
// 			name: "Email",
// 			type: "line",
// 			stack: "Total",
// 			areaStyle: {},
// 			emphasis: {
// 				focus: "series"
// 			},
// 			data: [120, 132, 101, 134, 90, 230, 210]
// 		},
// 		{
// 			name: "Union Ads",
// 			type: "line",
// 			stack: "Total",
// 			areaStyle: {},
// 			emphasis: {
// 				focus: "series"
// 			},
// 			data: [220, 182, 191, 234, 290, 330, 310]
// 		},
// 		{
// 			name: "Video Ads",
// 			type: "line",
// 			stack: "Total",
// 			areaStyle: {},
// 			emphasis: {
// 				focus: "series"
// 			},
// 			data: [150, 232, 201, 154, 190, 330, 410]
// 		},
// 		{
// 			name: "Direct",
// 			type: "line",
// 			stack: "Total",
// 			areaStyle: {},
// 			emphasis: {
// 				focus: "series"
// 			},
// 			data: [320, 332, 301, 334, 390, 330, 320]
// 		},
// 		{
// 			name: "Search Engine",
// 			type: "line",
// 			stack: "Total",
// 			label: {
// 				show: true,
// 				position: "top"
// 			},
// 			areaStyle: {},
// 			emphasis: {
// 				focus: "series"
// 			},
// 			data: [820, 932, 901, 934, 1290, 1330, 1320]
// 		}
// 	]
// };

const option1 = {
	color: "#a472e2",
	xAxis: {
		type: "category",
		data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
	},
	yAxis: {
		type: "value"
	},
	series: [
		{
			data: [820, 932, 901, 934, 1290, 1330, 1320],
			type: "line",
			smooth: true
		}
	]
};
const Trend = () => {
	const [option, setOption] = useState({});
	useMount(() => {
		initEcharts();
	});

	useUnmount(() => {
		window.removeEventListener("resize", initEcharts);
	});

	const initEcharts = () => {
		const tendencyChart = echarts.init(document.getElementById("tendency") as HTMLDivElement);
		tendencyChart.setOption(option1);
		window.onresize = () => {
			tendencyChart.resize();
		};
	};
	return (
		<Card className={"part-B"}>
			<Tabs defaultActiveKey="1" items={items} />
			<div id={"tendency"} style={{ width: "800px", height: "350px" }} />
		</Card>
	);
};

export default Trend;
