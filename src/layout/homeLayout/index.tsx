import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { Layout, theme, Drawer, Divider, Form, Switch } from 'antd';
import { HomeMenu, HomeHeader, Logo, SettingDrawer, Footer } from './components';
import SvgIcon from '@/components/svgIcon';
import { toggleSideMenu } from '@/redux/module/menu/action';
import { toggleBreadcrumb, addVisitTag, toggleVisitTag } from '@/redux/module/header/action';
import asyncRoutes from '@/router/module/asyncRoutes';
import con from '@/router/module/constantRoutes';
import { generateBreadcrumb, generateTagName, flattenRouter } from '@/router/util/handleRoute';
import './index.less';

const { Sider, Content } = Layout;

const HomeLayout: React.FC = (props: any) => {
  const { pathname } = useLocation();
  const { isCollapse, menuTheme, toggleBreadcrumb, addVisitTag, toggleVisitTag, isShowLogo, isShowFooter } = props;

  //根据路径变化处理面包屑、标签等配置
  useEffect(() => {
    const routes = flattenRouter(asyncRoutes);
    const breadcrumb = generateBreadcrumb(routes, pathname);
    const homeTag = generateTagName(routes, '/home/index');
    const visitTag = generateTagName(routes, pathname);
    toggleBreadcrumb(breadcrumb);
    addVisitTag(homeTag);
    addVisitTag(visitTag);
    toggleVisitTag(pathname);
  }, [pathname]);

  return (
    <>
      <Layout
        style={{
          height: '100vh',
          left: 0,
          top: 0,
          bottom: 0
        }}
      >
        <Sider
          trigger={null}
          collapsible
          collapsed={isCollapse}
          className={menuTheme == 'light' ? 'light-theme' : ''}
          width={210}
        >
          {isShowLogo && <Logo />}
          <HomeMenu />
        </Sider>
        <Layout>
          <HomeHeader />
          <Content>
            <Outlet />
          </Content>
          {isShowFooter && <Footer />}
        </Layout>
      </Layout>
      <SettingDrawer />
    </>
  );
};

const mapStateToProps = (state: any) => {
  return { ...state.menu, ...state.system };
};

const mapDispatchToProps = {
  toggleSideMenu,
  toggleBreadcrumb,
  addVisitTag,
  toggleVisitTag
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeLayout);
