import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import { apiService } from "@/settings";
import { InitialState } from "../..";

export const getCustomerReports = createAsyncThunk("customer_reports/get", async () =>
  apiService({ method: "get", url: "/customer_reports" })
);

export const getCustomerReportsReducers = {
  [getCustomerReports.pending.type]: (state: InitialState) => {
    state.getCustomerReports.isLoading = true;
  },
  [getCustomerReports.rejected.type]: (state: InitialState) => {
    state.getCustomerReports.isLoading = false;
  },
  // prettier-ignore
  [getCustomerReports.fulfilled.type]: (state: InitialState,{ payload }: PayloadAction<any>) => {
    state.getCustomerReports.data = payload.data.data;
    state.customerReports = payload.data.data;
    state.getCustomerReports.isLoading = false;
  },
};
