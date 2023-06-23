import React from "react";

const HandleTodo = ({ todos, todos2 }) => {
  return (
    <>
      <ul>
        {todos.map((list) => {
          return <li>{list.text}</li>;
        })}
      </ul>
      <ul>
        {todos2.map((list) => {
          return <li>{list.text}</li>;
        })}
      </ul>
    </>
  );
};

export default function TodoList() {
  const todos = [
    { id: 1, text: "할 일 목록 1" },
    { id: 2, text: "할 일 목록 2" },
    { id: 3, text: "할 일 목록 3" },
    { id: 4, text: "할 일 목록 4" },
    { id: 5, text: "할 일 목록 5" },
  ];
  const todos2 = [
    { id: 1, text: "마루는강쥐 1" },
    { id: 2, text: "마루는강쥐 2" },
    { id: 3, text: "마루는강쥐 3" },
    { id: 4, text: "마루는강쥐 4" },
    { id: 5, text: "마루는강쥐 5" },
  ];

  return <HandleTodo todos={todos} todos2={todos2}></HandleTodo>;
}
