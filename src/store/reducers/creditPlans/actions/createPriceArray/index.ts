import { apiService } from "@/settings";
import { CreditPlan, PriceArray } from "@/types";
import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { InitialState } from "../..";

interface CreatePriceArrayArgs {
  price_array: Omit<PriceArray, "id">;
}

export const createPriceArray = createAsyncThunk("price_arrays/create", async (data: CreatePriceArrayArgs) =>
  apiService({ method: "post", url: "/price_arrays", data })
);

export const createPriceArrayReducers: any = {
  [createPriceArray.pending.type]: (state: InitialState) => {
    state.createPriceArray.isLoading = true;
  },
  [createPriceArray.rejected.type]: (state: InitialState) => {
    state.createPriceArray.isLoading = false;
  },
  [createPriceArray.fulfilled.type]: (state: InitialState, { payload }: PayloadAction<any>) => {
    state.createPriceArray.isLoading = false;
    if (state.creditPlan) state.creditPlan.price_arrays = [...state.creditPlan.price_arrays, payload.data.data];
  },
};
