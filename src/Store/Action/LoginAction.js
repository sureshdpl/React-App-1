import { StoreConstants } from "../StoreConstants";

export function loginSuccss(response,loginType) {
    return {
        type: StoreConstants.LOGIN_SUCCESS,
        response,
        loginType
    }
}

export function loginFailed(response,faildMessage) {
    return {
        type: StoreConstants.LOGIN_FAILED,
        response,
        faildMessage
    }
}