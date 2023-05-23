import React from 'react';
import { DashboardOutlined, SettingOutlined, UserAddOutlined } from '@ant-design/icons';
import { Menu, Layout } from 'antd';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const items = [
    {
        key: 'dashboard',
        title: 'Dashboard',
        icon: <DashboardOutlined />,
        label: <Link to={'/office/dashboard'}>Dashboard</Link>,
    },
    {
        type: 'divider',
    },
    {
        type: 'group',
        label: "Students & Teachers",
    },
    {
        type: "submenu",
        label: "Manage Students",
        icon: <UserAddOutlined />,
        children: [
            {
                label: <Link to={'/office/student/categories'}>Categories</Link>,
                key: 'st-01',
                title: 'Categories',
            }, {
                label: <Link to={'/office/student'}>All Students</Link>,
                key: 'st-02',
                title: 'All Students',
            }, {
                label: <Link>Attendance</Link>,
                key: 'st-03',
                title: 'Attendance',
            }
        ]
    },
    {
        type: 'group',
        label: "Manage Fees & Payment",
    },
    {
        type: 'group',
        label: "Settings & Configuration",
    },
    {
        type: "submenu",
        label: "Manage Settings",
        icon: <SettingOutlined />,
        children: [
            {
                label: <Link>Application Setting</Link>,
                key: 'ms-01',
                title: 'Application Setting',
            }, {
                label: <Link>Institute Setting</Link>,
                key: 'ms-02',
                title: 'Institute Setting',
            }, {
                label: <Link>Email Setting</Link>,
                key: 'ms-03',
                title: 'Email Setting',
            }, {
                label: <Link>SMS Setting</Link>,
                key: 'ms-04',
                title: 'Email Setting',
            }, {
                label: <Link>Notification Setting</Link>,
                key: 'ms-05',
                title: 'Notification Setting',
            }, {
                label: <Link>Payment Setting</Link>,
                key: 'ms-06',
                title: 'Payment Setting',
            }
        ]
    }

];



const AppSiderBar = () => {

    const onClickHandel = (e) => {
        switch (e) {
            case 'st-01':
                return (<Link to={'/office/student/categories'}></Link>);
            default:
                break;
        }
    }

    const toggleId = 'MY_COMPONENT_TOGGLE';
    const collapseState = useSelector((state) => state.toggleReducer[toggleId]);

    return (
        <Layout.Sider trigger={collapseState} collapsible collapsed={collapseState} theme='light' collapsedWidth={0} reverseArrow>
            <Menu
                onClick={onClickHandel}
                defaultSelectedKeys={['dashboard']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                items={items}
                theme='light'
                style={{ height: 32, borderRadius: 5 }}
            />
        </Layout.Sider>
    );
};
export default AppSiderBar;