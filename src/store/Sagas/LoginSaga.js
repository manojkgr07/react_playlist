import { put, take, takeLatest, takeEvery } from '@redux-saga/core/effects';
import {LOGIN,LOGIN_SUCCESS,LOGIN_FAILURE} from '../ActionTypes';
import {getRequest, postRequest} from '../../services/Request';
import { Apis } from '../../config/Apis';

function* loginuser(action){
    try{
        const response = yield postRequest(Apis.login,action.data);
        console.log("The response from json is*****");
        console.log(response.data);
        yield put({
            type: LOGIN_SUCCESS,
            response: response.data,
          });
    }
    catch(error){
        console.log(error);
        yield put({
            type: LOGIN_FAILURE,
            message: error,
          });
    }

}




export default function* mySaga(){
    yield takeEvery(LOGIN,loginuser);
   
}