import { createAsyncThunk } from "@reduxjs/toolkit";

import { apiService } from "@/settings";

import { InitialState } from "../..";
import { CreateSenderArgs, FnReducer } from "@continuapro/redux";
import { Sender } from "@continuapro/entity";

export const createSender = createAsyncThunk("senders/create", async ({ contact }: CreateSenderArgs) =>
  apiService({
    method: "post",
    url: "/senders",
    data: { contact: contact },
  })
);

export const createSenderReducers: FnReducer<InitialState, Sender> = {
  [createSender.pending.type]: (state) => {
    state.createSender.isLoading = true;
  },
  [createSender.rejected.type]: (state) => {
    state.createSender.isLoading = false;
  },
  [createSender.fulfilled.type]: (state, { payload }) => {
    state.createSender.isLoading = false;
    state.senders = [...state.senders, payload.data.data];
  },
};
