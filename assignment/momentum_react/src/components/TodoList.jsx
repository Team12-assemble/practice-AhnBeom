import { useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([]);

  const handleTodoSubmit = (event) => {
    event.preventDefault();
    setTodos([...todos, event.target[0].value]);
  };

  const handleDelete = (e) => {
    const target = e.target.parentNode.parentNode;
    target.remove();
  };

  return (
    <section className="todo-section">
      <form onSubmit={handleTodoSubmit} className="todo-form">
        <input
          maxLength={30}
          type="text"
          required
          placeholder="Add your todoList"
        />
        <button>Add</button>
      </form>
      {todos && (
        <ul className="todoList">
          {todos.map((todo, i) => (
            <li key={i}>
              <span>{todo}</span>
              <button>
                <i className="fa-solid fa-check" onClick={handleDelete}></i>
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
