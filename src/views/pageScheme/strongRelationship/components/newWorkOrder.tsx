import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { Button, Col, Form, Input, Modal, Row, Select } from 'antd';

const WorkOrder = forwardRef((_props: any, ref) => {
  useImperativeHandle(ref, () => ({ openDialog }));
  const [modalOpen, setModalOpen] = useState(false);
  const openDialog = () => {
    setModalOpen(true);
  };
  return (
    <Modal
      className="base-dialog"
      title={'新增工单'}
      open={modalOpen}
      onCancel={() => {
        setModalOpen(false);
      }}
      footer={[
        <Button
          key="submit"
          type="primary"
          size={'middle'}
          onClick={() => {
            setModalOpen(false);
          }}
        >
          关闭
        </Button>
      ]}
    >
      <Row justify={'center'}>
        <Col span={22}>
          <Form>
            <Form.Item label={'系统问题'}>
              <Select />
            </Form.Item>
            <Form.Item label={'工单类型'}>
              <Select />
            </Form.Item>
            <Form.Item label={'紧急状态'}>
              <Select />
            </Form.Item>
            <Form.Item label={'问题描述'}>
              <Input.TextArea rows={3} />
            </Form.Item>
            <Form.Item label={'备注说明'}>
              <Input.TextArea rows={3} />
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </Modal>
  );
});

export default WorkOrder;
