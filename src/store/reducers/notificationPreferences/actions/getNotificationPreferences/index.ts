import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import { apiService } from "@/settings";

import { InitialState } from "../..";
import { FnReducer } from "@continuapro/redux";
import { NotificationPreference } from "@continuapro/entity";

export const getNotificationPreferences = createAsyncThunk("notification_preferences/get", async () =>
  apiService({ method: "get", url: "/notification_preferences" })
);

export const getNotificationPreferencesReducers: FnReducer<InitialState, NotificationPreference[]> = {
  [getNotificationPreferences.pending.type]: (state: InitialState) => {
    state.getNotificationPreferences.isLoading = true;
  },
  [getNotificationPreferences.rejected.type]: (state: InitialState) => {
    state.getNotificationPreferences.isLoading = false;
  },
  [getNotificationPreferences.fulfilled.type]: (state: InitialState, { payload }: PayloadAction<any>) => {
    state.getNotificationPreferences.isLoading = false;
    state.notificationPreferences = payload.data.data;
    state.getNotificationPreferences.data = payload.data.data;
  },
};
