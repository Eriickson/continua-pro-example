import { createAsyncThunk } from "@reduxjs/toolkit";

import { FnReducer } from "@continuapro/redux";
import { PersonalizedAttribute } from "@continuapro/entity";

import { apiService } from "@/settings";

import { InitialState } from "../..";

interface UpdatePersonalizedAttributeArgs {
  id: number;
  personalized_attribute: Omit<PersonalizedAttribute, "id">;
}

export const updatePersonalizedAttribute = createAsyncThunk(
  "personalized_attributes/create",
  async ({ id, personalized_attribute }: UpdatePersonalizedAttributeArgs) =>
    apiService({ method: "put", url: `/personalized_attributes/${id}`, data: { personalized_attribute } })
);

export const updatePersonalizedAttributeReducers: FnReducer<InitialState, PersonalizedAttribute> = {
  [updatePersonalizedAttribute.pending.type]: (state) => {
    state.updatePersonalizedAttribute.isLoading = true;
  },
  [updatePersonalizedAttribute.rejected.type]: (state) => {
    state.updatePersonalizedAttribute.isLoading = false;
  },
  [updatePersonalizedAttribute.fulfilled.type]: (state, { payload }) => {
    state.updatePersonalizedAttribute.isLoading = false;
    state.updatePersonalizedAttribute.data = payload.data.data;
  },
};
