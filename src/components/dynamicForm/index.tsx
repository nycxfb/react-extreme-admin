import React, { useState, useImperativeHandle, forwardRef, useEffect } from 'react';
import { DatePicker, Form, Input, Select, Radio, Row, Col } from 'antd';
const { TextArea } = Input;
const { RangePicker } = DatePicker;

const DynamicForm = forwardRef((props: any, ref) => {
  useImperativeHandle(ref, () => ({ handleForm }));

  const [handleArray, setHandleArray] = useState<any>([]);
  const [labelWidth, setLabelWidth] = useState<string>(props?.labelWidth ?? 5);

  // 处理表单数据
  const handleForm = (arr: any, column: number, labelWidth: string, tempArray: any = []) => {
    setLabelWidth(labelWidth);
    for (let i = 0; i < arr.length; i += column) {
      tempArray.push(arr.slice(i, i + column));
      setHandleArray(tempArray);
    }
  };

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
      {handleArray.map((rowItem: any) => (
        <Row key={rowItem.index}>
          {rowItem.map((formItem: any) => (
            <Col key={formItem.label} span={8}>
              <Form.Item label={formItem.label}>{renderForm(formItem)}</Form.Item>
            </Col>
          ))}
        </Row>
      ))}
    </Form>
  );
});

export default DynamicForm;
