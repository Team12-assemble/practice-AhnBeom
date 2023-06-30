import { useReducer } from "react";
const initial = 0;

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "RESET":
      return initial;
    default:
      return;
  }
};
export default function CountReducer() {
  const [count, dispatch] = useReducer(reducer, initial);
  return (
    <div>
      <p>{count}</p>
      <div>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
      </div>
      <button onClick={() => dispatch({ type: "RESET" })}>reset</button>
    </div>
  );
}
