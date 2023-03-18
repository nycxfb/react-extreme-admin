import React from "react";
import { Card } from "antd";
import SvgIcon from "@/components/svgIcon";
import "./index.module.less";

const cardList = [
	{
		iconName: "visitor",
		title: "新用户",
		number: Math.ceil(Math.random() * 1000),
		key: 1
	},
	{
		iconName: "message",
		title: "消息",
		number: Math.ceil(Math.random() * 1000),
		key: 2
	},

	{
		iconName: "today",
		title: "今日",
		number: Math.ceil(Math.random() * 1000),
		key: 3
	},
	{
		iconName: "visitor",
		title: "全部",
		number: Math.ceil(Math.random() * 1000),
		key: 4
	}
];

const PartA = () => {
	return (
		<>
			{cardList.map(cardItem => (
				<div className={"card-item"} key={cardItem.key}>
					<SvgIcon width={80} height={80} iconClass={cardItem.iconName} />
					<div className={"right-part"}>
						<span className={"title"}>{cardItem.title}</span>
						<span className={"number"}>{cardItem.number}</span>
					</div>
				</div>
			))}
		</>
	);
};

export default PartA;
