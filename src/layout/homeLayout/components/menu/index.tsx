import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import type {MenuProps} from 'antd';
import {Menu} from 'antd';
import {MailOutlined, SettingOutlined} from '@ant-design/icons';
import asyncRoutes from '@/router/module/asyncRoutes'
import {connect} from 'react-redux'
import {toggleTags, updateTags} from '@/redux/module/header/action'
import './index.less'

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}

const menuArr_: any = []
const items: MenuItem[] = [
    getItem('Navigation One', 'sub1', <MailOutlined/>, [
        getItem('Item 1', 'g1', null, [getItem('Option 1', '1'), getItem('Option 2', '2')], 'group'),
        getItem('Item 2', 'g2', null, [getItem('Option 3', '3'), getItem('Option 4', '4')], 'group'),
    ]),
];


const HomeMenu: React.FC = (props: any) => {
    const navigate = useNavigate()
    const [menuArr, setMenuArr] = useState([])
    const childrenArr: any = []
    const {tags, updateTags} = props
    useEffect(() => {
        menuArr_.length = 0

        handleRoutes(asyncRoutes, '')
    }, [])

    const clickMenu = (props: any) => {
        const arr = props.key.split('/')
        arr.shift()
        toggleTags(arr)
        navigate(props.key)
        childrenArr.length = 0
        menuArr_.forEach((item: any) => {
            if (item.children) {
                item.children.forEach((item_: any) => {
                    childrenArr.push(item_)
                })
            }
        })
        const item = childrenArr.find((item: any) => item.key == props.key)
        if (tags.indexOf(item.label) == -1) {
            updateTags([...tags, item.label])
        }
    }

    const handleRoutes = (menuArr: any, path: string) => {
        menuArr.forEach((menuItem: any) => {
            if (path) {
                menuArr_.forEach((item: any) => {
                    if (item.key == path) {
                        item.children.push(getItem(menuItem.meta.title, menuItem.path,))
                    }
                })
            }

            if (menuItem.children) {
                menuArr_.push(getItem(menuItem.meta.title, menuItem.path, <SettingOutlined/>, []))
                handleRoutes(menuItem.children, menuItem.path)

            } else {

            }
        })
        setMenuArr(menuArr_)
    }

    return (
        <Menu
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            theme="dark"
            items={menuArr}
            onClick={clickMenu}
        />
    );
};

const mapStateToProps = (state: any) => {
    return state.header
}
const mapDispatchToProps = {
    toggleTags,
    updateTags
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeMenu);
