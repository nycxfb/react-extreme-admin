import React, { useRef } from "react";
import { connect } from "react-redux";
import { Row, Col } from "antd";
import { Breadcrumbs, Tags, User, SwitchButton, FullScreen, Setting } from "./components/index";
import Language from "@/components/language";
import "./index.less";

const HomeHeader = (props: any) => {
	const { isShowTag, isShowBreadcrumb } = props;
	const scrollRef = useRef<any>(null);

	const handleScrollBar = (e: React.WheelEvent<HTMLDivElement>) => {
		const distance = -e.deltaY * 40;
		scrollRef.current.scrollLeft = scrollRef.current.scrollLeft + distance;
	};

	return (
		<div className="header-wrapper">
			<Row className="header-A">
				<Col span={19} className={"left-part"}>
					<SwitchButton />
					{isShowBreadcrumb && <Breadcrumbs />}
				</Col>
				<Col span={5} className={"right-part"}>
					<FullScreen />
					<Language />
					<User />
					<Setting />
				</Col>
			</Row>
			{isShowTag && (
				<Row
					ref={scrollRef}
					className="header-B"
					onWheel={e => {
						handleScrollBar(e);
					}}
				>
					<Tags />
				</Row>
			)}
		</div>
	);
};

const mapStatusToProps = (state: any) => {
	return state.system;
};

export default connect(mapStatusToProps, {})(HomeHeader);
