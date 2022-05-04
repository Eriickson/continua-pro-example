import { createAsyncThunk } from "@reduxjs/toolkit";

import { apiService } from "@/settings";

import { InitialState } from "../..";
import { FnReducer } from "@continuapro/redux";
import { Account } from "@continuapro/entity";

export const getAccounts = createAsyncThunk("accounts/get", async () =>
  apiService({
    method: "get",
    url: "/accounts",
  })
);

export const getAccountsReducers: FnReducer<InitialState, Account[]> = {
  [getAccounts.pending.type]: (state) => {
    state.getAccounts.isLoading = true;
  },
  [getAccounts.rejected.type]: (state) => {
    state.getAccounts.isLoading = false;
  },
  // prettier-ignore
  [getAccounts.fulfilled.type]: (state,{ payload }) => {
      state.getAccounts.isLoading = false;
      state.accounts = payload.data.data;
      state.getAccounts.data = payload.data.data;
    },
};
