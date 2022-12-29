import { createSlice } from "@reduxjs/toolkit";

const localData = () => {
  let storeData = localStorage.getItem("cartData");
  if (storeData === []) {
    return [];
  } else {
    return JSON.parse(storeData);
  }
};

const initialState = {
  products: localData(),
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
    },
    removeItem: (state, action) => {
      state.products = state.products.filter((item) => item.id !== action.payload);
    },
    resetCart: (state) => {
      state.products = [];
    },
  },
});

console.log(cartSlice);
export const { addToCart, removeItem, resetCart } = cartSlice.actions;
export default cartSlice.reducer;
