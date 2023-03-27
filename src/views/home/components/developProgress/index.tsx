import React from "react";
import { Card, Col, Progress, Row } from "antd";
import style from "./index.module.less";

const DevelopProgress = () => {
	return (
		<Card className={style.card}>
			<Row>
				<Col span={12}>
					<div className={"frame"}>框架搭建</div>
					<Progress
						type="circle"
						size={"small"}
						strokeColor={{ "0%": "#dbd3ec", "100%": "#7a3ef1" }}
						percent={70}
					/>
				</Col>

				<Col span={12}>
					<div className={"page"}>页面开发</div>
					<Progress
						type="circle"
						size={"small"}
						percent={55}
						strokeColor={{ "0%": "#f1e8bc", "100%": "#f1c429" }}
					/>
				</Col>
			</Row>
		</Card>
	);
};

export default DevelopProgress;
