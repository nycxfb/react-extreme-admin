import React from "react";
import SearchFormCard from "@/components/SearchFormCard";
import { Button, Form, Input, Row } from "antd";

const DataMask = () => {
	return (
		<SearchFormCard>
			<Form labelCol={{ span: 7 }}>
				<Form.Item label="手机" name={"nickname"}>
					<Input allowClear />
				</Form.Item>
				<Form.Item label="身份证" name={"phone"}>
					<Input allowClear />
				</Form.Item>
				<Form.Item label="邮箱">
					<Input allowClear />
				</Form.Item>
				<Form.Item label="车牌号">
					<Input allowClear />
				</Form.Item>
			</Form>
		</SearchFormCard>
	);
};

export default DataMask;
