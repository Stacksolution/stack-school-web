import React, { useState } from "react";
import {
    LoginOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from '@ant-design/icons';
import { UserOutlined } from '@ant-design/icons';
import { Layout, theme, Avatar, Badge, Space, Drawer, Row, Col, Menu, Divider } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { onToggle, offToggle } from '../../../context/actions/ToggleAction';
import { Link, Navigate } from "react-router-dom";

const { Header } = Layout;

const HeaderBar = () => {
    const toggleId = 'MY_COMPONENT_TOGGLE';
    const collapseState = useSelector((state) => state.toggleReducer[toggleId]);


    const dispatch = useDispatch();
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    //check if not login then rdirect login page 
    const isLoggedIn = useSelector((state) => state.authReducer.isLoggedIn);
    if (!isLoggedIn) {
        return <Navigate to={'/'} />
    }

    return (
        <>
            <Header style={{ padding: 0, background: colorBgContainer }}>
                {React.createElement(collapseState ? MenuUnfoldOutlined : MenuFoldOutlined, {
                    className: 'trigger',
                    onClick: () => !collapseState ? dispatch(onToggle(toggleId)) : dispatch(offToggle(toggleId)),
                },)}

                <AvtarIcon></AvtarIcon>
            </Header>
        </>
    );
}

const AvtarIcon = () => {

    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };
    return (
        <>
            <Space style={{ float: 'right', marginRight: "10px" }}>
                <Badge dot>
                    <Avatar shape="square" icon={<UserOutlined />} onClick={showDrawer} />
                </Badge>
            </Space>
            <Drawer title="Basic Drawer" placement="right" onClose={onClose} open={open}>
                <Menu>
                    <Menu.Item key="user-center" icon={<LoginOutlined />}><Link>Log Out</Link></Menu.Item>
                    <Divider />
                    <Menu.Item key="user-center" icon={<LoginOutlined />}><Link>Log Out</Link></Menu.Item>
                    <Divider />
                    <Menu.Item key="user-center" icon={<LoginOutlined />}><Link>Log Out</Link></Menu.Item>
                    <Divider />
                    <Menu.Item key="user-center" icon={<LoginOutlined />}><Link>Log Out</Link></Menu.Item>
                    <Divider />
                    <Menu.Item key="user-center" icon={<LoginOutlined />}><Link>Log Out</Link></Menu.Item>
                    <Divider />
                </Menu>
            </Drawer>
        </>
    );
}

export default HeaderBar;
