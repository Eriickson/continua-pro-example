import { apiService } from "@/settings";
import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { InitialState } from "../..";

interface DeleteUserArgs {
  id: number;
}

export const deleteUser = createAsyncThunk("users/delete", async ({ id }: DeleteUserArgs) =>
  apiService({ method: "delete", url: `/users/${id}` })
);

export const deleteUserReducers: any = {
  [deleteUser.pending.type]: (state: InitialState) => {
    state.deleteUser.isLoading = true;
  },
  [deleteUser.rejected.type]: (state: InitialState) => {
    state.deleteUser.isLoading = false;
  },
  [deleteUser.fulfilled.type]: (state: InitialState, payload: PayloadAction<any>) => {
    state.deleteUser.isLoading = false;
    state.users = state.users.filter((user) => user.id !== (payload as any).meta.arg.id);
  },
};
