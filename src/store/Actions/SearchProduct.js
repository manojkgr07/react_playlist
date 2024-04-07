import { SEARCH } from "../ActionTypes";

export function serachProduct(data){
    
    return{
        type: SEARCH,
        data,
       
    }
}