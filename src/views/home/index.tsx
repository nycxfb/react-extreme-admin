import React from "react";
import { Card } from "antd";
import PartA from "./components/partA";
import PartB from "./components/partB";
import PartC from "./components/partC";

import "./index.module.less";

const Home: React.FC = () => {
	return (
		<div className={"home-container"}>
			<div className={"part-A"}>
				<PartA />
			</div>

			<Card className={"part-B"}>
				<PartB />
			</Card>

			<div className={"part-C"}>
				<PartC />
			</div>
		</div>
	);
};

export default Home;
