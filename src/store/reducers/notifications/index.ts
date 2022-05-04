import { ItemsReducers } from "@continuapro/redux";
import { createSlice } from "@reduxjs/toolkit";

import { getNotificationsReducers } from "./actions/getNotifications";

const initialStateItemReducer = {
  isLoading: false,
  data: [],
  err: null,
  hasError: false,
};

export interface InitialState {
  notifications: Notification[];
  getNotifications: ItemsReducers<Notification[]>;
}

const initialState: InitialState = {
  notifications: [],
  getNotifications: initialStateItemReducer,
};

const notificationsSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {},
  extraReducers: { ...getNotificationsReducers },
});

export const { reducer } = notificationsSlice;

export default notificationsSlice.reducer;
