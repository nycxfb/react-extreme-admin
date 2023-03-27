import React from "react";
import SvgIcon from "@/components/svgIcon";
import { Col, Row, Switch } from "antd";
import style from "./index.module.less";

const settingArray = [
	{
		id: 1,
		icon: "tag",
		name: "标签"
	},
	{
		id: 2,
		icon: "logo-white",
		name: "Logo"
	},
	{
		id: 3,
		icon: "footer",
		name: "页脚"
	},
	{
		id: 4,
		icon: "breadcrumb",
		name: "面包屑"
	}
];

const PageSetting = () => {
	return (
		<div className={style["card-wrapper"]}>
			{settingArray.map((item: any) => (
				<div key={item.id} className={"setting-item"}>
					<Row>
						<Col span={12} className={"left-part"}>
							<SvgIcon width={26} height={26} iconClass={item.icon} />
							<span>{item.name}</span>
						</Col>
						<Col span={12} className={"right-part"}>
							<Switch />
						</Col>
					</Row>
				</div>
			))}
		</div>
	);
};

export default PageSetting;
