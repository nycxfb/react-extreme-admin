import React, { useRef } from "react";
import { Row, Col } from "antd";
import { Breadcrumbs, Tags, User, SwitchButton, FullScreen, Setting } from "./components/index";
import Language from "@/components/language";
import "./index.less";

const HomeHeader = () => {
	const scrollRef = useRef<any>(null);

	const handleScrollBar = (e: React.WheelEvent<HTMLDivElement>) => {
		const distance = -e.deltaY * 40;
		scrollRef.current.scrollLeft = scrollRef.current.scrollLeft + distance;
	};

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
			<Row
				ref={scrollRef}
				className="header-B"
				onWheel={e => {
					handleScrollBar(e);
				}}
			>
				<Tags />
			</Row>
		</div>
	);
};

export default HomeHeader;
