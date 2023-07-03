import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../redux/AuthSlice";

export default function AuthApp() {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state.AuthSlice);

  const toggleAuth = () => {
    if (auth.state !== true) {
      dispatch(login());
    } else {
      dispatch(logout());
    }
  };

  return (
    <div>
      <p>로그인{auth.content}</p>
      <button onClick={toggleAuth}>{auth.btn}</button>
    </div>
  );
}
