import React from "react";
import SubscribeA from "./components/subscribeA";
import SubscribeB from "./components/subscribeB";
import Publish from "./components/publish";
import "./index.less";

const PublishSubscribePattern = () => {
	return (
		<div className={"design-container"}>
			<Publish />
			<div className={"subscribe-wrapper"}>
				<SubscribeA />
				<SubscribeB />
			</div>
		</div>
	);
};

export default PublishSubscribePattern;
