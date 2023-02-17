import React, { useEffect, useRef } from "react";
import { Card } from "antd";
import SvgIcon from "@/components/svgIcon";
import * as echarts from "echarts";
import "./index.less";

const cardList = [
	{
		iconName: "visitor",
		title: "新用户",
		number: Math.ceil(Math.random() * 1000),
		key: 1
	},
	{
		iconName: "message",
		title: "消息",
		number: Math.ceil(Math.random() * 1000),
		key: 2
	},

	{
		iconName: "today",
		title: "今日",
		number: Math.ceil(Math.random() * 1000),
		key: 3
	},
	{
		iconName: "visitor",
		title: "全部",
		number: Math.ceil(Math.random() * 1000),
		key: 4
	}
];

const option1 = {
	title: {
		text: "Stacked Area Chart"
	},
	tooltip: {
		trigger: "axis",
		axisPointer: {
			type: "cross",
			label: {
				backgroundColor: "#6a7985"
			}
		}
	},
	legend: {
		data: ["Email", "Union Ads", "Video Ads", "Direct", "Search Engine"]
	},
	toolbox: {
		feature: {
			saveAsImage: {}
		}
	},
	grid: {
		left: "3%",
		right: "4%",
		bottom: "3%",
		containLabel: true
	},
	xAxis: [
		{
			type: "category",
			boundaryGap: false,
			data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
		}
	],
	yAxis: [
		{
			type: "value"
		}
	],
	series: [
		{
			name: "Email",
			type: "line",
			stack: "Total",
			areaStyle: {},
			emphasis: {
				focus: "series"
			},
			data: [120, 132, 101, 134, 90, 230, 210]
		},
		{
			name: "Union Ads",
			type: "line",
			stack: "Total",
			areaStyle: {},
			emphasis: {
				focus: "series"
			},
			data: [220, 182, 191, 234, 290, 330, 310]
		},
		{
			name: "Video Ads",
			type: "line",
			stack: "Total",
			areaStyle: {},
			emphasis: {
				focus: "series"
			},
			data: [150, 232, 201, 154, 190, 330, 410]
		},
		{
			name: "Direct",
			type: "line",
			stack: "Total",
			areaStyle: {},
			emphasis: {
				focus: "series"
			},
			data: [320, 332, 301, 334, 390, 330, 320]
		},
		{
			name: "Search Engine",
			type: "line",
			stack: "Total",
			label: {
				show: true,
				position: "top"
			},
			areaStyle: {},
			emphasis: {
				focus: "series"
			},
			data: [820, 932, 901, 934, 1290, 1330, 1320]
		}
	]
};

const option2 = {
	tooltip: {
		trigger: "item"
	},
	legend: {
		top: "5%",
		left: "center"
	},
	series: [
		{
			name: "Access From",
			type: "pie",
			radius: ["40%", "70%"],
			avoidLabelOverlap: false,
			itemStyle: {
				borderRadius: 10,
				borderColor: "#fff",
				borderWidth: 2
			},
			label: {
				show: false,
				position: "center"
			},
			emphasis: {
				label: {
					show: true,
					fontSize: 40,
					fontWeight: "bold"
				}
			},
			labelLine: {
				show: false
			},
			data: [
				{ value: 1048, name: "Search Engine" },
				{ value: 735, name: "Direct" },
				{ value: 580, name: "Email" },
				{ value: 484, name: "Union Ads" },
				{ value: 300, name: "Video Ads" }
			]
		}
	]
};

const option3 = {
	title: {
		text: "Basic Radar Chart"
	},
	legend: {
		data: ["Allocated Budget", "Actual Spending"]
	},
	radar: {
		// shape: 'circle',
		indicator: [
			{ name: "Sales", max: 6500 },
			{ name: "Administration", max: 16000 },
			{ name: "Information Technology", max: 30000 },
			{ name: "Customer Support", max: 38000 },
			{ name: "Development", max: 52000 },
			{ name: "Marketing", max: 25000 }
		]
	},
	series: [
		{
			name: "Budget vs spending",
			type: "radar",
			data: [
				{
					value: [4200, 3000, 20000, 35000, 50000, 18000],
					name: "Allocated Budget"
				},
				{
					value: [5000, 14000, 28000, 26000, 42000, 21000],
					name: "Actual Spending"
				}
			]
		}
	]
};
const Home: React.FC = () => {
	useEffect(() => {
		initEcharts();
	}, []);

	const initEcharts = () => {
		const tendencyChart = echarts.init(document.getElementById("tendency") as HTMLElement);
		const percentChart = echarts.init(document.getElementById("percent") as HTMLElement);
		const radarChart = echarts.init(document.getElementById("radar") as HTMLElement);
		const columnChart = echarts.init(document.getElementById("column") as HTMLElement);
		tendencyChart.setOption(option1);
		percentChart.setOption(option2);
		radarChart.setOption(option3);
		// columnChart.setOption(option1);
	};
	return (
		<>
			<div className="home-container">
				<div className={"card-container"}>
					{cardList.map((cardItem: any) => (
						<Card className={"card-item"} key={cardItem.key}>
							<div className="left-part">
								<SvgIcon iconClass={cardItem.iconName} />
							</div>
							<div className="right-part">
								<span>{cardItem.title}</span>
								<span>{cardItem.number}</span>
							</div>
						</Card>
					))}
				</div>

				<Card id="tendency" className="echarts-container" style={{ width: "90%", height: "400px" }}></Card>
				<div className="chart-container">
					<Card id="percent" style={{ width: "400px", height: "100px" }}></Card>
					<Card id="radar" style={{ width: "400px", height: "100px" }}></Card>
					<Card id="column"></Card>
				</div>
			</div>
		</>
	);
};

export default Home;
