import React, { useEffect } from "react";
import { Card } from "antd";
import "./index.module.less";

const Workbench = () => {
	return (
		<div className={"workbench-container"}>
			<Card title={"早安，用户"}></Card>
			<Card title={"开发进度"}>
				<div>系统矿建</div>
				<div>组件封装</div>

				<div>打包构建</div>
				<div>工具方法</div>
			</Card>

			<Card title={"版本前瞻"}></Card>
		</div>
	);
};

export default Workbench;
