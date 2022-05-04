import { createAsyncThunk } from "@reduxjs/toolkit";

import { apiService } from "@/settings";

import { InitialState } from "../..";
import { FnReducer } from "@continuapro/redux";
import { Account } from "@continuapro/entity";

interface GetAccountArgs {
  id: number;
}

export const getAccount = createAsyncThunk("accounts/get/detail", async ({ id }: GetAccountArgs) => {
  const response = await apiService({
    method: "get",
    url: `/accounts/${id}`,
  });

  return response;
});

export const getAccountReducers: FnReducer<InitialState, Account> = {
  [getAccount.pending.type]: (state) => {
    state.getAccount.isLoading = true;
  },
  [getAccount.rejected.type]: (state) => {
    state.getAccount.isLoading = false;
  },
  [getAccount.fulfilled.type]: (state, { payload }) => {
    state.getAccount.isLoading = false;
    state.account = payload.data.data;
    state.getAccount.data = payload.data.data;
  },
};
