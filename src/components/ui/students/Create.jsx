import React, { useState } from "react";
import AppSiderBar from "../common/AppSiderBar";
import { Button, Card, Col, Form, Input, Layout, Row, Select, Space, Divider, DatePicker } from "antd";
import HeaderBar from "../common/HeaderBar";
import FooterBar from "../common/FooterBar";
import { CloseCircleOutlined, PlusOutlined, RightOutlined, UploadOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const StudentCreate = () => {
    return (
        <>
            <AppSiderBar />
            <Layout className="site-layout">
                <HeaderBar />
                <StudentCreateForm />
                <FooterBar />
            </Layout >
        </>
    )
}
const StudentCreateForm = () => {
    const onChange = (value) => {
        console.log(`selected ${value}`);
    };

    const onSearch = (value) => {
        console.log('search:', value);
    };

    const onChangedateOfbirth = (date, dateString) => {
        console.log(date, dateString);
    };

    const [form] = Form.useForm();

    const onReset = () => {
        form.resetFields();
    };

    const onFinish = async () => {
        try {
            const values = await form.validateFields();
            const response = await fetch('http://localhost/vrs/login', {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const result = await response.json();
            console.log('Submit:', JSON.stringify(values));
        } catch (errInfo) {
            console.log('Error:', errInfo);
        }
    };

    const [data, setData] = useState({});

    return (
        <Row gutter={[16, 16]} style={{ padding: 10 }}>
            <Col span={24}>
                <Card title="Student Categories" extra={
                    <Button title='Add New Student Categories'>
                        <Link to={'/office/student/create'}> Add New <PlusOutlined /></Link>
                    </Button>
                }>

                    <Form name="student" form={form} layout="vertical" onFinish={onFinish}>
                        <Row gutter={[16, 16]}>
                            <Col span={6}>
                                <Form.Item
                                    label="Class"
                                    name="student_class_id"
                                    tooltip="This is a required field"
                                    rules={[{ required: true, message: 'Select student class' }]}
                                >
                                    <Select
                                        showSearch
                                        placeholder="Select a person"
                                        optionFilterProp="children"
                                        onChange={onChange}
                                        onSearch={onSearch}
                                        filterOption={(input, option) =>
                                            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                        }
                                        options={[
                                            {
                                                value: 'jack',
                                                label: 'Jack',
                                            },
                                            {
                                                value: 'lucy',
                                                label: 'Lucy',
                                            },
                                            {
                                                value: 'tom',
                                                label: 'Tom',
                                            },
                                        ]}
                                    />
                                </Form.Item>
                            </Col>
                            <Col span={6}>
                                <Form.Item
                                    label="Section"
                                    name="student_section_id"
                                    tooltip="This is a required field"
                                    rules={[{ required: true, message: 'Select student section' }]}
                                >
                                    <Select
                                        showSearch
                                        placeholder="Select a person"
                                        optionFilterProp="children"
                                        onChange={onChange}
                                        onSearch={onSearch}
                                        filterOption={(input, option) =>
                                            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                        }
                                        options={[
                                            {
                                                value: 'jack',
                                                label: 'Jack',
                                            },
                                            {
                                                value: 'lucy',
                                                label: 'Lucy',
                                            },
                                            {
                                                value: 'tom',
                                                label: 'Tom',
                                            },
                                        ]}
                                    />
                                </Form.Item>
                            </Col>
                            <Col span={6}>
                                <Form.Item
                                    label="Roll Number"
                                    name="student_role_number"
                                    tooltip="This is not required if you do not the fill field,then system auto generate !"
                                    rules={[{ message: 'Enter student roll number' }]}
                                >
                                    <Input placeholder="Enter student roll number"></Input>
                                </Form.Item>
                            </Col>
                            <Col span={6}>
                                <Form.Item
                                    label="Admission Date"
                                    name="student_admission_date"
                                    tooltip="This is a required field"
                                    rules={[{ required: true, message: 'Enter admission date' }]}
                                >
                                    <DatePicker style={{ width: '100%' }} onChange={onChangedateOfbirth} />
                                </Form.Item>
                            </Col>
                        </Row>

                        <Row gutter={16}>
                            <Col span={8}>
                                <Space.Compact>
                                    <Form.Item
                                        label="First Name"
                                        tooltip="This is field required !"
                                        name="student_first_name"
                                        rules={[{ required: true, message: 'Enter student first name' }]}
                                    >
                                        <Input placeholder="First name...." />
                                    </Form.Item>
                                    <Form.Item
                                        label="Last Name"
                                        tooltip="This is field required !"
                                        name="student_last_name"
                                        rules={[{ required: true, message: 'Enter student last name' }]}
                                    >
                                        <Input placeholder="Last name...." />
                                    </Form.Item>
                                </Space.Compact>
                            </Col>
                            <Col span={4}>
                                <Form.Item
                                    label="Gender"
                                    name="student_class_id"
                                    tooltip="This is a required field"
                                    rules={[{ required: true, message: 'Select student class' }]}
                                >
                                    <Select
                                        showSearch
                                        placeholder="Select a person"
                                        optionFilterProp="children"
                                        onChange={onChange}
                                        onSearch={onSearch}
                                        filterOption={(input, option) =>
                                            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                        }
                                        options={[
                                            {
                                                value: 'male',
                                                label: 'male',
                                            },
                                            {
                                                value: 'female',
                                                label: 'female',
                                            },
                                            {
                                                value: 'other',
                                                label: 'other',
                                            },
                                        ]}
                                    />
                                </Form.Item>
                            </Col>
                            <Col span={4}>
                                <Form.Item
                                    label="Religion"
                                    name="student_religion"
                                    tooltip="This is a required field"
                                    rules={[{ required: true, message: 'Select student religion' }]}
                                >
                                    <Select
                                        showSearch
                                        placeholder="Select student religion"
                                        optionFilterProp="children"
                                        onChange={onChange}
                                        onSearch={onSearch}
                                        filterOption={(input, option) =>
                                            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                        }
                                        options={[
                                            {
                                                value: 'male',
                                                label: 'Male',
                                            },
                                            {
                                                value: 'female',
                                                label: 'Female',
                                            },
                                            {
                                                value: 'other',
                                                label: 'Other',
                                            },
                                        ]}
                                    />
                                </Form.Item>
                            </Col>
                            <Col span={4}>
                                <Form.Item
                                    label="Caste"
                                    name="student_caste"
                                    tooltip="This is a required field"
                                    rules={[{ message: 'Select student caste' }]}
                                >
                                    <Select
                                        showSearch
                                        placeholder="Select student caste"
                                        optionFilterProp="children"
                                        onChange={onChange}
                                        onSearch={onSearch}
                                        filterOption={(input, option) =>
                                            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                        }
                                        options={[
                                            {
                                                value: 'male',
                                                label: 'Male',
                                            },
                                            {
                                                value: 'female',
                                                label: 'Female',
                                            },
                                            {
                                                value: 'other',
                                                label: 'Other',
                                            },
                                        ]}
                                    />
                                </Form.Item>
                            </Col>
                            <Col span={4}>
                                <Form.Item
                                    label="Blood Group"
                                    name="student_blood_group"
                                    tooltip="This is a required field"
                                    rules={[{ message: 'Select student blood group' }]}
                                >
                                    <Select
                                        showSearch
                                        placeholder="Select student blood group"
                                        optionFilterProp="children"
                                        onChange={onChange}
                                        onSearch={onSearch}
                                        filterOption={(input, option) =>
                                            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                        }
                                        options={[
                                            {
                                                value: 'male',
                                                label: 'Male',
                                            },
                                            {
                                                value: 'female',
                                                label: 'Female',
                                            },
                                            {
                                                value: 'other',
                                                label: 'Other',
                                            },
                                        ]}
                                    />
                                </Form.Item>
                            </Col>
                        </Row>

                        <Row gutter={16}>
                            <Col span={4}>
                                <Form.Item
                                    label="Categories"
                                    name="student_categories_id"
                                    tooltip="This is a required field"
                                    rules={[{ required: true, message: 'Select student categories' }]}
                                >
                                    <Select
                                        showSearch
                                        placeholder="Select a category"
                                        optionFilterProp="children"
                                        onChange={onChange}
                                        onSearch={onSearch}
                                        filterOption={(input, option) =>
                                            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                        }
                                        options={[
                                            {
                                                value: 'male',
                                                label: 'male',
                                            },
                                            {
                                                value: 'female',
                                                label: 'female',
                                            },
                                            {
                                                value: 'other',
                                                label: 'other',
                                            },
                                        ]}
                                    />
                                </Form.Item>
                            </Col>
                            <Col span={6}>
                                <Form.Item
                                    label="Mobile Or Phone"
                                    name="student_phone"
                                    tooltip="This is a required field"
                                    rules={[{ message: 'Select student phone' }]}
                                >
                                    <Input placeholder="Enter mobile or phone number"></Input>
                                </Form.Item>
                            </Col>
                            <Col span={6}>
                                <Form.Item
                                    label="Email Address"
                                    name="student_email"
                                    tooltip="This is a required field"
                                    rules={[{ message: 'Select student email' }]}
                                >
                                    <Input placeholder="Enter email address"></Input>
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item
                                    label="Full Address"
                                    name="student_address"
                                    tooltip="This is a required field"
                                    rules={[{ message: 'Select student address' }]}
                                >
                                    <Input placeholder="Enter student address"></Input>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Divider />
                        <Space style={{ float: 'right' }}>
                            <Button danger icon={<CloseCircleOutlined />} onReset={onReset}>
                                Cancel
                            </Button>
                            <Button htmlType="submit" type="primary" icon={<UploadOutlined />}>
                                Continue
                            </Button>
                        </Space>
                    </Form>
                </Card>
            </Col>
        </Row>
    );
}

export default StudentCreate;