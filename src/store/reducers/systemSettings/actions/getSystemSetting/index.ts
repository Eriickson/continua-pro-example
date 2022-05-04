import { apiService } from "@/settings";
import { Setting } from "@continuapro/entity";
import { FnReducer } from "@continuapro/redux";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { InitialState } from "../..";

interface GetSettingArgs {
  id: number;
}

export const getSystemSetting = createAsyncThunk("settings/get/detail", async ({ id }: GetSettingArgs) =>
  apiService({
    method: "get",
    url: `/settings/${id}`,
  })
);

export const getSystemSettingReducer: FnReducer<InitialState, Setting> = {
  [getSystemSetting.pending.type]: (state) => {
    state.getSystemSetting.isLoading = true;
  },

  [getSystemSetting.rejected.type]: (state) => {
    state.getSystemSetting.isLoading = false;
  },
  [getSystemSetting.fulfilled.type]: (state, { payload }: any) => {
    state.getSystemSetting.isLoading = false;
    state.systemSetting = payload.data.data;
    state.getSystemSetting.data = payload.data.data;
  },
};
