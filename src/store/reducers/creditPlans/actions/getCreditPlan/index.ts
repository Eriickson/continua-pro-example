import { apiService } from "@/settings";
import { GetOrDeleteArgs } from "@continuapro/redux";
import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { InitialState } from "../..";

export const getCreditPlan = createAsyncThunk("credit_plans/get/details", async ({ id }: GetOrDeleteArgs) =>
  apiService({
    method: "get",
    url: `/credit_plans/${id}`,
  })
);

export const getCreditPlanReducers: any = {
  [getCreditPlan.pending.type]: (state: InitialState) => {
    state.getCreditPlan.isLoading = true;
  },
  [getCreditPlan.rejected.type]: (state: InitialState) => {
    state.getCreditPlan.isLoading = false;
  },
  [getCreditPlan.fulfilled.type]: (state: InitialState, { payload }: PayloadAction<any>) => {
    state.getCreditPlan.isLoading = false;
    state.creditPlan = payload.data.data;
    state.getCreditPlan.data = payload.data.data;
  },
};
