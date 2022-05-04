import { apiService } from "@/settings";
import { createAsyncThunk, PayloadAction, current } from "@reduxjs/toolkit";
import { InitialState } from "../..";

interface DeletePriceArrayEntry {
  id: number;
  priceArrayId: number;
}

export const deletePriceArrayEntry = createAsyncThunk(
  "price_array_entries/delete",
  async ({ id }: DeletePriceArrayEntry) => apiService({ method: "delete", url: `/price_array_entries/${id}` })
);

export const deletePriceArrayEntryReducers: any = {
  [deletePriceArrayEntry.pending.type]: (state: InitialState) => {
    state.deletePriceArrayEntry.isLoading = true;
  },
  [deletePriceArrayEntry.rejected.type]: (state: InitialState) => {
    state.deletePriceArrayEntry.isLoading = false;
  },
  [deletePriceArrayEntry.fulfilled.type]: (state: InitialState, payload: PayloadAction<any>) => {
    state.deletePriceArrayEntry.isLoading = false;
    if (state.creditPlan) {
      const { id, priceArrayId } = (payload as any).meta.arg;

      let { price_arrays } = state.creditPlan;

      price_arrays = price_arrays.map((priceArray) => {
        if (priceArray.id === priceArrayId) {
          priceArray.entries = priceArray.entries.filter((priceArrayEntry) => priceArrayEntry.id !== id);
        }
        return priceArray;
      });

      state.creditPlan.price_arrays = price_arrays;
    }
  },
};
