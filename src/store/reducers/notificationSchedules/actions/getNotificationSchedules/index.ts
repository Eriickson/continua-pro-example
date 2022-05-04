import { createAsyncThunk } from "@reduxjs/toolkit";

import { FnReducer } from "@continuapro/redux";
import { NotificationSchedule } from "@continuapro/entity";

import { apiService } from "@/settings";

import { InitialState } from "../..";

export const getNotificationSchedules = createAsyncThunk("notification_schedules/get", async () =>
  apiService({ method: "get", url: "/notification_schedules" })
);

export const getNotificationScheduleReducers: FnReducer<InitialState, NotificationSchedule[]> = {
  [getNotificationSchedules.pending.type]: (state) => {
    state.getNotificationSchedules.isLoading = true;
  },
  [getNotificationSchedules.rejected.type]: (state) => {
    state.getNotificationSchedules.isLoading = false;
  },
  [getNotificationSchedules.fulfilled.type]: (state, { payload }) => {
    state.getNotificationSchedules.isLoading = false;
    state.notificationSchedules = payload.data.data;
  },
};
