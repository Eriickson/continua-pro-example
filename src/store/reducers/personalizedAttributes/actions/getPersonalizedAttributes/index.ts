import { createAsyncThunk } from "@reduxjs/toolkit";

import { FnReducer } from "@continuapro/redux";
import { PersonalizedAttribute } from "@continuapro/entity";

import { apiService } from "@/settings";

import { InitialState } from "../..";

export const getPersonalizedAttributes = createAsyncThunk("personalized_attributes/get", async () =>
  apiService({ method: "get", url: "/personalized_attributes" })
);

export const getPersonalizedAttributesReducers: FnReducer<InitialState, PersonalizedAttribute[]> = {
  [getPersonalizedAttributes.pending.type]: (state) => {
    state.getPersonalizedAttributes.isLoading = true;
  },
  [getPersonalizedAttributes.rejected.type]: (state) => {
    state.getPersonalizedAttributes.isLoading = false;
  },
  [getPersonalizedAttributes.fulfilled.type]: (state, { payload }) => {
    state.getPersonalizedAttributes.isLoading = false;
    state.personalizedAttributes = payload.data.data;
    state.getPersonalizedAttributes.data = payload.data.data;
  },
};
