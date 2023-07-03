import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import CountStore from "./CountStore";
import AuthSlice from "./AuthSlice";
import todoSlice from "./TodoSlice";

const logger = createLogger();

const store = configureStore({
  reducer: {
    CountStore: CountStore,
    AuthSlice: AuthSlice,
    todoSlice: todoSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
