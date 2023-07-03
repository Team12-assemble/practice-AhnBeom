import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // 필요한 reducer 함수들 저장
    addCart: (state, action) => {
      state.cart = [
        ...state.cart,
        {
          id: action.payload.id,
          name: action.payload.name,
          price: action.payload.price,
        },
      ];
    },
    deleteCart: (state, action) => {
      state.cart = state.cart.filter((item) => {
        return item.id !== Number(action.payload);
      });
    },
  },
});

export const { addCart, deleteCart } = CartSlice.actions;
export default CartSlice.reducer;
