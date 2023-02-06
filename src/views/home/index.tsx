import React, { useEffect } from "react";
import * as echarts from "echarts";
import "./index.less";

const Home: React.FC = () => {
	useEffect(() => {
		initEcharts();
	}, []);

	const initEcharts = () => {
		var myChart = echarts.init(document.getElementById("main") as HTMLElement);
		myChart.setOption({
			title: {
				text: "ECharts 入门示例"
			},
			tooltip: {},
			xAxis: {
				data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
			},
			yAxis: {},
			series: [
				{
					name: "销量",
					type: "bar",
					data: [5, 20, 36, 10, 10, 20]
				}
			]
		});
	};
	return <div id="main"></div>;
};

export default Home;
