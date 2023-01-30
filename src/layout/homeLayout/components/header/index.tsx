import React from "react";
import {Breadcrumbs, Tags, UserInfo, SwitchButton} from './components/index'
import {Layout, Row, Col} from "antd";
import './index.less'

const {Header} = Layout


const HomeHeader = () => {
    return (
        <div className="header-wrapper">
            <Row className="header-A">
                <Col span={4}>
                    <SwitchButton/>
                </Col>
                <Col span={12}>
                    <Breadcrumbs/>
                </Col>
                <Col span={8}>
                    <UserInfo/>
                </Col>
            </Row>
            <Tags/>
        </div>
    )
}

export default HomeHeader
