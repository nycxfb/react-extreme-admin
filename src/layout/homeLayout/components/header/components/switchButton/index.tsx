import React from "react";
import {Button, Menu} from 'antd';
import {MenuFoldOutlined, MenuUnfoldOutlined} from '@ant-design/icons';

const SwitchButton = () => {
    return (
        <Button type="primary" style={{marginBottom: 16}}>
            {<MenuUnfoldOutlined/>}
        </Button>
    )
}

export default SwitchButton
