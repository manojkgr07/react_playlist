import { PRODUCT_LIST,PRODUCT_DETAILS } from "../ActionTypes";

export function getProductList(data){
    return{
        type: PRODUCT_LIST,
        data
    }
}

