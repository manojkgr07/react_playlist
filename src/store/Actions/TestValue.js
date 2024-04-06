import { TEST_VALUE } from "../ActionTypes";

export function checkTestVal(data){
    return{
        type: TEST_VALUE,
        data

    }
}