import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import { apiService } from "@/settings";

import { InitialState } from "../..";
import { Setting } from "@continuapro/entity";

interface UpdateSettingArgs {
  id: number;
  system_setting: Partial<Omit<Setting, "id">>;
}

export const updateSystemSetting = createAsyncThunk(
  "setting/update",
  async ({ id, system_setting }: UpdateSettingArgs) =>
    apiService({
      method: "put",
      url: `/settings/${id}`,
      data: { system_setting },
    })
);

export const updateSettingReducers: any = {
  [updateSystemSetting.pending.type]: (state: InitialState) => {
    state.updateSystemSetting.isLoading = true;
  },
  [updateSystemSetting.rejected.type]: (state: InitialState) => {
    state.updateSystemSetting.isLoading = false;
  },
  [updateSystemSetting.fulfilled.type]: (state: InitialState, { payload }: PayloadAction<any>) => {
    state.updateSystemSetting.isLoading = false;
    state.updateSystemSetting.data = payload.data.data;
    state.systemSettings = state.systemSettings.map((user) =>
      user.id === payload.data.data.id ? payload.data.data : user
    );
  },
};
