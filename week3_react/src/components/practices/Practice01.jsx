import React, { useState } from "react";

function PasswordInput({ setPassword, loginInfo }) {
  const HandlePassword = (e) => {
    setPassword({
      ...loginInfo,
      password: e.target.value,
    });
  };

  return <input type="password" required onChange={HandlePassword} />;
}

function AdminInput({ setAdmin, loginInfo }) {
  const HandleAdmin = (e) => {
    setAdmin({
      ...loginInfo,
      admin: e.target.value,
    });
  };
  return <input required onChange={HandleAdmin} />;
}

function LoginSubmit({ admin, password, children }) {
  const userInfo = {
    admin: "admin",
    password: "password",
  };
  const HandleSubmit = (event) => {
    if (userInfo.admin === admin && userInfo.password === password) {
      alert("로그인 성공!");
    } else {
      event.preventDefault();
      alert("로그인에 실패했습니다.");
    }
  };
  return <form onSubmit={HandleSubmit}>{children}</form>;
}

export default function LoginForm() {
  const [login, setLogin] = useState({
    admin: "",
    password: "",
  });

  return (
    <LoginSubmit admin={login.admin} password={login.password}>
      <label>사용자명:</label>
      <AdminInput loginInfo={login} setAdmin={setLogin} />
      <label>비밀번호:</label>
      <PasswordInput loginInfo={login} setPassword={setLogin} />
      <button type="submit">로그인</button>
    </LoginSubmit>
  );
}
