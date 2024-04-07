import { put, take, takeLatest, takeEvery } from '@redux-saga/core/effects';
import {SEARCH,SEARCH_SUCCESS,SEARCH_FAILURE} from '../ActionTypes';
import {getRequest, postRequest} from '../../services/Request';
import { Apis } from '../../config/Apis';

function* searchList(action){
    try{
        const response = yield getRequest(Apis.searchList+`?q=${action.data}`);
        console.log("The response from json is*****");
        console.log(response.data);
        yield put({
            type: SEARCH_SUCCESS,
            response: response.data.products,
          });
    }
    catch(error){
        console.log(error);
        yield put({
            type: SEARCH_FAILURE,
            message: error,
          });
    }

}




export default function* mySaga(){
    yield takeEvery(SEARCH,searchList);
   
}