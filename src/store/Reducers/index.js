// reducers.js
import { combineReducers } from '@reduxjs/toolkit';
import tripReducer from './createSlice';
// Import other reducers

const rootReducer = combineReducers({
    trip:tripReducer
  // Other reducers go here
});

export default rootReducer;
