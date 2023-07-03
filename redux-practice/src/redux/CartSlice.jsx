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
      const nextState = state.filter((todo) => {
        return todo.id !== Number(action.payload);
      });
      return nextState;
    },
  },
});

export const { addCart, deleteCart } = CartSlice.actions;
export default CartSlice.reducer;
