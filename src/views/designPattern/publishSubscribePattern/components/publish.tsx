import React, { useEffect, useRef } from "react";
import { Button, Card, Col, Input, Row } from "antd";
import Event from "@/utils/event";

const Publish = () => {
	const messageRef = useRef<any>(null);

	useEffect(() => {
		messageRef.current.input.value = "你是清风上的明月，枫林间的鸟雀!";
	}, []);

	const publishMessage = () => {
		const message = messageRef.current.input.value;
		Event.trigger("message", message);
	};

	return (
		<Card title={"发布者"} style={{ width: 500, height: 400 }}>
			<Row gutter={24}>
				<Col span={16}>
					<Input ref={messageRef}></Input>
				</Col>
				<Col span={8}>
					<Button type={"primary"} onClick={publishMessage}>
						发布消息
					</Button>
				</Col>
			</Row>
		</Card>
	);
};

export default Publish;
