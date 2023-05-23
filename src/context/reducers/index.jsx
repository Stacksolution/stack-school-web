import toggleReducer from "./ToggleReducer";
import authReducer from "./AuthReducer.jsx";

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    toggleReducer,
    authReducer
});
export default rootReducer;