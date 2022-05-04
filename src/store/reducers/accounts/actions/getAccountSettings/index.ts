import { createAsyncThunk } from "@reduxjs/toolkit";

import { apiService } from "@/settings";

import { InitialState } from "../..";
import { FnReducer } from "@continuapro/redux";
import { AccountSettings } from "@continuapro/entity";

export const getAccountSettings = createAsyncThunk("accounts/get/settings", async () => {
  const response = await apiService({
    method: "get",
    url: "account_settings",
  });

  return response;
});

export const getAccountSettingsReducers: FnReducer<InitialState, AccountSettings[]> = {
  [getAccountSettings.pending.type]: (state) => {
    state.getAccountSettings.isLoading = true;
  },
  [getAccountSettings.rejected.type]: (state) => {
    state.getAccountSettings.isLoading = false;
  },
  [getAccountSettings.fulfilled.type]: (state, { payload }) => {
    state.getAccountSettings.isLoading = false;
    state.settings = payload.data.data;
    state.getAccountSettings.data = payload.data.data;
  },
};
