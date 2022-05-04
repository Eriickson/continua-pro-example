import { apiService } from "@/settings";
import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { InitialState } from "../..";

export const getSenders = createAsyncThunk("senders/get", async () =>
  apiService({
    method: "get",
    url: "/senders",
  })
);

export const getSendersReducers: any = {
  [getSenders.pending.type]: (state: InitialState) => {
    state.getSenders.isLoading = true;
  },
  [getSenders.rejected.type]: (state: InitialState) => {
    state.getSenders.isLoading = false;
  },
  [getSenders.fulfilled.type]: (state: InitialState, { payload }: PayloadAction<any>) => {
    state.getSenders.isLoading = false;
    state.senders = payload.data.data;
    state.getSenders.data = payload.data.data;
  },
};
