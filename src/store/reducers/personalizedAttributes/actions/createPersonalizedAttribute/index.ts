import { createAsyncThunk } from "@reduxjs/toolkit";

import { apiService } from "@/settings";

import { InitialState } from "../..";
import { FnReducer } from "@continuapro/redux";
import { PersonalizedAttribute } from "@continuapro/entity";

interface CreatePersonalizedAttributeArgs {
  personalized_attribute: Omit<PersonalizedAttribute, "id">;
}

export const createPersonalizedAttribute = createAsyncThunk(
  "personalized_attributes/create",
  async ({ personalized_attribute }: CreatePersonalizedAttributeArgs) =>
    apiService({ method: "post", url: `/personalized_attributes`, data: { personalized_attribute } })
);

export const createPersonalizedAttributeReducers: FnReducer<InitialState, PersonalizedAttribute> = {
  [createPersonalizedAttribute.pending.type]: (state) => {
    state.createPersonalizedAttribute.isLoading = true;
  },
  [createPersonalizedAttribute.rejected.type]: (state) => {
    state.createPersonalizedAttribute.isLoading = false;
  },
  [createPersonalizedAttribute.fulfilled.type]: (state, { payload }) => {
    state.createPersonalizedAttribute.isLoading = false;
    state.createPersonalizedAttribute.data = payload.data.data;
    state.personalizedAttributes = [...state.personalizedAttributes, payload.data.data];
  },
};
