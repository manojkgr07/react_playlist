import { put, take, takeLatest, takeEvery } from '@redux-saga/core/effects';
import {PRODUCT_DETAILS,PRODUCT_DETAILS_FAILURE,PRODUCT_DETAILS_SUCCESS} from '../ActionTypes';
import {getRequest, postRequest} from '../../services/Request';
import { Apis } from '../../config/Apis';


function* getProductDetails(action){
    try{
        const response = yield getRequest(Apis.productList+`/${action.data}`);
        console.log("The response from json is*****");
        console.log(response.data);
        yield put({
            type: PRODUCT_DETAILS_SUCCESS,
            response: response.data,
          });
    }
    catch(error){
        console.log(error);
        yield put({
            type: PRODUCT_DETAILS_FAILURE,
            message: error,
          });
    }

}




export default function* mySaga(){
    yield takeEvery(PRODUCT_DETAILS,getProductDetails);
   
}