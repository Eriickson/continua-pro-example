import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import { apiService } from "@/settings";

import { InitialState } from "../..";
import { CreateUserArgs } from "@continuapro/redux";

export const createUser = createAsyncThunk("users/create", async ({ user }: CreateUserArgs) =>
  apiService({ method: "post", url: "/users", data: { user } })
);

export const createUserReducers: any = {
  [createUser.pending.type]: (state: InitialState) => {
    state.createUser.isLoading = true;
  },
  [createUser.rejected.type]: (state: InitialState) => {
    state.createUser.isLoading = false;
  },
  [createUser.fulfilled.type]: (state: InitialState, { payload }: PayloadAction<any>) => {
    state.createUser.isLoading = false;
    state.users = [...state.users, payload.data.data];
  },
};
