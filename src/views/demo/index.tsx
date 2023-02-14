import React from "react";
import { Button, Card } from "antd";

import { http_demo } from "@/api/demo";

const Demo = () => {
	const test = async () => {
		const res = await http_demo({});
		console.log(res, "测试");
	};
	return (
		<Card>
			<Button type={"primary"} onClick={test}>
				接口测试
			</Button>
		</Card>
	);
};

export default Demo;
