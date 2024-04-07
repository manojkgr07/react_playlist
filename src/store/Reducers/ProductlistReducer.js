import {
    PRODUCT_LIST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAILURE,
} from "../ActionTypes";

const initialState = {
    productListloading: false,
    productListStatus: false,
    productListError: false,
    productListResponse: null,
};

export default function productListReducer(state = initialState, action) {
    switch (action.type) {
        case PRODUCT_LIST: {
            return {
                ...state,
                productListloading: true,
                productListStatus: false,
                productListError: false,

            }
        }
        case PRODUCT_LIST_SUCCESS: {
            return {
                ...state,
                productListloading: false,
                productListStatus: true,
                productListError: false,
                productListResponse: action.response,
            }
        }
        case PRODUCT_LIST_FAILURE: {
            return {
                ...state,
                productListloading: false,
                productListStatus: false,
                productListError: true,
            }
        }
        
        default: return {
            state
        }
    }
}