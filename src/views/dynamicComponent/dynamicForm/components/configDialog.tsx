import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import { Modal, Checkbox } from 'antd';
import { list } from './config';

const ConfigDialog = forwardRef((props: any, ref) => {
  useImperativeHandle(ref, () => ({ openConfigDialog }));
  const { onGetConfigList } = props;

  const [visible, setVisible] = useState<boolean>(false);
  const [configList, setConfigList] = useState([]);
  const openConfigDialog = (status: boolean) => {
    setVisible(status);
  };
  const onChange = (e: T) => {
    setConfigList(e);
  };

  const handleOk = () => {
    const arr = [];
    configList.forEach((item) => {
      list.forEach((item1) => {
        if (item1.key === item) {
          arr.push(item1);
        }
      });
    });
    onGetConfigList(arr);
    setVisible(false);
  };

  return (
    <Modal
      title="表单配置"
      open={visible}
      onCancel={() => {
        setVisible(false);
      }}
      onOk={() => {
        handleOk();
      }}
    >
      <Checkbox.Group onChange={onChange}>
        {list.map((listItem: any) => (
          <Checkbox value={listItem.key} key={listItem.key}>
            {listItem.label}
          </Checkbox>
        ))}
      </Checkbox.Group>
    </Modal>
  );
});

export default ConfigDialog;
