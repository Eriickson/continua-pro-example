import { apiService } from "@/settings";
import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { InitialState } from "../..";

interface DeleteSenderArgs {
  id: number;
}

export const deleteSender = createAsyncThunk("senders/delete", async ({ id }: DeleteSenderArgs) =>
  apiService({
    method: "delete",
    url: `/senders/${id}`,
  })
);

export const deleteSenderReducers: any = {
  [deleteSender.pending.type]: (state: InitialState) => {
    state.deleteSender.isLoading = true;
  },
  [deleteSender.rejected.type]: (state: InitialState) => {
    state.deleteSender.isLoading = false;
  },
  [deleteSender.fulfilled.type]: (state: InitialState, payload: PayloadAction<any>) => {
    state.deleteSender.isLoading = false;
    state.senders = state.senders.filter((sender) => sender.id !== (payload as any).meta.arg.id);
  },
};
