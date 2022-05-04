import { apiService } from "@/settings";
import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { InitialState } from "../..";

export const getSystemSettings = createAsyncThunk("settings/get", async () =>
  apiService({
    method: "get",
    url: "/settings",
  })
);

export const getSystemSettingsReducers: any = {
  [getSystemSettings.pending.type]: (state: InitialState) => {
    state.getSystemSettings.isLoading = true;
  },
  [getSystemSettings.rejected.type]: (state: InitialState) => {
    state.getSystemSettings.isLoading = false;
  },
  [getSystemSettings.fulfilled.type]: (state: InitialState, { payload }: PayloadAction<any>) => {
    state.getSystemSettings.isLoading = false;
    state.systemSettings = payload.data.data;
    state.getSystemSettings.data = payload.data.data;
  },
};
