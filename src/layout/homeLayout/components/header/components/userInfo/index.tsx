import React from "react";
import {UserOutlined} from '@ant-design/icons';
import {Avatar} from 'antd';

const UserInfo = () => {
    return (
        <>
            <Avatar size={50} icon={<UserOutlined/>}/>
        </>
    )
}

export default UserInfo
