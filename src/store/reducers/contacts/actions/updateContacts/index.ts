import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import { apiService } from "@/settings";

import { InitialState } from "../..";
import { Contact } from "@continuapro/entity";

interface UpdateContactArgs {
  id: number;
  data: Partial<Contact & { custom_fields_attributes: { id: number; value: string }[] }>;
}

export const updateContact = createAsyncThunk("contacts/update", async ({ id, data }: UpdateContactArgs) =>
  apiService({
    method: "put",
    url: `/contacts/${id}`,
    data: { contact: data },
  })
);

export const updateContactReducers: any = {
  [updateContact.pending.type]: (state: InitialState) => {
    state.updateContact.isLoading = true;
  },
  [updateContact.rejected.type]: (state: InitialState) => {
    state.updateContact.isLoading = false;
  },
  [updateContact.fulfilled.type]: (state: InitialState, { payload }: PayloadAction<any>) => {
    state.updateContact.isLoading = false;
    state.updateContact.data = payload.data.data;
    state.contacts = state.contacts.map((contact) =>
      contact.id === payload.data.data.id ? payload.data.data : contact
    );
  },
};
