import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Typography, Button, Form, Input, Layout, Row, Col, Card, Image, Space } from 'antd';
import { Content } from 'antd/es/layout/layout';


const PasswordReset = () => {

    return (
        <Layout className="site-layout">
            <Content justify="center" style={{ padding: '0 24px', minHeight: 600, minWidth: 600 }}>
                <Row>
                    <Col span={8} offset={8} >
                        <Card style={{ background: "white", borderRadius: "5px", marginTop: "90px" }}>
                            <Row>
                                <Col span={8} offset={8} >
                                    <Space direction="horizontal" style={{ width: '100%', justifyContent: 'center' }}>
                                        <Image align='center' preview={false} width={150} height={100} src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
                                    </Space>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={12} offset={6} >
                                    <Space direction="horizontal" style={{ width: '100%', justifyContent: 'center' }}>
                                        <Typography.Title level={4} align='center'>
                                            Reset Password
                                        </Typography.Title>
                                    </Space>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={24}>
                                    <Form
                                        name="resetPassword"
                                        className="login-form"
                                        initialValues={{ remember: true }}
                                    >
                                        <Form.Item
                                            name="username"
                                            rules={[{ required: true, message: 'Please input your Username!' }]}
                                        >
                                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                                        </Form.Item>
                                        <Form.Item>
                                            <Button type="primary" htmlType="submit" className="login-form-button" loading block>
                                                Log in
                                            </Button>
                                        </Form.Item>
                                    </Form>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </Content>
        </Layout>
    );
}

export default PasswordReset;