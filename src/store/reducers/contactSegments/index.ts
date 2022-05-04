import { createSlice } from "@reduxjs/toolkit";

import { ItemsReducers } from "@continuapro/redux";

import { ContactSegment } from "@/types";

import { addContactToSegmentReducers } from "./actions/addContactToSegment";
import { createContactSegmentReducers } from "./actions/createContactSegment";
import { deleteContactSegmentReducers } from "./actions/deleteContactSegment";
import { getContactSegmentsReducers } from "./actions/getContactSegments";
import { getContactSegmentReducers } from "./actions/getContactSegment";
import { removeContactFromSegmentReducers } from "./actions/removeContactFromSegment";
import { updateContactSegmentReducers } from "./actions/updateContactSegment";
import { initialStateItemReducer, initialStateItemReducerArray } from "@/utils";

export interface InitialState {
  contactSegments: ContactSegment[];
  contactSegment: ContactSegment | null;
  getContactSegments: ItemsReducers<ContactSegment[]>;
  getContactSegment: ItemsReducers<ContactSegment>;
  createContactSegment: ItemsReducers<ContactSegment[]>;
  updateContactSegment: ItemsReducers<ContactSegment | null>;
  deleteContactSegment: ItemsReducers<ContactSegment[]>;
  addContactToSegment: ItemsReducers<ContactSegment[]>;
  removeContactFromSegment: ItemsReducers<ContactSegment[]>;
}

const initialState: InitialState = {
  contactSegments: [],
  contactSegment: null,
  getContactSegments: initialStateItemReducerArray,
  getContactSegment: {} as ItemsReducers<ContactSegment>,
  createContactSegment: initialStateItemReducer,
  updateContactSegment: initialStateItemReducer,
  deleteContactSegment: initialStateItemReducer,
  addContactToSegment: initialStateItemReducer,
  removeContactFromSegment: initialStateItemReducer,
};

const contactSegmentSlice = createSlice({
  name: "contactSegments",
  initialState,
  reducers: {},
  extraReducers: {
    ...createContactSegmentReducers,
    ...deleteContactSegmentReducers,
    ...getContactSegmentsReducers,
    ...getContactSegmentReducers,
    ...updateContactSegmentReducers,
    ...addContactToSegmentReducers,
    ...removeContactFromSegmentReducers,
  },
});

export const { reducer } = contactSegmentSlice;

export default contactSegmentSlice.reducer;
