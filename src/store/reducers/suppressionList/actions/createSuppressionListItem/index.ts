import { createAsyncThunk } from "@reduxjs/toolkit";

import { SuppressionListItem } from "@continuapro/entity";

import { CreateSusppressionListItemArgs, FnReducer } from "@continuapro/redux";

import { apiService } from "@/settings";

import { InitialState } from "../..";

export const createSuppressionListItem = createAsyncThunk(
  "suppression_list/create",
  async ({ suppression_list_entry }: CreateSusppressionListItemArgs) =>
    apiService({ method: "post", url: "/suppression_list_entries", data: { suppression_list_entry } })
);

export const createSuppressionListItemReducers: FnReducer<InitialState, SuppressionListItem> = {
  [createSuppressionListItem.pending.type]: (state) => {
    state.createSuppressionListItem.isLoading = true;
  },
  [createSuppressionListItem.rejected.type]: (state) => {
    state.createSuppressionListItem.isLoading = false;
  },
  [createSuppressionListItem.fulfilled.type]: (state, { payload }) => {
    state.createSuppressionListItem.isLoading = false;
    state.suppressionList = [...state.suppressionList, payload.data.data];
  },
};
