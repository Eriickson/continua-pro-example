import { createAsyncThunk } from "@reduxjs/toolkit";

import { apiService } from "@/settings";

import { InitialState } from "../..";
import { FnReducer } from "@continuapro/redux";
import { CampaignType, MailingCampaign } from "@continuapro/entity";

interface GetCampaignArgs {
  id: number;
  campaignType: CampaignType;
}

export const getCampaign = createAsyncThunk("campaigns/get/details", async ({ campaignType, id }: GetCampaignArgs) =>
  apiService({
    method: "get",
    url: `/${campaignType}/campaigns/${id}`,
  })
);

export const getCampaignReducers: FnReducer<InitialState, MailingCampaign> = {
  [getCampaign.pending.type]: (state, { meta }) => {
    const campaignType = meta.arg.campaignType as CampaignType;
    state[campaignType].getCampaign.isLoading = true;
  },
  [getCampaign.rejected.type]: (state, { meta }) => {
    const campaignType = meta.arg.campaignType as CampaignType;
    state[campaignType].getCampaign.isLoading = false;
  },
  [getCampaign.fulfilled.type]: (state, { payload, meta }) => {
    const campaignType = meta.arg.campaignType as CampaignType;
    state[campaignType].getCampaign.isLoading = false;
    state[campaignType].getCampaign.data = payload.data.data;
    state[campaignType].campaign = payload.data.data;
  },
};
