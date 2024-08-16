import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "../../slice/authSlice";
import { trelloCloneReducer } from "../../slice/slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    trello:trelloCloneReducer,

  },
});
