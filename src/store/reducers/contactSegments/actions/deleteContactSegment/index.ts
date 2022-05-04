import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import { apiService } from "@/settings";

import { InitialState } from "../..";

interface deleteContactSegmentArgs {
  id: number;
}

export const deleteContactSegment = createAsyncThunk(
  "contact_segments/delete",
  async ({ id }: deleteContactSegmentArgs) =>
    apiService({
      method: "delete",
      url: `/contact_segments/${id}`,
    })
);

export const deleteContactSegmentReducers: any = {
  [deleteContactSegment.pending.type]: (state: InitialState) => {
    state.deleteContactSegment.isLoading = true;
  },
  [deleteContactSegment.rejected.type]: (state: InitialState) => {
    state.deleteContactSegment.isLoading = false;
  },
  [deleteContactSegment.fulfilled.type]: (state: InitialState, payload: PayloadAction<any>) => {
    state.deleteContactSegment.isLoading = false;
    state.contactSegments = state.contactSegments.filter(
      (contactSegment) => contactSegment.id !== (payload as any).meta.arg.id
    );
  },
};
