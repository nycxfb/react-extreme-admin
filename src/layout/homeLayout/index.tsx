import React, {useState} from 'react';
import {Layout, Menu, theme, Breadcrumb} from 'antd';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined
} from '@ant-design/icons';
import {Footer, HomeMenu,HomeHeader} from './components/index'

const {Header, Sider, Content} = Layout;
import './index.less'




const HomeLayout: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: {colorBgContainer},
    } = theme.useToken();

    return (
        <Layout style={{height: "100%"}}>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="logo"/>
                <HomeMenu/>
            </Sider>
            <Layout className="site-layout">
                <HomeHeader/>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                    }}
                >
                    Content
                </Content>
            </Layout>
        </Layout>
    );
};

export default HomeLayout;
