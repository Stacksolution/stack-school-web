import { ApiConfig, tokenHeader } from "../config/ApiConfig";

class StudentsCategoriseDataService {

    getStudentCategories = async () => {
        const response = await fetch(ApiConfig.student.categories, {
            method: 'GET',
            headers: tokenHeader,
        });
        const result = await response.json();
        return result;
    }

    searchStudentCategories = async (values) => {
        const response = await fetch(ApiConfig.student.categoriesSearch, {
            method: 'POST',
            headers: tokenHeader,
            body: JSON.stringify(values)
        });
        const result = await response.json();
        return result;
    }
    createStudentCategory = async (values) => {
        const response = await fetch(ApiConfig.student.categoriesCreate, {
            method: 'POST',
            headers: tokenHeader,
            body: JSON.stringify(values)
        });
        const result = await response.json();
        return result;
    }
}
export default StudentsCategoriseDataService;