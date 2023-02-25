import React, { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { Alert, Button, Card, Col, Divider, Form, Row, Select } from "antd";
import DynamicForm from "@/components/dynamicForm";
import ConfigDialog from "./components/configDialog";
import "./index.module.less";

const Index = () => {
	const configDialogRef = useRef<any>(null);
	const [formList, setFormList] = useState([]);
	const openConfigDialog = () => {
		configDialogRef.current.openConfigDialog(true);
	};
	const getConfigList = (val: any) => {
		setFormList(val);
	};
	return (
		<div className={"dynamic-container"}>
			<Card title={"动态表单"}>
				<Alert
					message={
						"当前动态表单可适用于简单大量重复的业务场景,比如搜索场景如有复杂场景,可选用专业表单组件，或者需要根据业务需求去进一步封装表单组件"
					}
					type={"info"}
				/>

				<Row className={"dynamic-form"}>
					<Col span={17}>
						<DynamicForm formList={formList} />
					</Col>
					<Col span={1}>
						<Divider type={"vertical"}></Divider>
					</Col>

					<Col span={6}>
						<Button type={"primary"} onClick={openConfigDialog}>
							配置表单
						</Button>
						<Form.Item label={"配置列数"}>
							<Select></Select>
						</Form.Item>
					</Col>
				</Row>
			</Card>
			<ConfigDialog ref={configDialogRef} onGetConfigList={getConfigList} />
		</div>
	);
};

export default Index;
