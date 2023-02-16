import React from "react";
import { Breadcrumbs, Tags, UserInfo, SwitchButton } from "./components/index";
import { Row, Col } from "antd";
import "./index.less";

const HomeHeader = () => {
	return (
		<div className="header-wrapper">
			<Row className="header-A">
				<Col span={1}>
					<SwitchButton />
				</Col>
				<Col span={16}>
					<Breadcrumbs />
				</Col>
				<Col span={6}>
					<UserInfo />
				</Col>
			</Row>
			<Row className="header-B">
				<Tags />
			</Row>
		</div>
	);
};

export default HomeHeader;
