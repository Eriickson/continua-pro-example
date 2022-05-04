import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import { apiService } from "@/settings";

import { InitialState } from "../..";
import { Contact } from "@continuapro/entity";

interface CreateContactArgs {
  contact: Partial<
    Contact & { custom_fields_attributes: { personalized_attribute_id?: number; id?: number; value: string }[] }
  >;
}

export const createContact = createAsyncThunk("contacts/create", async ({ contact }: CreateContactArgs) =>
  apiService({ method: "post", url: "/contacts", data: { contact } })
);

export const createContactReducers: any = {
  [createContact.pending.type]: (state: InitialState) => {
    state.createContact.isLoading = true;
  },
  [createContact.rejected.type]: (state: InitialState) => {
    state.createContact.isLoading = false;
  },
  // prettier-ignore
  [createContact.fulfilled.type]: (state: InitialState,{ payload }: PayloadAction<any>) => {
      state.createContact.isLoading = false;
      state.contacts = [...state.contacts, payload.data.data];
      state.createContact.data = payload.data.data;
    },
};
