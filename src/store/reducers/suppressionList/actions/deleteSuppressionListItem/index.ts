import { createAsyncThunk } from "@reduxjs/toolkit";

import { SuppressionListItem } from "@continuapro/entity";
import { FnReducer } from "@continuapro/redux";

import { apiService } from "@/settings";

import { InitialState } from "../..";

interface DeleteSuppressionListItemArgs {
  id: number;
}

export const deleteSuppressionListItem = createAsyncThunk(
  "suppression_list/delete",
  async ({ id }: DeleteSuppressionListItemArgs) =>
    apiService({
      method: "delete",
      url: `/suppression_list_entries/${id}`,
    })
);

export const deleteSuppressionListItemReducers: FnReducer<InitialState, SuppressionListItem> = {
  [deleteSuppressionListItem.pending.type]: (state) => {
    state.deleteSuppressionListItem.isLoading = true;
  },
  [deleteSuppressionListItem.rejected.type]: (state) => {
    state.deleteSuppressionListItem.isLoading = false;
  },
  [deleteSuppressionListItem.fulfilled.type]: (state, { meta }) => {
    state.deleteSuppressionListItem.isLoading = false;
    state.suppressionList = state.suppressionList.filter((item) => item.id !== meta.arg.id);
  },
};
