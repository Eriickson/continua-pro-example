import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import { apiService } from "@/settings";

import { InitialState } from "../..";
import { FnReducer, UpdateSenderArgs } from "@continuapro/redux";
import { Sender } from "@continuapro/entity";

export const updateSender = createAsyncThunk("senders/update", async ({ id, contact }: UpdateSenderArgs) =>
  apiService({
    method: "put",
    url: `/senders/${id}`,
    data: { contact },
  })
);

export const updateSenderReducers: FnReducer<InitialState, Sender> = {
  [updateSender.pending.type]: (state: InitialState) => {
    state.updateSender.isLoading = true;
  },
  [updateSender.rejected.type]: (state: InitialState) => {
    state.updateSender.isLoading = false;
  },
  [updateSender.fulfilled.type]: (state: InitialState, { payload }: PayloadAction<any>) => {
    state.updateSender.isLoading = false;
    state.updateSender.data = payload.data.data;
    state.senders = state.senders.map((sender: Sender) =>
      sender.id === payload.data.data.id ? payload.data.data : sender
    );
  },
};
