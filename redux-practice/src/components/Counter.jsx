import { useReducer } from "react";

const initial = 0;
const reducer = (state, action) => {
  switch (action.type) {
    case "COUNT_UP":
      return state + 1;
    case "COUNT_DOWN":
      return state - 1;
    case "RESET":
      return initial;
    default:
      return;
  }
};

export default function Counter() {
  const [count, dispatch] = useReducer(reducer, initial);
  // dispatch는 액션을 발생시키는 함수
  // reducer는
  return (
    <div>
      <h1>숫자 세기</h1>
      <p>count: {count}</p>
      <button onClick={() => dispatch({ type: "COUNT_UP" })}>+</button>
      <button onClick={() => dispatch({ type: "COUNT_DOWN" })}>-</button>
      <button onClick={() => dispatch({ type: "RESET" })}>reset</button>
    </div>
  );
}
