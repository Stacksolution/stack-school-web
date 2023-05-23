import React, { useState, useEffect } from 'react';
import { Switch, Button, Card, Col, Form, Input, Row, Space, Table, Select, Modal, Spin } from 'antd';
import { Layout } from 'antd';
import AppSiderBar from '../common/AppSiderBar';
import HeaderBar from '../common/HeaderBar';
import FooterBar from '../common/FooterBar';
import StudentsCategoriseObject from "../../../services/StudentsCategories.Service.jsx";
import { ClearOutlined, DeleteFilled, EditOutlined, PlusOutlined, SearchOutlined } from '@ant-design/icons';
const { Option } = Select;

const columns = [
    {
        title: 'Sr',
        dataIndex: 'id',
    },
    {
        title: 'Name',
        dataIndex: 'categories_name',
    },
    {
        title: 'Status',
        dataIndex: 'status',
        render: () => <Switch defaultChecked />,
    },
    {
        title: 'Action',
        dataIndex: 'action',
        render: () => <>
            <Space>
                <Button type="dashed" icon={<EditOutlined />} ></Button>
                <Button type="dashed" icon={<DeleteFilled />} danger></Button>
            </Space>
        </>,
    }
];

const CategoriesContent = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [categoriesData, setData] = useState([]);
    const [loadings, setLoadings] = useState();

    const showCreateModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    }

    useEffect(() => {
        fetchStudentCategories();
    }, []);

    const fetchStudentCategories = async () => {
        setLoadings(true);
        const studentcategorisservice = new StudentsCategoriseObject();
        const response = await studentcategorisservice.getStudentCategories();
        setData(response.data);
        setLoadings(false);
    }
    const [form] = Form.useForm();
    const formReset = (values) => {
        form.resetFields();
        fetchStudentCategories();
    }

    const onFinish = async (values) => {
        try {
            setLoadings(true);
            const values = await form.validateFields();
            const studentcategorisservice = new StudentsCategoriseObject();
            const response = await studentcategorisservice.searchStudentCategories(values);
            setData(response.data);
            setLoadings(false);
        } catch (errInfo) {
            console.log('Error:', errInfo);
        }
    }

    const [createForm] = Form.useForm();
    const onFinishCreate = async (values) => {
        try {
            const values = await createForm.validateFields();
            const studentcategorisservice = new StudentsCategoriseObject();
            const response = await studentcategorisservice.createStudentCategory(values);
            console.log(response);
        } catch (errInfo) {
            console.log('Error:', errInfo);
        }
    }
    return (
        <>
            <Modal title="Create New Student Categories" onCancel={handleCancel} open={isModalOpen} okText="Save" onOk={onFinishCreate}>
                <Form layout="vertical" form={createForm} >
                    <Row gutter={16}>
                        <Col span={24}>
                            <Form.Item
                                name="categories_name"
                                label="Category Name"
                                rules={[{ required: true, message: 'Please enter ctegory name' }]}
                            >
                                <Input placeholder="Please enter ctegory name" />
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </Modal >
            <Row gutter={[16, 16]} style={{ padding: 10 }}>
                <Col span={24}>
                    <Card title="Student Categories" extra={
                        <Button title='Add New Student Categories' onClick={showCreateModal} >
                            Add New <PlusOutlined />
                        </Button>
                    }>
                        <Row gutter={[16, 16]}>
                            <Col span={24}>
                                <Space wrap style={{ marginBottom: 10, marginTop: -10 }}>
                                    <Form form={form} name="searchcategories" layout="inline" onFinish={onFinish}>
                                        <Form.Item
                                            name="keywords"
                                            rules={[{ required: true, message: 'Please keywords ......' }]}
                                        >
                                            <Input placeholder="Keywords ....." type='search' />
                                        </Form.Item>
                                        <Form.Item
                                            name="status"
                                        >
                                            <Select
                                                showSearch
                                                style={{ width: 200 }}
                                                placeholder="Select a person"
                                                optionFilterProp="children"
                                                filterOption={(input, option) =>
                                                    option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                                }
                                            >
                                                <Option value="1">Active</Option>
                                                <Option value="0">Inactive</Option>
                                            </Select>
                                        </Form.Item>
                                        <Form.Item shouldUpdate>
                                            {() => (
                                                <Space>
                                                    <Button
                                                        type="primary"
                                                        htmlType="submit"
                                                        disabled={
                                                            !form.isFieldsTouched(true) ||
                                                            !!form.getFieldsError().filter(({ errors }) => errors.length).length
                                                        }
                                                    >
                                                        <SearchOutlined />
                                                    </Button>
                                                    <Button
                                                        danger
                                                        disabled={
                                                            !form.isFieldsTouched(true) ||
                                                            !!form.getFieldsError().filter(({ errors }) => errors.length).length
                                                        }
                                                        onClick={formReset}
                                                    >
                                                        <ClearOutlined />
                                                    </Button>
                                                </Space>
                                            )}
                                        </Form.Item>
                                    </Form>
                                </Space>
                            </Col>
                        </Row>

                        <Table
                            columns={columns}
                            dataSource={categoriesData}
                            bordered
                            loading={{ indicator: <div><Spin /></div>, spinning: loadings }}
                            pagination={{ position: 'top', defaultPageSize: 2, showSizeChanger: true, pageSizeOptions: ['10', '20', '30'] }}
                        />
                    </Card>
                </Col>
            </Row >
        </>
    );
};

class CategoriesIndex extends React.Component {
    render() {
        return (
            <>
                <AppSiderBar />
                <Layout className="site-layout">
                    <HeaderBar />
                    <CategoriesContent />
                    <FooterBar />
                </Layout>
            </>
        )
    };
}

export default CategoriesIndex;