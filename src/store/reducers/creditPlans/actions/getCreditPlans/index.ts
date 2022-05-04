import { apiService } from "@/settings";
import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { InitialState } from "../..";

export const getCreditPlans = createAsyncThunk("credit_plans/get", async () =>
  apiService({
    method: "get",
    url: "/credit_plans",
  })
);

export const getCreditPlansReducers: any = {
  [getCreditPlans.pending.type]: (state: InitialState) => {
    state.getCreditPlans.isLoading = true;
  },
  [getCreditPlans.rejected.type]: (state: InitialState) => {
    state.getCreditPlans.isLoading = false;
  },
  [getCreditPlans.fulfilled.type]: (state: InitialState, { payload }: PayloadAction<any>) => {
    state.getCreditPlans.isLoading = false;
    state.creditPlans = payload.data.data;
    state.getCreditPlans.data = payload.data.data;
  },
};
