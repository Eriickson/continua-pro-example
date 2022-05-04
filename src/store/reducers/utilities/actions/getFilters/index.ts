import { createAsyncThunk } from "@reduxjs/toolkit";

import { apiService } from "@/settings";

import { Filter, InitialState } from "../..";
import { FnReducer } from "@continuapro/redux";

export const getFilters = createAsyncThunk("/utilities/filters/get", async () =>
  apiService({ method: "get", url: "/utilities/filters" })
);

export const getFiltersReducers: FnReducer<InitialState, Filter[]> = {
  [getFilters.pending.type]: (state) => {
    state.getFilters.isLoading = true;
  },
  [getFilters.rejected.type]: (state) => {
    state.getFilters.isLoading = false;
  },
  [getFilters.fulfilled.type]: (state, { payload }) => {
    state.getFilters.isLoading = false;
    state.filters = payload.data.data;
    state.getFilters.data = payload.data.data;
  },
};
