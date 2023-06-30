import io from "socket.io-client";
import { useState } from "react";
import useForm from "../custom-hooks/useForm";

const socket = io("http://localhost:3001");

export default function LiveChat() {
  const [chats, setChats] = useState([]);
  const { values, handleChange } = useForm({
    name: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setChats([...chats, values.message]);
  };

  return (
    <section>
      <ul>
        {chats.map((message) => {
          return (
            <li>
              <label>{values.name}</label>: {message}
            </li>
          );
        })}
      </ul>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} name="name" value={values.name} />
        <input onChange={handleChange} name="message" value={values.message} />
        <button type="submit">Enter</button>
      </form>
    </section>
  );
}
