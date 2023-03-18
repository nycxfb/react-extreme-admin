import React from "react";
import { Avatar, Card, Col, Row } from "antd";

const PartA = () => {
	return (
		<Card>
			<Row>
				<Col span={2}>
					<Avatar />
				</Col>
				<Col span={20}></Col>
				<Col span={2}>
					<Avatar />
				</Col>
			</Row>
		</Card>
	);
};

export default PartA;
