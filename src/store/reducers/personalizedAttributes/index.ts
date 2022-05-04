import { createSlice } from "@reduxjs/toolkit";
import { PersonalizedAttribute } from "@continuapro/entity";
import { ItemsReducers } from "@continuapro/redux";
import { initialStateItemReducer, initialStateItemReducerArray } from "@/utils";

import { createPersonalizedAttributeReducers } from "./actions/createPersonalizedAttribute";
import { deletePersonalizedAttributeReducers } from "./actions/deletePersonalizedAttribute";
import { getPersonalizedAttributesReducers } from "./actions/getPersonalizedAttributes";
import { updatePersonalizedAttributeReducers } from "./actions/updatePersonalizedAttribute";

export interface InitialState {
  personalizedAttributes: PersonalizedAttribute[];
  getPersonalizedAttributes: ItemsReducers<PersonalizedAttribute[]>;
  getPersonalizedAttribute: ItemsReducers<PersonalizedAttribute>;
  createPersonalizedAttribute: ItemsReducers<PersonalizedAttribute>;
  updatePersonalizedAttribute: ItemsReducers<PersonalizedAttribute>;
  deletePersonalizedAttribute: ItemsReducers<PersonalizedAttribute>;
}

export const initialState: InitialState = {
  personalizedAttributes: [],
  getPersonalizedAttributes: initialStateItemReducerArray,
  createPersonalizedAttribute: initialStateItemReducer,
  getPersonalizedAttribute: initialStateItemReducer,
  updatePersonalizedAttribute: initialStateItemReducer,
  deletePersonalizedAttribute: initialStateItemReducer,
};

const personalizedAttributeSlice = createSlice({
  name: "personalizedAttributes",
  initialState,
  reducers: {},
  extraReducers: {
    ...createPersonalizedAttributeReducers,
    ...deletePersonalizedAttributeReducers,
    ...getPersonalizedAttributesReducers,
    ...updatePersonalizedAttributeReducers,
  },
});

export const { reducer } = personalizedAttributeSlice;

export default personalizedAttributeSlice.reducer;
