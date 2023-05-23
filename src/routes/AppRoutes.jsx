import { Navigate, Route, Routes } from "react-router-dom";

import LoginPage from "../components/ui/auth/login-page";
import PasswordReset from "../components/ui/auth/passwords/reset-page";
import Dashboard from "../components/ui/dashboard/Dashboard";
import CategoriesIndex from "../components/ui/categories/Index";
import StudentIndex from "../components/ui/students/Index";
import StudentCreate from "../components/ui/students/Create";

const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/auth/passowrd/reset" element={<PasswordReset />} />
            <Route path="/office/dashboard" element={<Dashboard />} />
            {/* students route  */}
            <Route path="/office/student/categories" element={<CategoriesIndex />} />
            <Route path="/office/student" element={<StudentIndex />} />
            <Route path="/office/student/create" element={<StudentCreate />} />
        </Routes>
    );
}
export default AppRoutes;