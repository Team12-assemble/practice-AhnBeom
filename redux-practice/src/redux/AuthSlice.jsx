import { createSlice } from "@reduxjs/toolkit";

const initial = {
  auth: {
    state: false,
    btn: "로그인",
    content: "되지 않았습니다.",
  },
};

const AuthSlice = createSlice({
  name: "auth",
  initialState: initial,
  reducers: {
    // 필요한 reducer 함수들 저장
    login: (state) => {
      state.auth.state = true;
      state.auth.btn = "로그아웃";
      state.auth.content = "상태입니다.";
    },
    logout: (state) => {
      state.auth.state = false;
      state.auth.btn = "로그인";
      state.auth.content = "되지 않았습니다.";
    },
  },
});

export const { login, logout } = AuthSlice.actions;
export default AuthSlice.reducer;
