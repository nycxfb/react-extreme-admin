import React from "react";
import {useNavigate} from 'react-router-dom'
import {Layout, Form, Input, Button} from 'antd'
import './index.less'

const Login = function () {
    const navigate = useNavigate()
    const toHomePage = () => {
        navigate('/home')
    }
    return (
        <div className="login">
            <div className="login_inset">

            </div>
            <div className="login_form">
                <Form>
                    <Form.Item label="账号">
                        <Input/>
                    </Form.Item>
                    <Form.Item label="密码">
                        <Input/>
                    </Form.Item>
                    <Form.Item wrapperCol={{offset: 8, span: 16}}>
                        <Button type="primary" onClick={() => {
                            toHomePage()
                        }}>
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default Login
