import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./reducers/AuthSlice";

export const store = configureStore({
  reducer: {
    auth: AuthSlice,
  },
});
