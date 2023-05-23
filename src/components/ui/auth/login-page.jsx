import React, { useState } from 'react';
import { EyeInvisibleOutlined, EyeTwoTone, LockOutlined, UserOutlined } from '@ant-design/icons';
import { Typography, Button, Checkbox, Form, Input, Layout, Row, Col, Card, Divider, Image, Space } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { Link, Navigate } from 'react-router-dom';
import AuthServiceObject from '../../../services/Auth.service';
import { useSelector, useDispatch } from 'react-redux';
import { LOGIN_SUCCESS, LOGIN_FAIL } from '../../../context/actions/AuthAction';
const LoginPage = () => {
    const useData = useSelector((state) => state.authReducer);
    if (useData.isLoggedIn) {
        return <Navigate to={'/office/dashboard'} />;
    }
    return (
        <>
            <Layout className="site-layout">
                <Content justify="center" style={{ padding: '0 24px', minHeight: 600, minWidth: 600 }}>
                    <Row>
                        <Col span={8} offset={8} >
                            <Card style={{ background: "white", borderRadius: "5px", marginTop: "20px" }}>
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
                                                Welcome Back !
                                            </Typography.Title>
                                        </Space>
                                    </Col>
                                </Row>
                                <LoginForm />
                            </Card>
                        </Col>
                    </Row>
                </Content >
            </Layout >
        </>
    );
}


const LoginForm = () => {

    const dispatch = useDispatch();

    const [loadings, setLoadings] = useState();

    const [form] = Form.useForm();

    const onFinish = async (values) => {
        try {
            const values = await form.validateFields();
            setLoadings(true);
            const authService = new AuthServiceObject();
            const response = await authService.login(values);
            setLoadings(false);
            if (response.status === true) {
                localStorage.setItem('token', response.token);
                localStorage.setItem('user', response.data);
                form.resetFields();
                dispatch({ type: LOGIN_SUCCESS, payload: response.data });
                window.location.replace("/office/dashboard");
                return;
            } else {
                dispatch({ type: LOGIN_FAIL })
            }
        } catch (errInfo) {
            console.log('Error:', errInfo);
        }
    };

    return (
        <Form
            layout="vertical"
            name="login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            form={form}
        >
            <Row gutter={[16, 16]}>
                <Col span={24}>
                    <Form.Item
                        label="Username"
                        name="username"
                        tooltip="Enter user email or an unique identification number like roll number and etc."
                        rules={[{ required: true, message: 'Please input your Username!' }]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={[16, 16]}>
                <Col span={24}>
                    <Form.Item
                        label="Password"
                        name="userpassword"
                        tooltip="Password should be alphanumeric with minimum 8 characters"
                        rules={[{ required: true, message: 'Please input your Password!' }]}

                    >
                        <Input.Password
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            placeholder="Password"
                            suffix={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                        />
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={24}>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox >Remember me</Checkbox>
                    </Form.Item>
                    <Link style={{ float: "right" }} to='/auth/passowrd/reset' className="login-form-forgot" href="">
                        Forgot password
                    </Link>
                </Col>
            </Row>
            <Row gutter={[16, 16]} style={{ marginTop: 10 }}>
                <Col span={24}>
                    <Button htmlType='submit' className="login-form-button" block={true} loading={loadings}>
                        Log in
                    </Button>
                    <Divider plain>OR</Divider>
                </Col>
            </Row>
        </Form>
    );
}
export default LoginPage;