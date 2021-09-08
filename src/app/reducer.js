import { createSlice } from "@reduxjs/toolkit";
import {
  register,
  logout,
  login,
  fetchCurrentUser,
  getContacts,
} from "./operations";

const defaultState = {
  contacts: {
    items: [],
    filter: "",
  },
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

export const mainSlice = createSlice({
  name: "main",
  initialState: defaultState,
  reducers: {
    setItems: (state, action) => {
      state.contacts.items = [...action.payload];
    },
    setFilter: (state, action) => {
      state.contacts.filter = action.payload;
    },
    deleteItem: (state, action) => {
      state.contacts.items = state.contacts.items.filter(
        (item) => item.id !== action.payload
      );
    },
  },
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [login.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logout.fulfilled](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    [getContacts.fulfilled](state, action) {
      state.contacts.items = action.payload;
    },
  },
});

export const { setItems, setFilter, deleteItem } = mainSlice.actions;
