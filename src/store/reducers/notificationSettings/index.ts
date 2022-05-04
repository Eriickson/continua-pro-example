import { createSlice } from "@reduxjs/toolkit";
import { NotificationSetting, NotificationSettingSection } from "@continuapro/entity";
import { ItemsReducers } from "@continuapro/redux";
import { initialStateItemReducer, initialStateItemReducerArray } from "@/utils";

import { getNotificationSettingsReducers } from "./actions/getNotificationSettings";
import { updateNotificationSettingReducers } from "./actions/updateNotificationSetting";

export interface InitialState {
  notificationSettings: NotificationSettingSection[];
  getNotificationSettings: ItemsReducers<NotificationSettingSection[]>;
  updateNotificationSetting: ItemsReducers<NotificationSetting>;
}

const initialState: InitialState = {
  notificationSettings: [],
  getNotificationSettings: initialStateItemReducerArray,
  updateNotificationSetting: initialStateItemReducer,
};

const notificationSettingsSlice = createSlice({
  name: "notificationSettings",
  initialState,
  reducers: {},
  extraReducers: {
    ...getNotificationSettingsReducers,
    ...updateNotificationSettingReducers,
  },
});

export const { reducer } = notificationSettingsSlice;

export default notificationSettingsSlice.reducer;
