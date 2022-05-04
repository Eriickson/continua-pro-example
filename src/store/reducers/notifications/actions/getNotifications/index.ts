import { apiService } from "@/settings";
import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { InitialState } from "../..";

export const getNotifications = createAsyncThunk("notifications/get", async () =>
  apiService({
    method: "get",
    url: "/notifications",
  })
);

export const getNotificationsReducers: any = {
  [getNotifications.pending.type]: (state: InitialState) => {
    state.getNotifications.isLoading = true;
  },
  [getNotifications.rejected.type]: (state: InitialState) => {
    state.getNotifications.isLoading = false;
  },
  [getNotifications.fulfilled.type]: (state: InitialState, { payload }: PayloadAction<any>) => {
    state.getNotifications.isLoading = false;
    state.notifications = payload.data.data;
    state.getNotifications.data = payload.data.data;
  },
};
