import { combineReducers } from 'redux';
import { loginReducer } from "./Reducer/LoginReducer"
const rootReducer = combineReducers({
    loginInfo: loginReducer
})

export default rootReducer;