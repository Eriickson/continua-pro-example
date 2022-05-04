import { apiService } from "@/settings";
import { CreateCreditPlanArgs } from "@continuapro/redux";
import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { InitialState } from "../..";

export const createCreditPlan = createAsyncThunk("credit_plans/create", async (data: CreateCreditPlanArgs) =>
  apiService({ method: "post", url: "/credit_plans", data })
);

export const createCreditPlanReducers: any = {
  [createCreditPlan.pending.type]: (state: InitialState) => {
    state.createCreditPlan.isLoading = true;
  },
  [createCreditPlan.rejected.type]: (state: InitialState) => {
    state.createCreditPlan.isLoading = false;
  },
  [createCreditPlan.fulfilled.type]: (state: InitialState, { payload }: PayloadAction<any>) => {
    state.createCreditPlan.isLoading = false;
    state.creditPlans = [...state.creditPlans, payload.data.data];
  },
};
