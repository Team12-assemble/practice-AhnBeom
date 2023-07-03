import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../redux/CountStore";

export default function ReduxCounter() {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.CountStore);
  return (
    <div>
      <h1>숫자 세기</h1>
      <p>count: {count}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(reset())}>reset</button>
    </div>
  );
}
