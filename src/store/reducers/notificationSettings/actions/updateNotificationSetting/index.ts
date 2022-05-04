import { apiService } from "@/settings";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { FnReducer } from "@continuapro/redux";
import { NotificationSetting } from "@continuapro/entity";

import { InitialState } from "../..";

interface UpdateNotificationSettingArgs {
  id: number;
  notification_setting: {
    active: boolean;
  };
}

export const updateNotificationSetting = createAsyncThunk(
  "notification_settings/update",
  async ({ id, notification_setting }: UpdateNotificationSettingArgs) =>
    apiService({ method: "put", url: `/notification_settings/${id}`, data: { notification_setting } })
);

export const updateNotificationSettingReducers: FnReducer<InitialState, NotificationSetting> = {
  [updateNotificationSetting.pending.type]: (state) => {
    state.updateNotificationSetting.isLoading = true;
  },
  [updateNotificationSetting.rejected.type]: (state) => {
    state.updateNotificationSetting.isLoading = false;
  },
  [updateNotificationSetting.fulfilled.type]: (state, { payload }) => {
    state.updateNotificationSetting.isLoading = false;
    state.updateNotificationSetting.data = payload.data.data;
  },
};
