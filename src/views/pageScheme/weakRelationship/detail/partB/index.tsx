import React from "react";
import "./index.module.less";
import { Button, Descriptions, Radio } from "antd";

const PartB = () => {
	return (
		<div className={"left-part-1"}>
			<Descriptions bordered title="任务信息">
				<Descriptions.Item label="分派人">Cloud Database</Descriptions.Item>
				<Descriptions.Item label="分派时间">Prepaid</Descriptions.Item>
				<Descriptions.Item label="任务分类">18:00:00</Descriptions.Item>
				<Descriptions.Item label="处理人">$80.00</Descriptions.Item>
				<Descriptions.Item label="任务状态">$20.00</Descriptions.Item>
				<Descriptions.Item label="预计完成时间">$60.00</Descriptions.Item>
				<Descriptions.Item label="实际完成时间">
					Data disk type: MongoDB
					<br />
					Database version: 3.4
					<br />
					Package: dds.mongo.mid
					<br />
					Storage space: 10 GB
					<br />
					Replication factor: 3
					<br />
					Region: East China 1
					<br />
				</Descriptions.Item>
				<></>
				<Descriptions.Item label="任务描述">$60.00</Descriptions.Item>
				<></>
				<Descriptions.Item label="处理意见">$60.00</Descriptions.Item>
			</Descriptions>

			<Descriptions bordered title="工单信息">
				<Descriptions.Item label="工单编号">Cloud Database</Descriptions.Item>
				<Descriptions.Item label="问题系统">Prepaid</Descriptions.Item>
				<Descriptions.Item label="工单类型">18:00:00</Descriptions.Item>
				<Descriptions.Item label="紧急程度">$80.00</Descriptions.Item>
				<Descriptions.Item label="发起机构">$20.00</Descriptions.Item>
				<Descriptions.Item label="发起人员">$60.00</Descriptions.Item>
				<Descriptions.Item label="问题描述">
					Data disk type: MongoDB
					<br />
					Database version: 3.4
					<br />
					Package: dds.mongo.mid
					<br />
					Storage space: 10 GB
					<br />
					Replication factor: 3
					<br />
					Region: East China 1
					<br />
				</Descriptions.Item>
				<></>
				<Descriptions.Item label="任务描述">$60.00</Descriptions.Item>
				<></>
				<Descriptions.Item label="处理意见">$60.00</Descriptions.Item>
			</Descriptions>
		</div>
	);
};

export default PartB;
