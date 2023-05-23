import { ApiConfig } from "../config/ApiConfig";

class AuthDataService {

    login = async (data) => {
        const response = await fetch(ApiConfig.auth.signin, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const result = await response.json();
        return result;
    }

}
export default AuthDataService;