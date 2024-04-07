import { put, take, takeLatest, takeEvery } from '@redux-saga/core/effects';
import {PROFILE,PROFILES_FAILURE,PROFILE_SUCCESS} from '../ActionTypes';
import {getRequestwithtoken, postRequest} from '../../services/Request';
import { Apis } from '../../config/Apis';

function* userProfile(action){
    try{
        const response = yield getRequestwithtoken(Apis.profile,action.token);
        console.log("The response from json is*****");
        console.log(response.data);
        yield put({
            type: PROFILE_SUCCESS,
            response: response.data,
          });
    }
    catch(error){
        console.log(error);
        yield put({
            type: PROFILES_FAILURE,
            message: error,
          });
    }

}




export default function* mySaga(){
    yield takeEvery(PROFILE,userProfile);
   
}