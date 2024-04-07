import { SEARCH, SEARCH_FAILURE, SEARCH_SUCCESS } from "../ActionTypes";

const initialState = {
    searchloading: false,
    searchStatus: false,
    searchError: false,
    searchResponse: null,
};

export default function userProfileReducer(state = initialState, action) {
    switch (action.type) {
        case SEARCH: {
            return {
                ...state,
                searchloading: true,
                searchStatus: false,
                searchError: false,
                



            }
        }
        case SEARCH_FAILURE: {
            return {
                ...state,
                searchloading: false,
                searchStatus: true,
                searchError: false,
                searchResponse: action.response,
            }
        }
        case SEARCH_SUCCESS: {
            return {
                ...state,
                searchloading: false,
                searchStatus: false,
                searchError: true,
                


            }
        }

        default: return {
            state
        }
    }
}