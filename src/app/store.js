import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer, authSlice } from "./reducer";

export const store = configureStore({
  reducer: contactsReducer,
});
