// reducers.js
import { combineReducers } from '@reduxjs/toolkit';

import testReducer from './TestReducer';
// Import other reducers

const rootReducer = combineReducers({

    testval:testReducer
  // Other reducers go here
});

export default rootReducer;



