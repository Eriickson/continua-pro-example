import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import { apiService } from "@/settings";

import { InitialState } from "../..";

interface removeContactFromSegmentArgs {
  id: number;
  contact_ids: number[];
}

export const removeContactFromSegment = createAsyncThunk(
  "contact_segments/remoce_contact_from_segment",
  async ({ id, contact_ids }: removeContactFromSegmentArgs) =>
    apiService({ method: "put", url: `/contact_segments/${id}/remove_contacts`, data: { contact_ids } })
);

export const removeContactFromSegmentReducers: any = {
  [removeContactFromSegment.pending.type]: (state: InitialState) => {
    state.removeContactFromSegment.isLoading = true;
  },
  [removeContactFromSegment.rejected.type]: (state: InitialState) => {
    state.removeContactFromSegment.isLoading = false;
  },
  [removeContactFromSegment.fulfilled.type]: (state: InitialState, { payload }: PayloadAction<any>) => {
    state.removeContactFromSegment.isLoading = false;
    if (state.contactSegment) state.contactSegment = payload.data.data;
    state.removeContactFromSegment.data = payload.data.data;
  },
};
