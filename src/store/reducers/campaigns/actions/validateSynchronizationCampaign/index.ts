import { createAsyncThunk } from "@reduxjs/toolkit";

import { apiService } from "@/settings";

import { InitialState } from "../..";
import { FnReducer } from "@continuapro/redux";
import { CampaignType, MailingCampaign } from "@continuapro/entity";

interface GetCampaignArgs {
  id: number;
  campaignType: CampaignType;
}

export const validateSynchronizationCampaign = createAsyncThunk(
  "campaigns/get/details/validate_synchronization",
  async ({ campaignType, id }: GetCampaignArgs) =>
    apiService({
      method: "get",
      url: `/${campaignType}/campaigns/${id}/validate_synchronization`,
    })
);

export const validateSynchronizationCampaignReducers: FnReducer<InitialState, MailingCampaign> = {
  [validateSynchronizationCampaign.pending.type]: (state, { meta }) => {
    const campaignType = meta.arg.campaignType as CampaignType;
    state[campaignType].validateSynchronizationCampaign.isLoading = true;
  },
  [validateSynchronizationCampaign.rejected.type]: (state, { meta }) => {
    const campaignType = meta.arg.campaignType as CampaignType;
    state[campaignType].validateSynchronizationCampaign.isLoading = false;
  },
  [validateSynchronizationCampaign.fulfilled.type]: (state, { payload, meta }) => {
    const campaignType = meta.arg.campaignType as CampaignType;
    state[campaignType].validateSynchronizationCampaign.isLoading = false;
    state[campaignType].validateSynchronizationCampaign.data = payload.data.data;
  },
};
