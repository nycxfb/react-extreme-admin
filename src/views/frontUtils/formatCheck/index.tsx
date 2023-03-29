import React from "react";
import { Button, Col, Form, Input, Row } from "antd";
import SearchFormCard from "@/components/SearchFormCard";

const FormatCheck = () => {
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
				<Form.Item label="URL" name={"nickname"}>
					<Input allowClear />
				</Form.Item>
				<Form.Item label="大写字母" name={"phone"}>
					<Input allowClear />
				</Form.Item>
				<Form.Item label="小写字母">
					<Input allowClear />
				</Form.Item>
				<Form.Item label="非零正实数">
					<Input allowClear />
				</Form.Item>
			</Form>
			<Row justify={"center"}>
				<Button type={"primary"}>校验</Button>
			</Row>
		</SearchFormCard>
	);
};

export default FormatCheck;
