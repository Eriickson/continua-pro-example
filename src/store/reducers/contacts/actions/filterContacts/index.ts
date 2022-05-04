import { createAsyncThunk } from "@reduxjs/toolkit";

import { apiService } from "@/settings";

import { InitialState } from "../..";
import { FnReducer } from "@continuapro/redux";
import { Contact } from "@continuapro/entity";

interface filterContactsArgs {
  conditions: any;
}

export const filterContacts = createAsyncThunk("contacts/get/filter", async ({ conditions }: filterContactsArgs) =>
  apiService({
    method: "post",
    url: "/contacts/filter",
    data: { conditions },
  })
);

export const filterContactsReducers: FnReducer<InitialState, { query_selector: string; contacts: Contact[] }> = {
  [filterContacts.pending.type]: (state) => {
    state.filterContacts.isLoading = true;
  },
  [filterContacts.rejected.type]: (state) => {
    state.filterContacts.isLoading = false;
  },
  [filterContacts.fulfilled.type]: (state, { payload }) => {
    state.filterContacts.isLoading = false;
    state.filterContacts.data = payload.data.data;
    state.contactsFiltered = payload.data.data;
  },
};
