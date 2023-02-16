import React, { useState, forwardRef, useRef, useImperativeHandle } from "react";
import { Col, Form, Input, Modal, Row, Button, Upload, message } from "antd";
import { http_user_add, http_user_edit } from "@/api/systemManagement/user";
import { http_user_upload } from "@/api/system/user";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import type { UploadChangeParam } from "antd/es/upload";
import type { RcFile, UploadFile, UploadProps } from "antd/es/upload/interface";

const getBase64 = (img: RcFile, callback: (url: string) => void) => {
	const reader = new FileReader();
	reader.addEventListener("load", () => callback(reader.result as string));
	reader.readAsDataURL(img);
};

const beforeUpload = (file: RcFile) => {
	const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
	if (!isJpgOrPng) {
		message.error("You can only upload JPG/PNG file!");
	}
	const isLt2M = file.size / 1024 / 1024 < 2;
	if (!isLt2M) {
		message.error("Image must smaller than 2MB!");
	}
	return isJpgOrPng && isLt2M;
};

const UserFormDialog = forwardRef((props: any, ref) => {
	useImperativeHandle(ref, () => ({ showModal }));

	const [isModalOpen, setIsModalOpen] = useState(false);
	const [type, setType] = useState("");
	const [column, setColumn] = useState<any>({});
	const formRef = useRef<any>(null);

	const [form] = Form.useForm();
	const [loading, setLoading] = useState(false);
	const [imageUrl, setImageUrl] = useState<string>();

	const handleChange: UploadProps["onChange"] = async (info: UploadChangeParam<UploadFile>) => {
		if (info.file.status === "uploading") {
			setLoading(true);
			return;
		}
		if (info.file.status === "done") {
			getBase64(info.file.originFileObj as RcFile, url => {
				setLoading(false);
				setImageUrl(url);
			});
		}

		if (info.file.status === "error") {
			getBase64(info.file.originFileObj as RcFile, url => {
				setLoading(false);
				setImageUrl(url);
			});

			await customUpload(info.file);
		}
	};

	const customUpload = async (file: any) => {
		const fd = new FormData();
		fd.append("file", file.originFileObj);
		fd.append("userId", column.userId);
		await http_user_upload(fd);
	};

	const uploadButton = (
		<div>
			{loading ? <LoadingOutlined /> : <PlusOutlined />}
			<div style={{ marginTop: 8 }}>Upload</div>
		</div>
	);

	// 展示弹窗
	const showModal = async (type: string, record: any) => {
		setType(type);
		setColumn(record);
		await setIsModalOpen(true);
		if (type === "edit") {
			setImageUrl(record.avatarUrl);
			formRef.current.setFieldsValue({
				userName: record.userName,
				phone: record.phone,
				address: record.address,
				age: record.age
			});
		}
	};

	// 提交表单项
	const handleOk = async () => {
		const params = form.getFieldsValue();
		if (type === "add") {
			const res = await http_user_add(params);
			if (res.data.code == "0000") {
				props.onGetUserList();
				form.resetFields();
				setIsModalOpen(false);
			}
		} else {
			await http_user_edit({ ...params, userId: column.userId });
			setIsModalOpen(false);
			form.resetFields();
			props.onGetUserList();
		}
	};
	// 关闭弹窗
	const handleCancel = () => {
		form.resetFields();
		setIsModalOpen(false);
	};

	return (
		<Modal
			className="base-dialog"
			title={type === "add" ? "新增用户" : "编辑用户"}
			open={isModalOpen}
			onOk={handleOk}
			onCancel={handleCancel}
			footer={[
				<Button key="submit" type="primary" size={"middle"} onClick={handleOk}>
					确定
				</Button>,
				<Button key="back" size={"middle"} onClick={handleCancel}>
					取消
				</Button>
			]}
		>
			<Form ref={formRef} form={form} labelCol={{ span: 4 }}>
				<Form.Item label="姓名" name="userName">
					<Input></Input>
				</Form.Item>
				<Form.Item label="手机" name="phone">
					<Input></Input>
				</Form.Item>
				<Form.Item label="年龄" name="age">
					<Input></Input>
				</Form.Item>
				<Form.Item label="地址" name="address">
					<Input></Input>
				</Form.Item>
				<Form.Item label="头像">
					<Upload
						name="avatar"
						listType="picture-card"
						className="avatar-uploader"
						showUploadList={false}
						beforeUpload={beforeUpload}
						onChange={handleChange}
					>
						{imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: "100%" }} /> : uploadButton}
					</Upload>
				</Form.Item>
			</Form>
		</Modal>
	);
});

export default UserFormDialog;
