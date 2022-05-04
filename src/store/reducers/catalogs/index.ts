import { createSlice } from "@reduxjs/toolkit";

import { initialStateItemReducerArray } from "@/utils";

import { getTimeZonesReducers } from "./actions/getTimeZones";
import { ItemsReducers } from "@continuapro/redux";

export interface InitialState {
  timeZones: string[];
  getTimeZones: ItemsReducers<string[]>;
}

const initialState = {
  timeZones: [],
  getTimeZones: initialStateItemReducerArray,
};

const catalogsSlice = createSlice({
  name: "catalogs",
  initialState,
  reducers: {},
  extraReducers: {
    ...getTimeZonesReducers,
  },
});

export const { reducer } = catalogsSlice;

export default catalogsSlice.reducer;
