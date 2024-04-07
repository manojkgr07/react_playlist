import { PROFILE } from "../ActionTypes";

export function userProfile(data,token){
    console.log("Checking**********");
    console.log(data);
    return{
        type: PROFILE,
        data,
        token

    }
}