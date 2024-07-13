import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TCartItem } from "../../../types/types";

type TInitialState = {
  cart: TCartItem[];
};

const initialState: TInitialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<TCartItem>) => {
      const item = state.cart.find(
        (cartItem) => cartItem.id === action.payload.id
      );
      if (item) {
        item.quantity! += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.cart = state.cart.filter(
        (cartItem) => cartItem.id !== action.payload
      );
    },
    increaseQuantity: (state, action: PayloadAction<string>) => {
      const item = state.cart.find(
        (cartItem) => cartItem.id === action.payload
      );
      if (item) {
        item.quantity! += 1;
      }
    },
    decreaseQuantity: (state, action: PayloadAction<string>) => {
      const item = state.cart.find(
        (cartItem) => cartItem.id === action.payload
      );
      if (item && item.quantity! > 1) {
        item.quantity! -= 1;
      }
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
