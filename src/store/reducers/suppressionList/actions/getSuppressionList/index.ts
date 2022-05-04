import { apiService } from "@/settings";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { FnReducer } from "@continuapro/redux";
import { SuppressionListItem } from "@continuapro/entity";

import { InitialState } from "../..";

export const getSuppressionList = createAsyncThunk("suppression_list/get", async () =>
  apiService({ method: "get", url: "/suppression_list_entries" })
);

export const getSuppressionListReducers: FnReducer<InitialState, SuppressionListItem[]> = {
  [getSuppressionList.pending.type]: (state) => {
    state.getSuppressionList.isLoading = true;
  },
  [getSuppressionList.rejected.type]: (state) => {
    state.getSuppressionList.isLoading = false;
  },
  [getSuppressionList.fulfilled.type]: (state, payload) => {
    state.getSuppressionList.isLoading = false;
    state.suppressionList = payload.payload.data.data;
    state.getSuppressionList.data = payload.payload.data.data;
  },
};
