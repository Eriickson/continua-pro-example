import { apiService } from "@/settings";
import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { InitialState } from "../..";

export const getUsers = createAsyncThunk("users/get", async () =>
  apiService({
    method: "get",
    url: "/users",
  })
);

export const getUsersReducers: any = {
  [getUsers.pending.type]: (state: InitialState) => {
    state.getUsers.isLoading = true;
  },
  [getUsers.rejected.type]: (state: InitialState) => {
    state.getUsers.isLoading = false;
  },
  [getUsers.fulfilled.type]: (state: InitialState, { payload }: PayloadAction<any>) => {
    state.getUsers.isLoading = false;
    state.users = payload.data.data;
    state.getUsers.data = payload.data.data;
  },
};
