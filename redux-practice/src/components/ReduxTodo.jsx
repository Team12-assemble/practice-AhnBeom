import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, deleteTodo } from "../redux/TodoSlice";

export default function ReduxTodo() {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todoSlice);

  const [todo, setTodo] = useState({
    id: 0,
    text: "",
  });

  function handleText(e) {
    setTodo({ text: e.target.value });
  }

  function onReset() {
    setTodo({ text: "" });
  }

  const addTodo = (e) => {
    if (todo.text !== "") {
      dispatch(add({ id: Date.now(), text: todo.text }));
      onReset();
    }
  };

  // console.log(todoList);

  return (
    <div>
      <input value={todo.text} onChange={handleText}></input>
      <button onClick={addTodo}>추가</button>
      <ul>
        {todoList.map((item, i) => (
          <li key={i}>
            <div>
              <>{item.text}</>
            </div>
            <button
              id={item.id}
              onClick={(e) => {
                // dispatch(deleteTodo({ id: e.target.id }));
                dispatch(deleteTodo(e.target.id));
              }}
            >
              삭제
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
