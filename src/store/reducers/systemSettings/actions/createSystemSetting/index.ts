import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import { apiService } from "@/settings";

import { InitialState } from "../..";
import { Setting } from "@continuapro/entity";

interface CreateSettingArgs {
  system_setting: Setting;
}

export const createSystemSetting = createAsyncThunk("settings/create", async ({ system_setting }: CreateSettingArgs) =>
  apiService({
    method: "post",
    url: "/settings",
    data: { system_setting },
  })
);

export const createSettingReducers: any = {
  [createSystemSetting.pending.type]: (state: InitialState) => {
    state.createSystemSetting.isLoading = true;
  },
  [createSystemSetting.rejected.type]: (state: InitialState) => {
    state.createSystemSetting.isLoading = false;
  },
  [createSystemSetting.fulfilled.type]: (state: InitialState, { payload }: PayloadAction<any>) => {
    state.createSystemSetting.isLoading = false;
    state.systemSettings = [...state.systemSettings, payload.data.data];
    state.createSystemSetting.data = payload.data.data;
  },
};
