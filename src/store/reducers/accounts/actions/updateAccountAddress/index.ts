import { createAsyncThunk } from "@reduxjs/toolkit";

import { AccountAddress } from "@continuapro/entity";
import { FnReducer } from "@continuapro/redux";

import { apiService } from "@/settings";

import { InitialState } from "../..";

interface UpdateAccountArgs {
  id: number;
  address: Partial<AccountAddress>;
}

export const updateAccountAddress = createAsyncThunk(
  "accounts/update/address",
  async ({ id, address }: UpdateAccountArgs) =>
    apiService({ method: "put", url: `/accounts/${id}/address`, data: { address } })
);

export const updateAccountAddressReducers: FnReducer<InitialState, AccountAddress> = {
  [updateAccountAddress.pending.type]: (state) => {
    state.updateAccountAddress.isLoading = true;
  },
  [updateAccountAddress.rejected.type]: (state) => {
    state.updateAccountAddress.isLoading = false;
  },
  [updateAccountAddress.fulfilled.type]: (state, { payload }) => {
    state.updateAccountAddress.isLoading = false;
    state.updateAccountAddress.data = payload.data.data;
  },
};
