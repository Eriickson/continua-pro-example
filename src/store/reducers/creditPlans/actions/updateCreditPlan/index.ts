import { apiService } from "@/settings";
import { UpdateCreditPlanArgs } from "@continuapro/redux";
import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { InitialState } from "../..";

export const updateCreditPlan = createAsyncThunk(
  "credit_plans/update",
  async ({ id, credit_plan }: UpdateCreditPlanArgs) =>
    apiService({ method: "put", url: `/credit_plans/${id}`, data: { credit_plan } })
);

export const updateCreditPlanReducers: any = {
  [updateCreditPlan.pending.type]: (state: InitialState) => {
    state.updateCreditPlan.isLoading = true;
  },
  [updateCreditPlan.rejected.type]: (state: InitialState) => {
    state.updateCreditPlan.isLoading = false;
  },
  [updateCreditPlan.fulfilled.type]: (state: InitialState, { payload }: PayloadAction<any>) => {
    state.updateCreditPlan.isLoading = false;
    state.creditPlan = payload.data.data;
    state.creditPlans = state.creditPlans.map((creditPlan) =>
      creditPlan.id === payload.data.data.id ? payload.data.data : creditPlan
    );
  },
};
