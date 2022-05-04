import { apiService } from "@/settings";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { FnReducer } from "@continuapro/redux";

import { InitialState } from "../..";
import { Account } from "@continuapro/entity";

interface DeleteAccountArgs {
  id: number;
}

export const deleteAccount = createAsyncThunk("accounts/delete", async ({ id }: DeleteAccountArgs) =>
  apiService({ method: "delete", url: `/accounts/${id}` })
);

export const deleteAccountReducers: FnReducer<InitialState, Account> = {
  [deleteAccount.pending.type]: (state) => {
    state.deleteAccount.isLoading = true;
  },
  [deleteAccount.rejected.type]: (state) => {
    state.deleteAccount.isLoading = false;
  },
  [deleteAccount.fulfilled.type]: (state, { payload, meta }) => {
    state.deleteAccount.isLoading = false;
    state.deleteAccount.data = payload.data.data;
    state.accounts = state.accounts.filter((item) => item.id !== meta.arg.id);
  },
};
