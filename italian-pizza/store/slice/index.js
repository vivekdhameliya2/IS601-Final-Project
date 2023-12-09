import { combineReducers } from "@reduxjs/toolkit";
import pizzaSlice from "./pizza.slice";

const rootReducer = combineReducers({
  pizza: pizzaSlice,
});

export default rootReducer;