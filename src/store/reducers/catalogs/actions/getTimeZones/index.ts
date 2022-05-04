import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import { apiService } from "@/settings";

import { InitialState } from "../..";

export const getTimeZones = createAsyncThunk("/catalogs/time_zones/get", async () =>
  apiService({
    method: "get",
    url: "/catalogs/time_zones",
  })
);

export const getTimeZonesReducers: any = {
  [getTimeZones.pending.type]: (state: InitialState) => {
    state.getTimeZones.isLoading = true;
  },
  [getTimeZones.rejected.type]: (state: InitialState) => {
    state.getTimeZones.isLoading = false;
  },
  [getTimeZones.fulfilled.type]: (state: InitialState, { payload }: PayloadAction<any>) => {
    state.getTimeZones.isLoading = false;
    state.timeZones = payload.data.data;
    state.getTimeZones.data = payload.data.data;
  },
};
