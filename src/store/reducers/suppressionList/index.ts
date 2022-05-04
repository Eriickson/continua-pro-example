import { createSlice } from "@reduxjs/toolkit";

import { SuppressionListItem } from "@continuapro/entity";
import { initialStateItemReducer } from "@/utils";

import { getSuppressionListReducers } from "./actions/getSuppressionList";
import { createSuppressionListItemReducers } from "./actions/createSuppressionListItem";
import { deleteSuppressionListItemReducers } from "./actions/deleteSuppressionListItem";
import { ItemsReducers } from "@continuapro/redux";

export interface InitialState {
  suppressionList: SuppressionListItem[];
  createSuppressionListItem: ItemsReducers<SuppressionListItem[]>;
  getSuppressionList: ItemsReducers<SuppressionListItem[]>;
  deleteSuppressionListItem: ItemsReducers<SuppressionListItem[]>;
}

const initialState = {
  suppressionList: [],
  createSuppressionListItem: initialStateItemReducer,
  getSuppressionList: initialStateItemReducer,
  deleteSuppressionListItem: initialStateItemReducer,
} as InitialState;

const suppressionListSlice = createSlice({
  name: "suppressionList",
  initialState,
  reducers: {},
  extraReducers: {
    ...getSuppressionListReducers,
    ...createSuppressionListItemReducers,
    ...deleteSuppressionListItemReducers,
  },
});

export const { reducer } = suppressionListSlice;

export default suppressionListSlice.reducer;
