import React from 'react';
import '../app-asset/App.css';

import { Layout } from 'antd';
import AppRoutes from '../routes/AppRoutes';

const AppLayouts = () => {
    return (
        <Layout>
            <AppRoutes />
        </Layout>
    );
};

export default AppLayouts;