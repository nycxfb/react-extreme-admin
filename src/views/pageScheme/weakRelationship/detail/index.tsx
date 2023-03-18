import React from "react";
import PartA from "./partA";
import PartB from "./partB";
import PartC from "./partC";
import { Button, Card } from "antd";
import "./index.module.less";

const Detail = () => {
	return (
		<div className={"weak-wrapper"}>
			<PartA />
			<Card
				title={"任务详情"}
				extra={
					<>
						<Button>关闭任务</Button>
						<Button>转他人处理</Button>
						<Button>处理意见</Button>
					</>
				}
			>
				<div className={"test"}>
					<PartB />
					<PartC />
				</div>
			</Card>
		</div>
	);
};

export default Detail;
