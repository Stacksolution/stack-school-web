import React from "react";
import AppSiderBar from "../common/AppSiderBar";
import { Button, Card, Col, Form, Input, Layout, Row, Select, Space, Dropdown, Table } from "antd";
import HeaderBar from "../common/HeaderBar";
import FooterBar from "../common/FooterBar";
import { CloseCircleFilled, DashboardFilled, PlusOutlined, SearchOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const StudentIndex = () => {
    return (
        <>
            <AppSiderBar />
            <Layout className="site-layout">
                <HeaderBar />
                <StudentRecords />
                <FooterBar />
            </Layout >
        </>
    )
}

const items = [
    {
        label: 'Dashboard',
        key: '1',
        icon: <DashboardFilled />
    },
    {
        label: 'Block',
        key: '2',
        icon: < CloseCircleFilled />
    }
];
const handleButtonClick = (e) => {
    console.log('click left button', e);
};

const handleMenuClick = (e) => {
    console.log('click', e);
};
const menuProps = {
    items,
    onClick: handleMenuClick,
};

const columns = [
    {
        title: 'Sr',
        dataIndex: 'sr',
    },
    {
        title: 'Photo',
        dataIndex: 'photo',
    },
    {
        title: 'R.N.',
        dataIndex: 'rolenumber',
    },
    {
        title: 'Name',
        dataIndex: 'name',
    },
    {
        title: 'Date Of Birth',
        dataIndex: 'date_of_birth',
    },
    {
        title: 'Class(Section)',
        dataIndex: 'class_section',
    },
    {
        title: 'Gender',
        dataIndex: 'gender',
    },
    {
        title: 'Action',
        dataIndex: 'action',
        render: () => <>
            <Space>
                <Dropdown.Button menu={menuProps} onClick={handleButtonClick}>
                    Dashboard
                </Dropdown.Button>
            </Space>
        </>,
    }
];
const data = [
    {
        sr: '1',
        photo: 'John Brown',
        rolenumber: 32,
        name: 'New York No. 1 Lake Park',
        date_of_birth: 'John Brown',
        class_section: 32,
        gender: 'New York No. 1 Lake Park',
        action: 1,
    }
];

const TableDataFilterForm = () => {
    const [form] = Form.useForm();
    return (
        <Form form={form} name="horizontal_login" layout="vertical" >
            <Row gutter={16}>
                <Col span={6}>
                    <Form.Item
                        name="name"
                        rules={[{ required: true, message: 'Please enter user name' }]}
                    >
                        <Input placeholder="Please enter user name" />
                    </Form.Item>
                </Col>
                <Col span={6}>
                    <Form.Item
                        name="owner"
                        rules={[{ required: true, message: 'Please select an owner' }]}
                    >
                        <Select placeholder="Please select an owner">
                            <Select.Option value="xiao">Xiaoxiao Fu</Select.Option>
                            <Select.Option value="mao">Maomao Zhou</Select.Option>
                        </Select>
                    </Form.Item>
                </Col>
                <Col span={6}>
                    <Form.Item
                        name="owner"
                        rules={[{ required: true, message: 'Please select an owner' }]}
                    >
                        <Select placeholder="Please select an owner">
                            <Select.Option value="xiao">Xiaoxiao Fu</Select.Option>
                            <Select.Option value="mao">Maomao Zhou</Select.Option>
                        </Select>
                    </Form.Item>
                </Col>
                <Col span={4}>
                    <Form.Item
                        name="owner"
                        rules={[{ required: true, message: 'Please select an owner' }]}
                    >
                        <Select placeholder="Please select an owner">
                            <Select.Option value="xiao">Xiaoxiao Fu</Select.Option>
                            <Select.Option value="mao">Maomao Zhou</Select.Option>
                        </Select>
                    </Form.Item>
                </Col>
                <Col span={2}>
                    <Button icon={<SearchOutlined />}></Button>
                </Col>
            </Row>
        </Form>
    );
}

const StudentRecords = () => {
    return (
        <>
            <Row gutter={[16, 16]} style={{ padding: 10 }}>
                <Col span={24}>
                    <Card title="Student Categories" extra={
                        <Button title='Add New Student Categories'>
                            <Link to={'/office/student/create'}> Add New <PlusOutlined /></Link>
                        </Button>
                    }>
                        <TableDataFilterForm />

                        <Table
                            columns={columns}
                            dataSource={data}
                            bordered
                            pagination={{ position: 'top', defaultPageSize: 10, showSizeChanger: true, pageSizeOptions: ['10', '20', '30'] }}
                        />
                    </Card>
                </Col>
            </Row >
        </>
    );
}
export default StudentIndex;