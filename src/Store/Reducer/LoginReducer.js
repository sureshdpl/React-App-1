import { act } from "react-dom/cjs/react-dom-test-utils.production.min";
import { StoreConstants } from "../StoreConstants"

export function loginReducer(state = {}, action) {
    switch (action.type) {
        case StoreConstants.LOGIN_SUCCESS: {
            return {
                ...state,
                isLogin: true,
                data: action.response,
                loginType: action.loginType
            };
        }
        case StoreConstants.LOGIN_FAILED: {
            return {
                ...state,
                isLogin: false,
                data: action.response,
                message:action.failedMessage
            };
        }
        default:
            return state;


    }

}