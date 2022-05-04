import { apiService } from "@/settings";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { FnReducer } from "@continuapro/redux";
import { PersonalizedAttribute } from "@continuapro/entity";

import { InitialState } from "../..";

interface DeletePersonalizedAttributeArgs {
  id: number;
}

export const deletePersonalizedAttribute = createAsyncThunk(
  "personalized_attributes/delete",
  async ({ id }: DeletePersonalizedAttributeArgs) =>
    apiService({ method: "delete", url: `/personalized_attributes/${id}` })
);

export const deletePersonalizedAttributeReducers: FnReducer<InitialState, PersonalizedAttribute> = {
  [deletePersonalizedAttribute.pending.type]: (state) => {
    state.deletePersonalizedAttribute.isLoading = true;
  },
  [deletePersonalizedAttribute.rejected.type]: (state) => {
    state.deletePersonalizedAttribute.isLoading = false;
  },
  [deletePersonalizedAttribute.fulfilled.type]: (state, payload) => {
    state.deletePersonalizedAttribute.isLoading = false;
    state.deletePersonalizedAttribute.data = payload.payload.data.data;
    state.personalizedAttributes = state.personalizedAttributes.filter((personalizedAttribute) => {
      return personalizedAttribute.id !== payload.meta.arg.id;
    });
  },
};
