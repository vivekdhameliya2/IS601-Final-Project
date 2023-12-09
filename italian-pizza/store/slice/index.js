import { combineReducers } from "@reduxjs/toolkit";
import homeSlice from "./home.slice";

const rootReducer = combineReducers({
  home: homeSlice,
});

export default rootReducer;