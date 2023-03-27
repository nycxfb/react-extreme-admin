import React from "react";
import { Alert } from "antd";
import style from "./index.module.less";

interface Props extends componentProps {}

const Tips = (props: Props) => {
	const { children } = props;
	return (
		<div className={style.tipsWrapper}>
			<Alert showIcon closable message={234454} />
		</div>
	);
};

export default Tips;
