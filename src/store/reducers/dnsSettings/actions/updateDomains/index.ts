import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { apiService } from "@/settings";
import { InitialState } from "../..";

interface updateDomainsArgs {
  dns_setting: {
    tracking_domain: string;
    forwarding_domain: string;
    bouncing_domain: string;
  };
}

export interface UpdateDomainsResponse {
  bouncing_domain: string;
  dkim: string;
  domain: string;
  domain_validation_status: string;
  forwarding_domain: string;
  id: number;
  spf: string;
  tracking_domain: string;
}

export const updateDomains = createAsyncThunk("dns_settings/update_domains", async (data: updateDomainsArgs) =>
  apiService({
    method: "put",
    url: "/dns_settings/update_domains",
    data,
  })
);

export const updateDomainsReducers = {
  [updateDomains.pending.type]: (state: InitialState) => {
    state.updateDomains.isLoading = true;
  },
  [updateDomains.rejected.type]: (state: InitialState) => {
    state.updateDomains.isLoading = false;
  },
  // prettier-ignore
  [updateDomains.fulfilled.type]: (state: InitialState,{ payload }: PayloadAction<any>) => {
      state.updateDomains.isLoading = false;
      state.updateDomains.data = payload.data.data;
    },
};
