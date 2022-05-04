import { apiService } from "@/settings";
import { PriceArrayEntry } from "@/types";
import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { InitialState } from "../..";

interface UpdatePriceArrayEntry {
  id: number;
  price_array_entry: Omit<PriceArrayEntry, "id">;
}

export const updatePriceArrayEntry = createAsyncThunk(
  "price_array_entries/update",
  async ({ id, price_array_entry }: UpdatePriceArrayEntry) =>
    apiService({ method: "put", url: `/price_array_entries/${id}`, data: { price_array_entry } })
);

export const updatePriceArrayEntryReducers: any = {
  [updatePriceArrayEntry.pending.type]: (state: InitialState) => {
    state.updatePriceArrayEntry.isLoading = true;
  },
  [updatePriceArrayEntry.rejected.type]: (state: InitialState) => {
    state.updatePriceArrayEntry.isLoading = false;
  },
  [updatePriceArrayEntry.fulfilled.type]: (state: InitialState, payload: PayloadAction<any>) => {
    state.updatePriceArrayEntry.isLoading = false;
    // if (state.creditPlan) {
    //   const { price_array_id } = (payload as any).meta.arg.price_array_entry;
    //   const { data } = payload.payload.data;

    //   let { price_arrays } = state.creditPlan;
    //   price_arrays = price_arrays.map((price_array) => {
    //     if (price_array.id === price_array_id) {
    //       price_array.entries = [...price_array.entries, data];
    //     }
    //     return price_array;
    //   });

    //   state.creditPlan.price_arrays = price_arrays;
    //   state.updatePriceArrayEntry.data = data;
    // }
  },
};
