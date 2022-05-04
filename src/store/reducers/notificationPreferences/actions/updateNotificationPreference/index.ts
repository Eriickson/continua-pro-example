import { apiService } from "@/settings";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { FnReducer } from "@continuapro/redux";
import { NotificationSetting } from "@continuapro/entity";

import { InitialState } from "../..";

interface UpdateNotificationSettingArgs {
  id: number;
  notification_preference: {
    active: boolean;
  };
}

export const updateNotificationPreference = createAsyncThunk(
  "notification_preferences/update",
  async ({ id, notification_preference }: UpdateNotificationSettingArgs) =>
    apiService({ method: "put", url: `/notification_preferences/${id}`, data: { notification_preference } })
);

export const updateNotificationPreferenceReducers: FnReducer<InitialState, NotificationSetting> = {
  [updateNotificationPreference.pending.type]: (state) => {
    state.updateNotificationPreference.isLoading = true;
  },
  [updateNotificationPreference.rejected.type]: (state) => {
    state.updateNotificationPreference.isLoading = false;
  },
  [updateNotificationPreference.fulfilled.type]: (state, { payload }) => {
    state.updateNotificationPreference.isLoading = false;
    state.updateNotificationPreference.data = payload.data.data;
  },
};
