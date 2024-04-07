import { DELETE } from "../ActionTypes";

export function deleteProduct(data){
    
    return{
        type: DELETE,
        data,
       
    }
}