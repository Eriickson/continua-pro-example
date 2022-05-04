import { createSlice } from "@reduxjs/toolkit";
import { Contact } from "@continuapro/entity";
import { ItemsReducers } from "@continuapro/redux";

import { getContactsReducers } from "./actions/getContacts";
import { getContactReducers } from "./actions/getContact";
import { deleteContactReducers } from "./actions/deleteContact";
import { createContactReducers } from "./actions/createContacts";
import { updateContactReducers } from "./actions/updateContacts";
import { filterContactsReducers } from "./actions/filterContacts";

const initialStateItemReducer = {
  isLoading: false,
  data: [],
  err: null,
  hasError: false,
};

export interface InitialState {
  contacts: Contact[];
  contactsFiltered: {
    contacts: Contact[];
    query_selector: string;
  };
  contact: Contact | null;
  getContacts: ItemsReducers<Contact[]>;
  getContact: ItemsReducers<Contact>;
  filterContacts: ItemsReducers<{
    contacts: Contact[];
    query_selector: string;
  }>;
  createContact: ItemsReducers<Contact[]>;
  updateContact: ItemsReducers<Contact[]>;
  deleteContact: ItemsReducers<Contact[]>;
}

const initialState = {
  createContact: initialStateItemReducer,
  getContact: {} as ItemsReducers<Contact>,
  contacts: [],
  contactsFiltered: {
    contacts: [],
    query_selector: "",
  },
  getContacts: initialStateItemReducer,
  contact: null,
  filterContacts: {
    ...initialStateItemReducer,
    data: {
      contacts: [],
      query_selector: "",
    },
  },
  updateContact: initialStateItemReducer,
  deleteContact: initialStateItemReducer,
} as InitialState;

const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {},
  extraReducers: {
    ...getContactsReducers,
    ...getContactReducers,
    ...deleteContactReducers,
    ...createContactReducers,
    ...updateContactReducers,
    ...filterContactsReducers,
  },
});

export const { reducer } = contactSlice;

export default contactSlice.reducer;
