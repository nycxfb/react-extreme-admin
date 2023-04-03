import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import { Modal, Checkbox, Button } from 'antd';
import { list } from './config';
import style from './index.module.less';

const ConfigDialog = forwardRef((props: any, ref) => {
  useImperativeHandle(ref, () => ({ openConfigDialog }));
  const { onGetConfigList } = props;

  const [visible, setVisible] = useState<boolean>(false);
  const [configList, setConfigList] = useState([]);
  const openConfigDialog = (status: boolean) => {
    setVisible(status);
  };
  const onChange = (e: any) => {
    setConfigList(e);
  };

  const handleOk = () => {
    const arr: any = [];
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
      className={style['config-modal']}
      title="表单配置"
      open={visible}
      footer={[
        <Button
          key="submit"
          type="primary"
          size={'middle'}
          onClick={() => {
            handleOk();
          }}
        >
          确认
        </Button>,
        <Button
          key={'close'}
          size={'middle'}
          onClick={() => {
            setVisible(false);
          }}
        >
          关闭
        </Button>
      ]}
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
