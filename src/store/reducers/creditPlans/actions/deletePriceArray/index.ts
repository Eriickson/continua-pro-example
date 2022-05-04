import { apiService } from "@/settings";
import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { InitialState } from "../..";

interface DeleteCreditPlanArgs {
  id: number;
}

export const deletePriceArray = createAsyncThunk("price_arrays/delete", async ({ id }: DeleteCreditPlanArgs) =>
  apiService({ method: "delete", url: `/price_arrays/${id}` })
);

export const deletePriceArrayReducers: any = {
  [deletePriceArray.pending.type]: (state: InitialState) => {
    state.deletePriceArray.isLoading = true;
  },
  [deletePriceArray.rejected.type]: (state: InitialState) => {
    state.deletePriceArray.isLoading = false;
  },
  [deletePriceArray.fulfilled.type]: (state: InitialState, payload: PayloadAction<any>) => {
    state.deletePriceArray.isLoading = false;
    if (state.creditPlan) {
      let { price_arrays } = state.creditPlan;
      price_arrays = price_arrays.filter((priceArray) => priceArray.id !== (payload as any).meta.arg.id);
      state.creditPlan.price_arrays = price_arrays;
    }
  },
};
