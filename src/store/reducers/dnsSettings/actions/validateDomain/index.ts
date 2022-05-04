import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { apiService } from "@/settings";
import { InitialState } from "../..";

interface ValidateDomainArgs {
  dns_setting: {
    domain: string;
  };
}

export interface ValidateDomainResponse {
  id: number;
  domain: string;
  spf: string;
  dkim: string;
  tracking_domain: string;
  forwarding_domain: string;
  bouncing_domain: string;
  domain_validation_status: string;
}

export const validateDomain = createAsyncThunk("dns_settings/validate_domain", async (data: ValidateDomainArgs) =>
  apiService({
    method: "put",
    url: "/dns_settings/validate_domain",
    data,
  })
);

export const validateDomainReducers: any = {
  [validateDomain.pending.type]: (state: InitialState) => {
    state.validateDomain.isLoading = true;
  },
  [validateDomain.rejected.type]: (state: InitialState) => {
    state.validateDomain.isLoading = false;
  },
  // prettier-ignore
  [validateDomain.fulfilled.type]: (state: InitialState,{ payload }: PayloadAction<any>) => {
    state.validateDomain.isLoading = false;
    state.validateDomain.data = payload.data.data;
  },
};
