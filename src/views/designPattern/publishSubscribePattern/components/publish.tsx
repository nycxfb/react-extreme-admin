import React from "react";
import { Button, Card } from "antd";
import Event from "@/utils/event";

const Publish = () => {
	const publishMessage = () => {
		Event.trigger("message", "你是清风上的明月，枫林间的鸟雀!");
	};
	return (
		<Card title={"发布者"} style={{ width: 500, height: 400 }}>
			<Button type={"primary"} onClick={publishMessage}>
				发布消息
			</Button>
		</Card>
	);
};

export default Publish;
