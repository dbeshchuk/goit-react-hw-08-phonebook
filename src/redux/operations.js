import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const register = createAsyncThunk("register", async (credentials) => {
  try {
    const { data } = await axios.post("/users/signup", credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log(error.message);
  }
});

export const login = createAsyncThunk("login", async (credentials) => {
  try {
    const { data } = await axios.post("/users/login", credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log(error.message);
  }
});

export const logout = createAsyncThunk("logout", async () => {
  try {
    await axios.post("/users/logout");
    token.unset();
  } catch (error) {
    console.log(error.message);
  }
});

export const fetchCurrentUser = createAsyncThunk(
  "refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);

    try {
      const { data } = await axios.get("/users/current");
      return data;
    } catch (error) {
      console.log(error.message);
      return thunkAPI.rejectWithValue();
    }
  }
);

export const getContacts = createAsyncThunk("getContacts", async () => {
  try {
    const { data } = await axios.get(`/contacts`);
    return data;
  } catch (error) {
    console.log(error.message);
  }
});

export const postContact = createAsyncThunk("postContact", async (contact) => {
  try {
    const { data } = await axios.post(`/contacts`, contact);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error.message);
  }
});

export const deleteContact = createAsyncThunk("deleteContact", async (id) => {
  try {
    await axios.delete(`/contacts/${id}`);
  } catch (error) {
    console.log(error.message);
  }
});
