import { useState } from "react";

function LoginForm({ setUsername, username }) {
  const onLoginSubmit = (event) => {
    event.preventDefault();
    setUsername(event.target[0].value);
    localStorage.setItem("username", event.target[0].value);
  };

  return (
    <form
      className={!username ? "login-form" : "hidden"}
      onSubmit={onLoginSubmit}
    >
      <input
        required
        maxLength={15}
        type="text"
        placeholder="What is your name?"
      ></input>
      <button className="hidden">Login</button>
    </form>
  );
}

function Hello({ username }) {
  return (
    <h1 className={!username ? "hidden" : "greeting"}>Hello, {username}</h1>
  );
}

export default function Greeting() {
  const [username, setUsername] = useState("");

  return (
    <>
      <LoginForm setUsername={setUsername} username={username} />
      <Hello username={username} />
    </>
  );
}
