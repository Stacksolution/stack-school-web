
const baseUrl = 'http://localhost/stack-school';

export const tokenHeader = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + localStorage.getItem('token')
};

export const ApiConfig = {
    //start api url 
    auth: {
        signin: baseUrl + "/web/api/v1/auth/signin"
    },
    student: {
        categories: baseUrl + "/web/api/v1/student/categories",
        categoriesCreate: baseUrl + "/web/api/v1/student/categories/create",
        categoriesSearch: baseUrl + "/web/api/v1/student/categories/search"
    }
};