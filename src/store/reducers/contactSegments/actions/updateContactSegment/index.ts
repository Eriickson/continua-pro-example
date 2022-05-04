import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import { apiService } from "@/settings";

import { InitialState } from "../..";

interface updateContactSegmentArgs {
  id: number;
  contact_segment: Partial<{
    name: string;
    query_selector: string;
  }>;
}

export const updateContactSegment = createAsyncThunk(
  "contact_segments/update",
  async ({ id, contact_segment }: updateContactSegmentArgs) =>
    apiService({ method: "put", url: `/contact_segments/${id}`, data: { contact_segment } })
);

export const updateContactSegmentReducers: any = {
  [updateContactSegment.pending.type]: (state: InitialState) => {
    state.updateContactSegment.isLoading = true;
  },
  [updateContactSegment.rejected.type]: (state: InitialState) => {
    state.updateContactSegment.isLoading = false;
  },
  [updateContactSegment.fulfilled.type]: (state: InitialState, { payload }: PayloadAction<any>) => {
    state.updateContactSegment.isLoading = false;
    state.updateContactSegment.data = payload.data.data;
    state.contactSegments = state.contactSegments.map((contactSegment) =>
      contactSegment.id === payload.data.data.id ? payload.data.data : contactSegment
    );
  },
};
