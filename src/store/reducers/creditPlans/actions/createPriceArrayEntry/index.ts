import { apiService } from "@/settings";
import { PriceArrayEntry } from "@/types";
import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { InitialState } from "../..";

interface CreatePriceArrayEntry {
  price_array_entry: Omit<PriceArrayEntry, "id">;
}

export const createPriceArrayEntry = createAsyncThunk(
  "price_array_entries/create",
  async (data: CreatePriceArrayEntry) => apiService({ method: "post", url: "/price_array_entries", data })
);

export const createPriceArrayEntryReducers: any = {
  [createPriceArrayEntry.pending.type]: (state: InitialState) => {
    state.createPriceArrayEntry.isLoading = true;
  },
  [createPriceArrayEntry.rejected.type]: (state: InitialState) => {
    state.createPriceArrayEntry.isLoading = false;
  },
  [createPriceArrayEntry.fulfilled.type]: (state: InitialState, payload: PayloadAction<any>) => {
    state.createPriceArrayEntry.isLoading = false;
    if (state.creditPlan) {
      const { price_array_id } = (payload as any).meta.arg.price_array_entry;
      const { data } = payload.payload.data;

      let { price_arrays } = state.creditPlan;
      price_arrays = price_arrays.map((price_array) => {
        if (price_array.id === price_array_id) {
          price_array.entries = [...price_array.entries, data];
        }
        return price_array;
      });

      state.creditPlan.price_arrays = price_arrays;
      state.createPriceArrayEntry.data = data;
    }
  },
};
