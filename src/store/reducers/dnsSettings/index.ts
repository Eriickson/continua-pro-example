import { ItemsReducers } from "@continuapro/redux";
import { createSlice } from "@reduxjs/toolkit";
import { updateDomainsReducers, UpdateDomainsResponse } from "./actions/updateDomains";
import { updateInstructionsReducers, UpdateInstructionsResponse } from "./actions/updateInstructions";
import { validateDomainReducers, ValidateDomainResponse } from "./actions/validateDomain";

const initialStateItemReducer = {
  isLoading: false,
  data: {} as ValidateDomainResponse,
  err: null,
  hasError: false,
};
export interface InitialState {
  validateDomain: ItemsReducers<ValidateDomainResponse>;
  updateInstructions: ItemsReducers<UpdateInstructionsResponse>;
  updateDomains: ItemsReducers<UpdateDomainsResponse>;
}

const initialState: InitialState = {
  validateDomain: initialStateItemReducer,
  updateInstructions: initialStateItemReducer,
  updateDomains: initialStateItemReducer,
};

const dnsSettingsSlice = createSlice({
  name: "dnsSettingsSlice",
  initialState,
  reducers: {},
  extraReducers: {
    ...validateDomainReducers,
    ...updateInstructionsReducers,
    ...updateDomainsReducers,
  },
});

export const { reducer } = dnsSettingsSlice;

export default dnsSettingsSlice.reducer;
