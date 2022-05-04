import { createAsyncThunk } from "@reduxjs/toolkit";

import { FnReducer } from "@continuapro/redux";
import { Account } from "@continuapro/entity";

import { apiService } from "@/settings";

import { InitialState } from "../..";

interface UpdateAccountArgs {
  id: number;
  account: Partial<Omit<Account, "id">>;
}

export const updateAccount = createAsyncThunk("accounts/update", async ({ id, account }: UpdateAccountArgs) =>
  apiService({ method: "put", url: `/accounts/${id}`, data: { account } })
);

export const updateAccountReducers: FnReducer<InitialState, Account> = {
  [updateAccount.pending.type]: (state) => {
    state.updateAccount.isLoading = true;
  },
  [updateAccount.rejected.type]: (state) => {
    state.updateAccount.isLoading = false;
  },
  [updateAccount.fulfilled.type]: (state, { payload }) => {
    state.updateAccount.isLoading = false;
    state.updateAccount.data = payload.data.data;
    state.account = payload.data.data;
  },
};
