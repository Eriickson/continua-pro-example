import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import { apiService } from "@/settings";

import { InitialState } from "../..";
import { CreateContactSegmentArgs } from "@continuapro/redux";

export const createContactSegment = createAsyncThunk(
  "contact_segments/create",
  async ({ contact_segment }: CreateContactSegmentArgs) =>
    apiService({ method: "post", url: `/contact_segments`, data: { contact_segment } })
);

export const createContactSegmentReducers: any = {
  [createContactSegment.pending.type]: (state: InitialState) => {
    state.createContactSegment.isLoading = true;
  },
  [createContactSegment.rejected.type]: (state: InitialState) => {
    state.createContactSegment.isLoading = false;
  },
  [createContactSegment.fulfilled.type]: (state: InitialState, { payload }: PayloadAction<any>) => {
    console.log(payload.data.data);

    state.createContactSegment.isLoading = false;
    state.contactSegments = [...state.contactSegments, payload.data.data];
    state.createContactSegment.data = payload.data.data;
  },
};
