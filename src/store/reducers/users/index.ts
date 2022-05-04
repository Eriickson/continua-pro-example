import { createSlice } from "@reduxjs/toolkit";

import { getUsersReducers } from "./actions/getUsers";
import { createUserReducers } from "./actions/createUser";
import { updateUserReducers } from "./actions/updateUser";
import { deleteUserReducers } from "./actions/deleteUser";
import { ItemsReducers } from "@continuapro/redux";
import { User } from "@continuapro/entity";

const initialStateItemReducer = {
  isLoading: false,
  data: [],
  err: null,
  hasError: false,
};

export interface InitialState {
  users: User[];
  getUsers: ItemsReducers<User[]>;
  createUser: ItemsReducers<User[]>;
  updateUser: ItemsReducers<User[]>;
  deleteUser: ItemsReducers<User[]>;
}
const initialState: InitialState = {
  users: [],
  getUsers: initialStateItemReducer,
  createUser: initialStateItemReducer,
  updateUser: initialStateItemReducer,
  deleteUser: initialStateItemReducer,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: { ...getUsersReducers, ...createUserReducers, ...updateUserReducers, ...deleteUserReducers },
});

export const { reducer } = userSlice;

export default userSlice.reducer;
