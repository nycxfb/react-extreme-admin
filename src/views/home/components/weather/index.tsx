import React, { useState } from "react";
import { Col, Row } from "antd";
import SvgIcon from "@/components/svgIcon";
import { useMount } from "ahooks";
import { http_weather } from "@/api/external";
import style from "./index.module.less";

const Weather = () => {
	const [weatherInfo, setWeatherInfo] = useState<any>({});
	useMount(async () => {
		await getWeatherInfo();
	});

	const getWeatherInfo = async () => {
		const res = await http_weather("");
		setWeatherInfo(res.data);
	};

	return (
		<div className={style.weather}>
			<Row>
				<Col span={16}>
					<h2>Hello,13952150639!</h2>
					<p>Welcome to Extreme Admin, it's a clean and compact system,wish you enjoy it !</p>
					<div className={"thermometer-info"}>
						{/*<SvgIcon width={15} height={15} iconClass={"thermometer"} />*/}

						{/*<SvgIcon width={15} height={15} iconClass={"humidity"} />*/}
						{/*<span>{weatherInfo.humidity}</span>*/}
						{/*<span>{weatherInfo.reportTime}</span>*/}

						{/*<span>{weatherInfo.windDirection}</span>*/}
						{/*<span>{weatherInfo.windPower}</span>*/}
						{/*<span>{weatherInfo.address}</span>*/}
						<div>
							<span className={"thermometer"}>{weatherInfo?.temp}</span>
							<span>{weatherInfo?.weather}</span>
						</div>
						<div>
							<span>{weatherInfo?.windPower}</span>
							<span>{weatherInfo?.windDirection}风</span>
						</div>
						<div>
							<span>{weatherInfo?.humidity}</span>
							<span>空气湿度</span>
						</div>
					</div>
				</Col>
				<Col span={8} className={"icon"}>
					<SvgIcon width={200} height={120} iconClass={"weather"} />
				</Col>
			</Row>
		</div>
	);
};

export default Weather;
