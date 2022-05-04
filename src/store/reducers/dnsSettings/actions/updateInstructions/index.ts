import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { apiService } from "@/settings";
import { InitialState } from "../..";

interface updateInstructionsArgs {
  dns_setting: {
    spf: string;
    dkim: string;
  };
}

export interface UpdateInstructionsResponse {
  bouncing_domain: string;
  dkim: string;
  domain: string;
  domain_validation_status: string;
  forwarding_domain: string;
  id: number;
  spf: string;
  tracking_domain: string;
}

export const updateInstructions = createAsyncThunk(
  "dns_settings/update_instructions",
  async (data: updateInstructionsArgs) =>
    apiService({
      method: "put",
      url: "/dns_settings/update_instructions",
      data,
    })
);

export const updateInstructionsReducers = {
  [updateInstructions.pending.type]: (state: InitialState) => {
    state.updateInstructions.isLoading = true;
  },
  [updateInstructions.rejected.type]: (state: InitialState) => {
    state.updateInstructions.isLoading = false;
  },
  // prettier-ignore
  [updateInstructions.fulfilled.type]: (state: InitialState,{ payload }: PayloadAction<any>) => {
      state.updateInstructions.isLoading = false;
      state.updateInstructions.data = payload.data.data;
    },
};
