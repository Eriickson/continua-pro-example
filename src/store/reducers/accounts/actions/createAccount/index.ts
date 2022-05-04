import { createAsyncThunk } from "@reduxjs/toolkit";

import { apiService } from "@/settings";

import { InitialState } from "../..";
import { FnReducer } from "@continuapro/redux";
import { Account } from "@continuapro/entity";

interface CreateAccountArgs {
  account: any;
}

export const createAccount = createAsyncThunk("accounts/create", async ({ account }: CreateAccountArgs) =>
  apiService({ method: "post", url: "/accounts", data: { account } })
);

export const createAccountReducers: FnReducer<InitialState, Account> = {
  [createAccount.pending.type]: (state) => {
    state.createAccount.isLoading = true;
  },
  [createAccount.rejected.type]: (state) => {
    state.createAccount.isLoading = false;
  },
  [createAccount.fulfilled.type]: (state, { payload }) => {
    state.createAccount.isLoading = false;
    state.accounts = [...state.accounts, payload.data.data];
    state.createAccount.data = payload.data.data;
  },
};
