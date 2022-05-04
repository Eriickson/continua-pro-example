import { createAsyncThunk } from "@reduxjs/toolkit";

import { FnReducer } from "@continuapro/redux";
import { NotificationSchedule } from "@continuapro/entity";

import { apiService } from "@/settings";

import { InitialState } from "../..";
interface CreateNotificationScheduleArgs {
  notification_schedule: Omit<NotificationSchedule, "id">;
}

export const createNotificationSchedule = createAsyncThunk(
  "notification_schedules/create",
  async ({ notification_schedule }: CreateNotificationScheduleArgs) =>
    apiService({ method: "post", url: "/notification_schedules", data: { notification_schedule } })
);

export const createNotificationScheduleReducers: FnReducer<InitialState, NotificationSchedule> = {
  [createNotificationSchedule.pending.type]: (state) => {
    state.createNotificationSchedule.isLoading = true;
  },
  [createNotificationSchedule.rejected.type]: (state) => {
    state.createNotificationSchedule.isLoading = false;
  },
  [createNotificationSchedule.fulfilled.type]: (state, { payload }) => {
    state.createNotificationSchedule.isLoading = false;
    state.notificationSchedules = [...state.notificationSchedules, payload.data.data];
  },
};
