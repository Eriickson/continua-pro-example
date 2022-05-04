import { CustomerReports, ItemsReducers } from "@continuapro/redux";
import { createSlice } from "@reduxjs/toolkit";

import { getCustomerReportsReducers } from "./actions/getCustomerReports";

const initialStateItemReducer = {
  isLoading: false,
  data: [],
  err: null,
  hasError: false,
};

export interface InitialState {
  customerReports: CustomerReports[];
  getCustomerReports: ItemsReducers<CustomerReports[]>;
}

const initialState: InitialState = {
  customerReports: [],
  getCustomerReports: initialStateItemReducer,
};

const customerReportsSlice = createSlice({
  name: "customerReports",
  initialState,
  reducers: {},
  extraReducers: { ...getCustomerReportsReducers },
});
export const { reducer } = customerReportsSlice;

export default customerReportsSlice.reducer;
