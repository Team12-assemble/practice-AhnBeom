import React, { useState } from "react";

const TodoAdd = ({ setTodo, setTodos, todos, todo }) => {
  const onChangeInput = (e) => {
    setTodo(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={todo} onChange={onChangeInput} />
      <button type="submit">add</button>
    </form>
  );
};

export default function TodoList() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <section>
      <TodoAdd
        setTodos={setTodos}
        setTodo={setTodo}
        todo={todo}
        todos={todos}
      />
      <ul>
        {todos.map((todo, i) => (
          <li key={i}>{todo}</li>
        ))}
      </ul>
    </section>
  );
}
