import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const pizzaSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      state.cart.push({
        uniqueId: product.fileName,
        product,
        price: product.price,
        qty: 1,
        size: 0.5,
      });
    },
  },
});

export const { addToCart } = pizzaSlice.actions;

export default pizzaSlice.reducer;
