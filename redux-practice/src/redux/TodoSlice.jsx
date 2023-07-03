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
        console.log(todo.id, action.payload);
        console.log(todo.id !== action.payload);
        return todo.id !== Number(action.payload);
      });
      console.log(nextState);
      return nextState;
    },
  },
});

export const { add, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
