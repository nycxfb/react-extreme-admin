import React from "react";
import {useNavigate} from 'react-router-dom'
import {Form, Input, Button} from 'antd'
import {LockOutlined, UserOutlined} from '@ant-design/icons';
import SvgIcon from '@/components/svgIcon'
import './index.less'

const Login = function () {
    const navigate = useNavigate()
    const userLogin = () => {
        navigate('/home')
    }
    return (
        <div className="login">
            <div className="login-inset">
                <SvgIcon iconClass="bgc2"/>
            </div>
            <div className="login-form">
                <div className="logo-title">
                    <SvgIcon iconClass="logo"/>
                    <div className="title">
                        <h4>EXTREMEADMIN (react)</h4>
                        <p>A compact, clean system!</p>
                    </div>
                </div>
                <Form>
                    <Form.Item>
                        <Input prefix={<UserOutlined/>} placeholder="Username"/>
                    </Form.Item>
                    <Form.Item>
                        <Input
                            prefix={<LockOutlined/>}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Input/>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" className="login-button" onClick={() => {
                            userLogin()
                        }}>
                            登录
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default Login
