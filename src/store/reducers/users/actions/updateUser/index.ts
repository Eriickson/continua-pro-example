import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import { apiService } from "@/settings";

import { InitialState } from "../..";
import { UpdateUserArgs } from "@continuapro/redux";

export const updateUser = createAsyncThunk("users/update", async ({ id, user }: UpdateUserArgs) =>
  apiService({
    method: "put",
    url: `/users/${id}`,
    data: { user },
  })
);

export const updateUserReducers: any = {
  [updateUser.pending.type]: (state: InitialState) => {
    state.updateUser.isLoading = true;
  },
  [updateUser.rejected.type]: (state: InitialState) => {
    state.updateUser.isLoading = false;
  },
  [updateUser.fulfilled.type]: (state: InitialState, { payload }: PayloadAction<any>) => {
    state.updateUser.isLoading = false;
    state.updateUser.data = payload.data.data;
    state.users = state.users.map((user) => (user.id === payload.data.data.id ? payload.data.data : user));
  },
};
