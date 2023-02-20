import React from "react";
import Subscribe from "./components/subscribe";
import Publish from "./components/publish";
import "./index.less";

const PublishSubscribePattern = () => {
	return (
		<div className={"design-container"}>
			<Publish />
			<Subscribe />
		</div>
	);
};

export default PublishSubscribePattern;
