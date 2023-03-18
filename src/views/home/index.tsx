import React from "react";
import { Card } from "antd";
import PartA from "./components/partA";
import PartB from "./components/partB";
import PartC from "./components/partC";
import { Spin } from "antd";

import "./index.module.less";

const Home: React.FC = () => {
	return (
		<div className={"home-container"}>
			<div className={"part-A"}>
				<PartA />
			</div>

			<PartB />

			<div className={"part-C"}>
				<PartC />
			</div>
		</div>
	);
};

export default Home;
