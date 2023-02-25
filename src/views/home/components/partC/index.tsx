import React, { useEffect } from "react";
import * as echarts from "echarts";
import { Card } from "antd";

const option1 = {
	xAxis: {
		type: "category",
		data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
	},
	yAxis: {
		type: "value"
	},
	series: [
		{
			data: [120, 200, 150, 80, 70, 110, 130],
			type: "bar",
			showBackground: true,
			backgroundStyle: {
				color: "rgba(180, 180, 180, 0.2)"
			}
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
const PartC = () => {
	useEffect(() => {
		initEcharts();
	});
	const initEcharts = () => {
		const percentChart = echarts.init(document.getElementById("percent") as HTMLDivElement);
		const radarChart = echarts.init(document.getElementById("radar") as HTMLElement);
		const columnChart = echarts.init(document.getElementById("column") as HTMLElement);
		percentChart.setOption(option2);
		radarChart.setOption(option3);
		columnChart.setOption(option1);
	};
	return (
		<>
			<Card id="percent" style={{ width: "400px", height: "400px" }} />
			<Card id="radar" style={{ width: "400px", height: "400px" }} />
			<Card id="column" style={{ width: "400px", height: "400px" }} />
		</>
	);
};

export default PartC;
