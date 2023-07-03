import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const todoSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    add: (state, action) => {
      console.log(action.payload);
      return [
        ...state,
        {
          id: action.payload.id,
          text: action.payload.text,
          complete: false,
        },
      ];
    },
    deleteTodo: (state, action) => {
      console.log(action.payload);
      const nextState = state.filter((todo) => {
        // todo.id는 Date.now()로 생성되어 number 타입이지만, action.payload는 e.target.id로 들어가면서 string type이 되었다.
        // console.log(todo.id, action.payload);
        // console.log(todo.id !== action.payload);
        return todo.id !== Number(action.payload);
      });
      // console.log(nextState);
      return nextState;
    },
  },
});

export const { add, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
