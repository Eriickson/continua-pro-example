import { initialStateItemReducer, initialStateItemReducerArray } from "@/utils";
import { NotificationPreference } from "@continuapro/entity";
import { ItemsReducers } from "@continuapro/redux";
import { createSlice } from "@reduxjs/toolkit";
import { getNotificationPreferencesReducers } from "./actions/getNotificationPreferences";
import { updateNotificationPreferenceReducers } from "./actions/updateNotificationPreference";

export interface InitialState {
  notificationPreferences: NotificationPreference[];
  getNotificationPreferences: ItemsReducers<NotificationPreference[]>;
  updateNotificationPreference: ItemsReducers<NotificationPreference>;
}

const initialState: InitialState = {
  notificationPreferences: [],
  getNotificationPreferences: initialStateItemReducerArray,
  updateNotificationPreference: initialStateItemReducer,
};

const notificationPreferences = createSlice({
  name: "notificationPreferences",
  initialState,
  reducers: {},
  extraReducers: { ...getNotificationPreferencesReducers, ...updateNotificationPreferenceReducers },
});

export const { reducer } = notificationPreferences;

export default notificationPreferences.reducer;
