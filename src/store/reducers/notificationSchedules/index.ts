import { createSlice } from "@reduxjs/toolkit";

import { NotificationSchedule } from "@continuapro/entity";
import { initialStateItemReducer, initialStateItemReducerArray } from "@/utils";

import { createNotificationScheduleReducers } from "./actions/createNotificationSchedule";
import { getNotificationScheduleReducers } from "./actions/getNotificationSchedules";
import { ItemsReducers } from "@continuapro/redux";

export interface InitialState {
  notificationSchedules: NotificationSchedule[];
  getNotificationSchedules: ItemsReducers<NotificationSchedule[]>;
  createNotificationSchedule: ItemsReducers<NotificationSchedule>;
  updateNotificationSchedule: ItemsReducers<NotificationSchedule>;
}

const initialState = {
  notificationSchedules: [],
  createNotificationSchedule: initialStateItemReducer,
  getNotificationSchedules: initialStateItemReducerArray,
  updateNotificationSchedule: initialStateItemReducer,
} as InitialState;

const notificationSchedulesSlice = createSlice({
  name: "notificationSchedules",
  initialState,
  reducers: {},
  extraReducers: { ...createNotificationScheduleReducers, ...getNotificationScheduleReducers },
});

export const { reducer } = notificationSchedulesSlice;

export default notificationSchedulesSlice.reducer;
