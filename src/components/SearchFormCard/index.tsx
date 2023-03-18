import React from "react";
import { Card } from "antd";
import "./index.module.less";

interface Props {
	children: React.ReactNode;
}

const BaseFormCard = (props: Props) => {
	const { children } = props;

	return <Card>{children}</Card>;
};

export default BaseFormCard;
