import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import { apiService } from "@/settings";

import { InitialState } from "../..";

export const getContacts = createAsyncThunk("contacts/get", async () =>
  apiService({
    method: "get",
    url: "/contacts",
  })
);

export const getContactsReducers: any = {
  [getContacts.pending.type]: (state: InitialState) => {
    state.getContacts.isLoading = true;
  },
  [getContacts.rejected.type]: (state: InitialState) => {
    state.getContacts.isLoading = false;
  },
  // prettier-ignore
  [getContacts.fulfilled.type]: (state: InitialState,{ payload }: PayloadAction<any>) => {
      state.getContacts.isLoading = false;
      state.contacts = payload.data.data;
      state.getContacts.data = payload.data.data;
    },
};
