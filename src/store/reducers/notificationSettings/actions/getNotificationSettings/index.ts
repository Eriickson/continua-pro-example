import { apiService } from "@/settings";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { FnReducer } from "@continuapro/redux";
import { NotificationSettingSection } from "@continuapro/entity";

import { InitialState } from "../..";

export const getNotificationSettings = createAsyncThunk("notification_settings/get", async () =>
  apiService({ method: "get", url: "/notification_settings" })
);

export const getNotificationSettingsReducers: FnReducer<InitialState, NotificationSettingSection[]> = {
  [getNotificationSettings.pending.type]: (state) => {
    state.getNotificationSettings.isLoading = true;
  },
  [getNotificationSettings.rejected.type]: (state) => {
    state.getNotificationSettings.isLoading = false;
  },
  [getNotificationSettings.fulfilled.type]: (state, { payload }) => {
    state.getNotificationSettings.isLoading = false;
    state.notificationSettings = payload.data.data;
    state.getNotificationSettings.data = payload.data.data;
  },
};
