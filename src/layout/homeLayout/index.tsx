import React, {useState} from 'react';
import {Outlet} from 'react-router-dom'
import {Layout, theme} from 'antd';
import {HomeMenu, HomeHeader} from './components/index';
import {connect} from 'react-redux';

const {Sider, Content} = Layout;
import './index.less';
import {toggleSideMenu} from '@/redux/module/menu/action';


const HomeLayout: React.FC = (props: any) => {
    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={props.isCollapse}>
                <div className="logo"/>
                <HomeMenu/>
            </Sider>
            <Layout>
                <HomeHeader/>
                <Content>
                    <Outlet/>
                </Content>
            </Layout>
        </Layout>
    );
};

const mapStateToProps = (state: any) => {
    return state.menu
}

const mapDispatchToProps = {
    toggleSideMenu
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeLayout);
