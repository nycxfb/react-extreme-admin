import React from 'react';
import { DatePicker, Form, Input, Select, Radio } from 'antd';

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
  const labelWidth = props?.labelWidth ?? 3;

  const renderForm = (item: any) => {
    switch (item.type) {
      case 'input':
        return <Input />;
      case 'textarea':
        return <TextArea />;
      case 'select':
        return <Select options={item.options} />;
      case 'radio':
        return (
          <Radio.Group>
            {item.options.map((item: any) => (
              <Radio value={item.value}>{item.label}</Radio>
            ))}
          </Radio.Group>
        );
      case 'date':
        return <DatePicker />;
      case 'rangePicker':
        return <RangePicker />;
      default:
        return <></>;
    }
  };

  return (
    <Form labelCol={{ span: labelWidth }}>
      {formList.map((item) => (
        <Form.Item label={item.label}>{renderForm(item)}</Form.Item>
      ))}
    </Form>
  );
};

export default DynamicForm;
