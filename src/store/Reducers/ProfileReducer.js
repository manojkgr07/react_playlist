import { PROFILE, PROFILE_SUCCESS, PROFILES_FAILURE } from "../ActionTypes";

const initialState = {
    profileloading: false,
    profileStatus: false,
    profileError: false,
    profileResponse: null,
};

export default function userProfileReducer(state = initialState, action) {
    switch (action.type) {
        case PROFILE: {
            return {
                ...state,
                profileloading: true,
                profileStatus: false,
                profileError: false,



            }
        }
        case PROFILE_SUCCESS: {
            return {
                ...state,
                profileloading: false,
                profileStatus: true,
                profileError: false,
                profileResponse: action.response,
            }
        }
        case PROFILES_FAILURE: {
            return {
                ...state,
                profileloading: false,
                profileStatus: false,
                profileError: true,


            }
        }

        default: return {
            state
        }
    }
}