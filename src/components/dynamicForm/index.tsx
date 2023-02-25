import React from "react";
import { DatePicker, Form, Input, Select } from "antd";

interface formConfig {
	formList: Array<any>;
	column?: number;
	labelWidth?: number;
}

const DynamicForm = (props: formConfig) => {
	const { formList } = props;
	const column = props?.column ?? 3;
	const labelWidth = props?.labelWidth ?? 100;

	const renderForm = (item: any) => {
		switch (item.type) {
			case "input":
				return <Input></Input>;
			case "select":
				return <Select></Select>;
			case "date":
				return <DatePicker></DatePicker>;
			default:
				return <></>;
		}
	};

	return (
		<Form>
			{formList.map(item => (
				<Form.Item label={item.label}>{renderForm(item)}</Form.Item>
			))}
		</Form>
	);
};

export default DynamicForm;
