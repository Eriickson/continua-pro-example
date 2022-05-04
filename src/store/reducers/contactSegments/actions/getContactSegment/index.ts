import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import { apiService } from "@/settings";

import { InitialState } from "../..";

interface getContactSegmentArgs {
  id: number;
}

export const getContactSegment = createAsyncThunk(
  "contact_segments/get/details",
  async ({ id }: getContactSegmentArgs) =>
    apiService({
      method: "get",
      url: `/contact_segments/${id}`,
    })
);

export const getContactSegmentReducers: any = {
  [getContactSegment.pending.type]: (state: InitialState) => {
    state.getContactSegment.isLoading = true;
  },
  [getContactSegment.rejected.type]: (state: InitialState) => {
    state.getContactSegment.isLoading = false;
  },
  [getContactSegment.fulfilled.type]: (state: InitialState, { payload }: PayloadAction<any>) => {
    state.getContactSegment.isLoading = false;
    state.contactSegment = payload.data.data;
    state.getContactSegment.data = payload.data.data;
  },
};
