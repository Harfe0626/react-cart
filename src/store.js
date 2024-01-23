/* eslint-disable */

import { configureStore, createSlice } from "@reduxjs/toolkit";

const user = createSlice({
    name: "user",
    initialState: { name: "SHIN", age: 26 },
  });

const cart = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    plusCount(state, action) {
      const i = state.findIndex((product) => product.id === action.payload);
      state[i].count += 1;
    },
    minusCount(state, action) {
      const i = state.findIndex((product) => product.id === action.payload);
      if (state[i].count > 1) {
        state[i].count -= 1;
      }
      else {
        state.splice(i, 1);
      }
    },
    addItem(state, action) {
      const pd = {
        id: action.payload.id,
        name: action.payload.title,
        src: action.payload.src,
        ratePrice: action.payload.ratePrice,
        sellPrice: action.payload.sellPrice,
        count: 1,
      };
      state.push(pd);
    },
    deleteItem(state, action) {
      const i = state.findIndex((product) => product.id === action.payload);
    },
  },
});

export const { plusCount, minusCount, addItem, deleteItem } = cart.actions;

export default configureStore({
  reducer: {
    user: user.reducer,
    cart: cart.reducer,
  },
});