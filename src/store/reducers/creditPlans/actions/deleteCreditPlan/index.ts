import { apiService } from "@/settings";
import { GetOrDeleteArgs } from "@continuapro/redux";
import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { InitialState } from "../..";

export const deleteCreditPlan = createAsyncThunk("credit_plans/delete", async ({ id }: GetOrDeleteArgs) =>
  apiService({ method: "delete", url: `/credit_plans/${id}` })
);

export const deleteCreditPlanReducers: any = {
  [deleteCreditPlan.pending.type]: (state: InitialState) => {
    state.deleteCreditPlan.isLoading = true;
  },
  [deleteCreditPlan.rejected.type]: (state: InitialState) => {
    state.deleteCreditPlan.isLoading = false;
  },
  [deleteCreditPlan.fulfilled.type]: (state: InitialState, payload: PayloadAction<any>) => {
    state.deleteCreditPlan.isLoading = false;
    state.creditPlans = state.creditPlans.filter((creditPlan) => creditPlan.id !== (payload as any).meta.arg.id);
  },
};
