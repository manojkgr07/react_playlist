import {
  
    PRODUCT_DETAILS, PRODUCT_DETAILS_FAILURE, PRODUCT_DETAILS_SUCCESS
} from "../ActionTypes";

const initialState = {
  
    productDetailsloading: false,
    productDetailsStatus: false,
    productDetailsError: false,
    productDetailsResponse: null,
};

export default function productListReducer(state = initialState, action) {
    switch (action.type) {
        case PRODUCT_DETAILS: {
            return {
                ...state,
                pproductDetailsloading: true,
                productDetailsStatus: false,
                productDetailsError: false,
                

            }
        }
        case PRODUCT_DETAILS_SUCCESS: {
            return {
                ...state,
                productDetailsloading: false,
                productDetailsStatus: true,
                productDetailsError: false,
                productDetailsResponse: action.response,
            }
        }
        case PRODUCT_DETAILS_FAILURE: {
            return {
                ...state,
                productDetailsloading: false,
                productDetailsStatus: false,
                productDetailsError: true,
                
            }
        }
        
        default: return {
            state
        }
    }
}