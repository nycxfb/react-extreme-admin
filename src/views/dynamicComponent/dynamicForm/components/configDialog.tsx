import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import { Modal, Checkbox, Button } from 'antd';
import { primaryList } from './config';
import style from './index.module.less';

const ConfigDialog = forwardRef((props: any, ref) => {
  useImperativeHandle(ref, () => ({ openConfigDialog }));
  const { onGetConfigList } = props;

  const [visible, setVisible] = useState<boolean>(false);
  const [configList, setConfigList] = useState([]);

  // 打开弹窗
  const openConfigDialog = (status: boolean) => {
    setVisible(status);
  };
  const onChange = (e: any) => {
    setConfigList(e);
  };

  //处理选中数据
  const confirmSelect = (selectArray: any = []) => {
    configList.forEach((item) => {
      primaryList.forEach((item1) => {
        if (item1.key === item) {
          selectArray.push(item1);
        }
      });
    });
    onGetConfigList(selectArray);
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
            confirmSelect();
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
        {primaryList.map((primaryListItem: any) => (
          <Checkbox value={primaryListItem.key} key={primaryListItem.key}>
            {primaryListItem.label}
          </Checkbox>
        ))}
      </Checkbox.Group>
    </Modal>
  );
});

export default ConfigDialog;
