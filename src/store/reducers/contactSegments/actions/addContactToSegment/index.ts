import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import { apiService } from "@/settings";

import { InitialState } from "../..";

interface addContactToSegmentArgs {
  id: number;
  contact_ids: number[];
}

export const addContactToSegment = createAsyncThunk(
  "contact_segments/add_contact_to_segment",
  async ({ id, contact_ids }: addContactToSegmentArgs) =>
    apiService({ method: "put", url: `/contact_segments/${id}/add_contacts`, data: { contact_ids } })
);

export const addContactToSegmentReducers: any = {
  [addContactToSegment.pending.type]: (state: InitialState) => {
    state.addContactToSegment.isLoading = true;
  },
  [addContactToSegment.rejected.type]: (state: InitialState) => {
    state.addContactToSegment.isLoading = false;
  },
  [addContactToSegment.fulfilled.type]: (state: InitialState, { payload }: PayloadAction<any>) => {
    state.addContactToSegment.isLoading = false;
    if (state.contactSegment) state.contactSegment = payload.data.data;
    state.addContactToSegment.data = payload.data.data;
  },
};
