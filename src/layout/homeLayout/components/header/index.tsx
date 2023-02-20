import React from "react";
import { Row, Col } from "antd";
import { Breadcrumbs, Tags, User, SwitchButton, FullScreen, Setting } from "./components/index";
import Language from "@/components/language";
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
					<Language />
					<User />
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
