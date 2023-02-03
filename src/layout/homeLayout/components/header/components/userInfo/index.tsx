import React from "react";
import {UserOutlined} from '@ant-design/icons';
import {Avatar, Dropdown} from 'antd';
import type {MenuProps} from 'antd';
import {useNavigate} from 'react-router-dom'
import './index.less'


const UserInfo = () => {
    const items: MenuProps['items'] = [
        {
            key: '1',
            label: (
                <span onClick={() => {
                    logOut()
                }}>
                退出登录
            </span>
            ),
        }
    ];
    const navigate = useNavigate()
    const logOut = () => {
        navigate('/login')
    }
    return (
        <>
            <Dropdown menu={{items}} trigger={['click']} placement="bottom">
                <Avatar size={40} icon={<UserOutlined/>}/>
            </Dropdown>

        </>
    )
}

export default UserInfo
