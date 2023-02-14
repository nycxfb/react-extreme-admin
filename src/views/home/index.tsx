import React from "react";
import { Card } from "antd";

const cardList = [{}];

const Home: React.FC = () => {
	return (
		<>
			<div className="base-container">
				<Card>卡片1</Card>

				<Card>卡片2</Card>
			</div>
		</>
	);
};

export default Home;
