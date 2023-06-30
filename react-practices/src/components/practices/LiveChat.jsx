import io from "socket.io-client";
import { useEffect, useState } from "react";

// node server.js 실행 우선
const socket = io("http://localhost:3001");

export default function LiveChat() {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [chats, setChats] = useState([]);

  useEffect(() => {
    socket.on("message", handleMessage);
    return () => {
      socket.off("message", handleMessage);
    };
  }, []);

  const handleMessage = (message) => {
    setChats((prev) => [...prev, message]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() !== "") {
      const currentTime = new Date().toLocaleDateString();
      socket.emit("message", {
        username,
        content: message,
        time: currentTime,
      });

      setMessage("");
    }
  };

  return (
    <section>
      <h1>실시간 채팅</h1>
      <input
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        name="username"
        value={username}
        placeholder="사용자 이름을 입력해주세요."
      />
      <ul>
        {chats.map((chat, i) => {
          return (
            <li key={i}>
              <label>{chat.username}</label>: {chat.content} - {chat.time}
            </li>
          );
        })}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          name="message"
          value={message}
        />
        <button type="submit">Enter</button>
      </form>
    </section>
  );
}
