import { PRODUCT_DETAILS } from "../ActionTypes";

export function getProductDetail(data){
    return{
        type: PRODUCT_DETAILS,
        data
    }
}