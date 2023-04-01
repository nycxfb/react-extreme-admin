import React from 'react';
import { Button, Col, Form, Input, Row } from 'antd';
import SearchFormCard from '@/components/SearchFormCard';
import {
  validateURL,
  validateMobile,
  validateIntegral,
  validateAlphabets,
  validateCard,
  validateEmail,
  validateLowerCase,
  validateUpperCase,
  validatePlateNumber,
} from '@/utils/validate';

const FormatCheck = () => {
  const [form] = Form.useForm();
  const formRules = {
    phone: [
      { required: true, message: '请输入手机号' },
      { max: 11, message: '手机长度不合格' },
      {
        pattern: new RegExp(validateMobile.rule(), 'g') /* 以数字、大小写字母开头，至少有一位*/,
        message: '请输入正确格式的手机号码',
      },
    ],
    idCard: [
      { required: true, message: '请输入身份证号码' },
      {
        pattern: new RegExp(validateCard.rule(), 'g'),
        message: '请输入正确格式的身份证',
      },
    ],
    email: [
      { required: true, message: '请输入邮箱' },
      {
        pattern: new RegExp(validateEmail.rule(), 'g'),
        message: '请输入正确格式的邮箱',
      },
    ],
    plateNumber: [
      { required: true, message: '请输入车牌号' },
      {
        pattern: new RegExp(validatePlateNumber.rule(), 'g'),
        message: '请输入正确格式的车牌号',
      },
    ],
    url: [
      { required: true, message: '请输入URL' },
      {
        pattern: new RegExp(validateURL.rule(), 'g'),
        message: '请输入正确格式的URL',
      },
    ],
    uppercase: [
      { required: true, message: '请输入' },
      {
        pattern: new RegExp(validateUpperCase.rule(), 'g'),
        message: '请输入大写字母',
      },
    ],
    lowercase: [
      { required: true, message: '请输入' },
      {
        pattern: new RegExp(validateLowerCase.rule(), 'g'),
        message: '请输入小写字母',
      },
    ],
    alphabets: [
      { required: true, message: '请输入' },
      {
        pattern: new RegExp(validateAlphabets.rule(), 'g'),
        message: '请输入大小写字母',
      },
    ],
    integral: [
      { required: true, message: '请输入' },
      {
        pattern: new RegExp(validateIntegral.rule(), 'g'),
        message: '请输入非零正实数',
      },
    ],
  };

  const checkForm = async () => {
    await form.validateFields();
  };

  const resetForm = async () => {
    await form.resetFields();
  };

  return (
    <SearchFormCard>
      <Form labelCol={{ span: 7 }} onFinish={checkForm} form={form}>
        <Form.Item label="手机" rules={formRules.phone} name={'phone'}>
          <Input allowClear />
        </Form.Item>
        <Form.Item label="身份证" name={'idCard'} rules={formRules.idCard}>
          <Input allowClear />
        </Form.Item>
        <Form.Item label="邮箱" name={'email'} rules={formRules.email}>
          <Input allowClear />
        </Form.Item>
        <Form.Item label="车牌号" name={'plateNumber'} rules={formRules.plateNumber}>
          <Input allowClear />
        </Form.Item>
        <Form.Item label="URL" name={'url'} rules={formRules.url}>
          <Input allowClear />
        </Form.Item>
        <Form.Item label="大写字母" name={'uppercase'} rules={formRules.uppercase}>
          <Input allowClear />
        </Form.Item>
        <Form.Item label="小写字母" name={'lowercase'} rules={formRules.lowercase}>
          <Input allowClear />
        </Form.Item>
        <Form.Item label="大小写字母" name={'alphabets'} rules={formRules.alphabets}>
          <Input allowClear />
        </Form.Item>
        <Form.Item label="非零正实数" name={'integral'} rules={formRules.integral}>
          <Input allowClear />
        </Form.Item>
      </Form>
      <Row justify={'center'}>
        <Button onClick={checkForm} type={'primary'} style={{ marginRight: '15px' }}>
          校验
        </Button>
        <Button onClick={resetForm} style={{ marginLeft: '15px' }}>
          重置
        </Button>
      </Row>
    </SearchFormCard>
  );
};

export default FormatCheck;
