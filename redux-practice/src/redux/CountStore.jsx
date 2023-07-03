import { createSlice } from "@reduxjs/toolkit";

const initial = {
  count: 0,
};

const CountSlice = createSlice({
  name: "counter",
  initialState: initial,
  reducers: {
    // 필요한 reducer 함수들 저장
    increment: (state) => {
      state.count = state.count + 1;
    },
    decrement: (state) => {
      state.count = state.count - 1;
    },
    reset: () => {
      return initial;
    },
  },
});

export const { increment, decrement, reset } = CountSlice.actions;
export default CountSlice.reducer;
