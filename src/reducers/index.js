import { combineReducers } from '@reduxjs/toolkit';

import locationSlice from './locationSlice';

const rootReducer = combineReducers({
  location: locationSlice
});

export default rootReducer;
