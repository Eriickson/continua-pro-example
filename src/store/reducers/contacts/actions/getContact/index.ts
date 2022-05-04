import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import { apiService } from "@/settings";

import { InitialState } from "../..";

interface GetContactArgs {
  id: number;
}

export const getContact = createAsyncThunk("contacts/get/detail", async ({ id }: GetContactArgs) =>
  apiService({
    method: "get",
    url: `/contacts/${id}`,
  })
);

export const getContactReducers: any = {
  [getContact.pending.type]: (state: InitialState) => {
    state.getContact.isLoading = true;
  },
  [getContact.rejected.type]: (state: InitialState) => {
    state.getContact.isLoading = false;
  },
  [getContact.fulfilled.type]: (state: InitialState, { payload }: PayloadAction<any>) => {
    state.getContact.isLoading = false;
    state.contact = payload.data.data;
    state.getContact.data = payload.data.data;
  },
};
