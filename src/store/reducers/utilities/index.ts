import { initialStateItemReducer } from "@/utils";
import { ItemsReducers } from "@continuapro/redux";
import { createSlice } from "@reduxjs/toolkit";
import { getFiltersReducers } from "./actions/getFilters";

export interface Filter {
  id: number;
  operator: string;
  label: string;
}
export interface InitialState {
  regexExpressions: { numberPhoneMask: string; email: string };
  filters: Filter[];
  getFilters: ItemsReducers<Filter[]>;
}

const initialState: InitialState = {
  regexExpressions: {
    numberPhoneMask: "+99 (999) 999-9999",
    email:
      "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$",
  },
  filters: [],
  getFilters: initialStateItemReducer,
};

const utilitiesSlice = createSlice({
  name: "utilities",
  initialState,
  reducers: {},
  extraReducers: {
    ...getFiltersReducers,
  },
});

export const { reducer } = utilitiesSlice;

export default utilitiesSlice.reducer;
