import { createReducer, createSlice } from "@reduxjs/toolkit";
import { setItems, setFilter, deleteItem } from "./actions";
import { register, logOut, logIn, fetchCurrentUser } from "./operations";

const defaultContactsState = {
  contacts: {
    items: [],
    filter: "",
  },
};

const defaultAuthState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

export const contactsReducer = createReducer(defaultContactsState, {
  [setItems](state, action) {
    return {
      ...state,
      contacts: { items: [...action.payload], filter: state.contacts.filter },
    };
  },

  [setFilter](state, action) {
    return {
      ...state,
      contacts: { items: [...state.contacts.items], filter: action.payload },
    };
  },

  [deleteItem](state, action) {
    return {
      ...state,
      contacts: {
        items: state.contacts.items.filter(
          (item) => item.id !== action.payload
        ),
        filter: state.contacts.filter,
      },
    };
  },
});

export const authSlice = createSlice({
  name: "auth",
  defaultAuthState,
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logOut.fulfilled](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
  },
});
