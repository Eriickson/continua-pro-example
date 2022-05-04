import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import { apiService } from "@/settings";

import { InitialState } from "../..";

interface GetContactArgs {
  id: number;
}

export const deleteContact = createAsyncThunk("contacts/delete", async ({ id }: GetContactArgs) =>
  apiService({
    method: "delete",
    url: `/contacts/${id}`,
  })
);

export const deleteContactReducers: any = {
  [deleteContact.pending.type]: (state: InitialState) => {
    state.deleteContact.isLoading = true;
  },
  [deleteContact.rejected.type]: (state: InitialState) => {
    state.deleteContact.isLoading = false;
  },
  [deleteContact.fulfilled.type]: (state: InitialState, payload: PayloadAction<any>) => {
    state.deleteContact.isLoading = false;
    state.contacts = state.contacts.filter((contact: any) => contact.id !== (payload as any).meta.arg.id);
  },
};
