import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import { apiService } from "@/settings";

import { InitialState } from "../..";

export const getContactSegments = createAsyncThunk("contact_segments/get", async () =>
  apiService({
    method: "get",
    url: "/contact_segments",
  })
);

export const getContactSegmentsReducers: any = {
  [getContactSegments.pending.type]: (state: InitialState) => {
    state.getContactSegments.isLoading = true;
  },
  [getContactSegments.rejected.type]: (state: InitialState) => {
    state.getContactSegments.isLoading = false;
  },
  [getContactSegments.fulfilled.type]: (state: InitialState, { payload }: PayloadAction<any>) => {
    state.getContactSegments.isLoading = false;
    state.contactSegments = payload.data.data;
    state.getContactSegments.data = payload.data.data;
  },
};
