import React, { useRef, useState } from 'react';
import { Button, Card, Col, Divider, Form, Row, Select, Input } from 'antd';
import DynamicForm from '@/components/dynamicForm';
import ConfigDialog from './components/configDialog';
import Tips from '@/components/tips';
import SearchFormCard from '@/components/SearchFormCard';
import './index.module.less';

const Index = () => {
  const configDialogRef = useRef<any>(null);
  const dynamicFormRef = useRef<any>(null);
  const [formList, setFormList] = useState([]);
  const [column, setColumn] = useState<string>('1');
  const [labelWidth, setLabelWidth] = useState<string>('');

  const [form] = Form.useForm();

  //打开弹窗
  const openConfigDialog = () => {
    configDialogRef.current.openConfigDialog(true);
  };

  //获取配置数据
  const getConfigList = (formList: any) => {
    setFormList(formList);
    dynamicFormRef.current.handleForm(formList, Number(column), labelWidth);
  };

  //设置列数
  const setChangedVal = (val: string) => {
    setColumn(val);
  };

  //设置宽度
  const updateConfig = () => {
    setLabelWidth(form.getFieldsValue().labelWidth);
    dynamicFormRef.current.handleForm(formList, Number(column), labelWidth);
  };
  return (
    <div className={'dynamic-container'}>
      <Tips
        message={
          '当前动态表单可适用于简单大量重复的业务场景,比如搜索场景如有复杂场景,可选用专业表单组件，或者需要根据业务需求去进一步封装表单组件'
        }
      />
      <SearchFormCard
        extra={
          <>
            <Button type={'primary'} onClick={openConfigDialog} style={{ marginRight: '15px' }}>
              配置表单
            </Button>
            <Button onClick={updateConfig} style={{ marginLeft: '15px' }}>
              更新配置
            </Button>
          </>
        }
      >
        <Form labelCol={{ span: 10 }} form={form}>
          <Form.Item label={'配置列数'}>
            <Select
              onChange={setChangedVal}
              options={[
                { value: '1', label: '1' },
                { value: '2', label: '2' },
                { value: '3', label: '3' },
                { value: '4', label: '4' }
              ]}
            />
          </Form.Item>
          <Form.Item label={'配置标签宽度'} name={'labelWidth'}>
            <Input />
          </Form.Item>
        </Form>
      </SearchFormCard>
      <Card title={'动态表单'}>
        <DynamicForm ref={dynamicFormRef} formList={formList} />
      </Card>
      <ConfigDialog ref={configDialogRef} column={column} labelWidth={labelWidth} onGetConfigList={getConfigList} />
    </div>
  );
};

export default Index;
