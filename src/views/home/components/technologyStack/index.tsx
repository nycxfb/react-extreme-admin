import React, { useState } from "react";
import SvgIcon from "@/components/svgIcon";
import { Button, Modal } from "antd";
import style from "./index.module.less";

const technologyArray = [
	{
		id: 1,
		icon: "react",
		name: "React",
		url: "https://zh-hans.reactjs.org/"
	},
	{
		id: 2,
		icon: "antd",
		name: "antd",
		url: "https://ant.design/components/overview-cn/"
	},
	{
		id: 3,
		icon: "redux",
		name: "redux",
		url: "https://cn.redux.js.org/"
	},
	{
		id: 4,
		icon: "webpack",
		name: "webpack",
		url: "https://webpack.docschina.org"
	}
];

const TechnologyStack = () => {
	const [visible, setVisible] = useState<boolean>(false);
	const [url, setUrl] = useState<string>("");
	const showDialog = (url: string) => {
		setUrl(url);
		setVisible(true);
	};
	const toOtherPage = () => {
		const newTab: Window | any = window.open("about:blank");
		newTab.location.href = url;
		setVisible(false);
	};

	return (
		<>
			<div className={style["tech-card"]}>
				{technologyArray.map(item => (
					<div
						key={item.id}
						onClick={() => {
							showDialog(item.url);
						}}
					>
						<SvgIcon width={35} height={35} iconClass={item.icon} />
						<span>{item.name}</span>
					</div>
				))}
			</div>

			<Modal
				title="温馨提示"
				open={visible}
				onCancel={() => {
					setVisible(false);
				}}
				footer={[
					<Button
						key="back"
						size={"small"}
						onClick={() => {
							setVisible(false);
						}}
					>
						取消
					</Button>,
					<Button key="submit" size={"small"} type="primary" onClick={toOtherPage}>
						确定
					</Button>
				]}
			>
				<p style={{ padding: "10px 0" }}>是否离开本系统，前往 {url}</p>
			</Modal>
		</>
	);
};

export default TechnologyStack;
