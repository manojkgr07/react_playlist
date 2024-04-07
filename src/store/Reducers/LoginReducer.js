import { LOGIN, LOGIN_FAILURE, LOGIN_SUCCESS } from "../ActionTypes";

const initialState = {
    loginloading: false,
    loginStatus: false,
    loginError: false,
    loginResponse: null,
};

export default function productListReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN: {
            return {
                ...state,
                loginloading: true,
                loginStatus: false,
                loginError: false,
               

            }
        }
        case LOGIN_SUCCESS: {
            return {
                ...state,
                loginloading: false,
                loginStatus: true,
                loginError: false,
                loginResponse: action.response,
            }
        }
        case LOGIN_FAILURE: {
            return {
                ...state,
                loginloading: false,
                loginStatus: false,
                loginError: true,
                
            }
        }

        default: return {
            state
        }
    }
}