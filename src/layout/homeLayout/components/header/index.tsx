import React from "react";
import { Breadcrumbs, Tags, UserInfo, SwitchButton, FullScreen, LanguageConversion, Setting } from "./components/index";
import { Row, Col } from "antd";
import "./index.less";

const HomeHeader = () => {
	return (
		<div className="header-wrapper">
			<Row className="header-A">
				<Col span={18} className={"left-part"}>
					<SwitchButton />
					<Breadcrumbs />
				</Col>
				<Col span={6} className={"right-part"}>
					<FullScreen />
					<LanguageConversion />
					<UserInfo />
					<Setting />
				</Col>
			</Row>
			<Row className="header-B">
				<Tags />
			</Row>
		</div>
	);
};

export default HomeHeader;
