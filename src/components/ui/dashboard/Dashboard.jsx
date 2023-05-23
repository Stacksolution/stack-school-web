import React from "react";
import AppSiderBar from '../common/AppSiderBar';
import HeaderBar from '../common/HeaderBar';
import FooterBar from '../common/FooterBar';
import { Layout, Row, Typography, Image, Col, Card, FloatButton } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { QuestionCircleOutlined } from '@ant-design/icons';

const Dashboard = () => {
    return (
        <>
            <AppSiderBar />
            <Layout className="site-layout">
                <HeaderBar />
                <DashboardConent />
                <FooterBar />
            </Layout>
        </>
    );
}

const DashboardConent = () => {
    return (
        <Layout>
            <Content justify="center" style={{ padding: '8px', height: '100vh', }} >
                <Row justify={'start'}>
                    <Col span={24}>
                        <Typography.Title level={2} align='left' style={{ marginTop: "-1px", }}>
                            Dashboard !
                        </Typography.Title>
                        <Typography.Text type="secondary" align='left'>
                            Wednesday, 19 April 2023 (IST)
                        </Typography.Text>
                    </Col>
                </Row>
                <Row justify={'start'} gutter={8}>
                    <Col span={18} >
                        <Card className="card" style={{ marginTop: "5px", }}>
                            <Row justify={'start'} gutter={8}>
                                <Col sm={12} md={4} lg={4} >
                                    <Image preview={false} width={100} src={require("../../../app-asset/dashboard/Dashboard-cuate.svg").default} />
                                </Col>
                                <Col sm={12} md={20} lg={20} >
                                    <Typography.Title type="success" level={5} align='left' style={{ marginTop: "-1px", marginBottom: "-1px" }}>
                                        Conratulation !
                                    </Typography.Title>
                                    <Typography.Text type="secondary" align='left'>
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
                                    </Typography.Text>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card className="card" style={{ marginTop: "5px", }}>
                            <Image preview={false} width={100} src={require("../../../app-asset/dashboard/Dashboard-cuate.svg").default} />
                        </Card>
                    </Col>
                </Row>
                <Row justify={'start'} gutter={8}>
                    <FloatButton.Group shape="circle" style={{ right: 24 }}>
                        <FloatButton icon={<QuestionCircleOutlined />} />
                        <FloatButton.BackTop visibilityHeight={25} />
                    </FloatButton.Group>
                </Row>
            </Content>
        </Layout>
    );
}
export default Dashboard;



