import React, {useState, useEffect} from 'react';
import {useLocation} from 'react-router-dom'
import {connect} from 'react-redux'
import {Breadcrumb} from 'antd';


const Breadcrumbs: React.FC = () => {
    const {pathname} = useLocation();
    const pagePath = pathname.split('/')
    pagePath.shift()

    return (
        <Breadcrumb>
            {
                pagePath.map((item: any) => {
                        return <Breadcrumb.Item key={item}>{item}</Breadcrumb.Item>
                    }
                )
            }
        </Breadcrumb>
    );
}


const mapStateToProps = (state: any) => {
    return state.header
}

export default connect(mapStateToProps, {})(Breadcrumbs);
