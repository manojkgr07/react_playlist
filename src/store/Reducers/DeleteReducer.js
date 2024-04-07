import { DELETE, DELETE_SUCCESS, DELETE_FAILURE } from "../ActionTypes";

const initialState = {
    deleteloading: false,
    deleteStatus: false,
    deleteError: false,
    deleteResponse: null,
};

export default function productListReducer(state = initialState, action) {
    switch (action.type) {
        case DELETE: {
            return {
                ...state,
                deleteloading: true,
                deleteStatus: false,
                deleteError: false,

            }
        }
        case DELETE_SUCCESS: {
            return {
                ...state,
                deleteloading: false,
                deleteStatus: true,
                deleteError: false,
                deleteResponse: action.response,
            }
        }
        case DELETE_FAILURE: {
            return {
                ...state,
                deleteloading: false,
                deleteStatus: false,
                deleteError: true,
               

            }
        }

        default: return {
            state
        }
    }
}