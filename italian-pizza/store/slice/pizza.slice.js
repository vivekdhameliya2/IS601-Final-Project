import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allPizza: [],
};

const pizzaSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setAllPizza: (state, action) => {
      state.allPizza = action.payload;
    },
  },
});

export const { setAllPizza } = pizzaSlice.actions;

export default pizzaSlice.reducer;