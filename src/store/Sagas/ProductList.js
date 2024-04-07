import { put, take, takeLatest, takeEvery } from '@redux-saga/core/effects';
import { PRODUCT_LIST,PRODUCT_LIST_FAILURE,PRODUCT_LIST_SUCCESS} from '../ActionTypes';
import {getRequest, postRequest} from '../../services/Request';
import { Apis } from '../../config/Apis';


function* getProductList(action){
    try{
        const response = yield getRequest(Apis.productList);
        console.log("The response from json is*****");
        console.log(response.data);
        yield put({
            type: PRODUCT_LIST_SUCCESS,
            response: response.data.products,
          });
    }
    catch(error){
        console.log(error);
        yield put({
            type: PRODUCT_LIST_FAILURE,
            message: error,
          });
    }

}




export default function* mySaga(){
    yield takeEvery(PRODUCT_LIST,getProductList);
   
}