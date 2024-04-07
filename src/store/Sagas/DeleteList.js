import { put, take, takeLatest, takeEvery } from '@redux-saga/core/effects';
import {DELETE,DELETE_FAILURE,DELETE_SUCCESS} from '../ActionTypes';
import {getRequest, postRequest,deleteRequest} from '../../services/Request';
import { Apis } from '../../config/Apis';

function* deleteList(action){
    try{
        const response = yield deleteRequest(Apis.deleteList+`/${action.data}`);
        console.log("The response from json is*****");
        console.log(response.data);
        yield put({
            type: DELETE_SUCCESS,
            response: response.data,
          });
    }
    catch(error){
        console.log(error);
        yield put({
            type: DELETE_FAILURE,
            message: error,
          });
    }

}




export default function* mySaga(){
    yield takeEvery(DELETE,deleteList);
   
}