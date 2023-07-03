import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import CountStore from "./CountStore";
import AuthSlice from "./AuthSlice";

const logger = createLogger();

const store = configureStore({
  reducer: {
    CountStore: CountStore,
    AuthSlice: AuthSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
