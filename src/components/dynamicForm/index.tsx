import React from 'react';
import { DatePicker, Form, Input, Select } from 'antd';

const { TextArea } = Input;
const { RangePicker } = DatePicker;

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
      case 'input':
        return <Input />;
      case 'textArea':
        return <TextArea />;
      case 'select':
        return <Select />;
      case 'date':
        return <DatePicker />;
      case 'rangePicker':
        return <RangePicker />;
      default:
        return <></>;
    }
  };

  return (
    <Form>
      {formList.map((item) => (
        <Form.Item label={item.label}>{renderForm(item)}</Form.Item>
      ))}
    </Form>
  );
};

export default DynamicForm;
