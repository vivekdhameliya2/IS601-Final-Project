import { createSlice } from "@reduxjs/toolkit";
import ReactGA from "react-ga4";

const initialState = {
  cart: [],
};

const pizzaSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action?.payload?.formData
        ? action.payload.product
        : action.payload;
      const formData = action?.payload?.formData || {};
      ReactGA.event({
        category: "Ecommerce",
        action: "add_to_cart",
        label: product.title,
        value: product.fileName.replace(".md", ""),
      });
      state.cart.push({
        uniqueId: product.fileName,
        product,
        totalPrice: formData.totalPrice || product.price,
        qty: formData.qty || 1,
        size: formData.size || 1,
      });
    },
    updateCart: (state, action) => {
      const { name, value, product } = action.payload;
      const index = state.cart.findIndex(
        (data) => data.uniqueId === product.uniqueId
      );
      state.cart[index][name] = +value;
      const totalPrice =
        +state.cart[index].product.price *
        +state.cart[index].size *
        (+state.cart[index].qty || 1);
      state.cart[index]["totalPrice"] = totalPrice;
    },
    removeCart: (state, action) => {
      const index = state.cart.findIndex(
        (data) => data.uniqueId === action.payload.id
      );
      ReactGA.event({
        category: "Ecommerce",
        action: "remove_from_cart",
        label: state.cart[index].product.title,
        value: state.cart[index].product.fileName.replace(".md", ""),
      });
      state.cart.splice(index, 1);
    },
    clearCart: (state, action) => {
      state.cart = [];
    },
  },
});

export const { addToCart, updateCart, removeCart, clearCart } =
  pizzaSlice.actions;

export default pizzaSlice.reducer;