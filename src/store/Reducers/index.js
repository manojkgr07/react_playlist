// reducers.js
import { combineReducers } from '@reduxjs/toolkit';

import testReducer from './TestReducer';
import productListReducer from './ProductlistReducer';
import productdetailsReducer from './ProductdetailReducer';
import LoginReducer from './LoginReducer';
import userProfileReducer from './ProfileReducer';
import searchReducer from './searchReducer';
import DeleteReducer from './DeleteReducer';
// Import other reducers

const rootReducer = combineReducers({

    testval:testReducer,
    productList:productListReducer,
    productDetails:productdetailsReducer,
    login:LoginReducer,
    profile:userProfileReducer,
    search:searchReducer,
    delete:DeleteReducer
  // Other reducers go here
});

export default rootReducer;



