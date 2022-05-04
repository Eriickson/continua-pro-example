import { createAsyncThunk } from "@reduxjs/toolkit";

import { apiService } from "@/settings";

import { InitialState } from "../..";
import { FnReducer } from "@continuapro/redux";
import { CampaignType, MailingCampaign } from "@continuapro/entity";

interface SaveAndSendCampaignArgs {
  id: number;
  campaignType: CampaignType;
}

export const saveAndSendCampaign = createAsyncThunk(
  "campaigns/get/details/save_and_send",
  async ({ campaignType, id }: SaveAndSendCampaignArgs) =>
    apiService({
      method: "post",
      url: `/${campaignType}/campaigns/${id}/save_and_send`,
    })
);

export const saveAndSendCampaignReducers: FnReducer<InitialState, MailingCampaign> = {
  [saveAndSendCampaign.pending.type]: (state, { meta }) => {
    const campaignType = meta.arg.campaignType as CampaignType;
    state[campaignType].saveAndSendCampaign.isLoading = true;
  },
  [saveAndSendCampaign.rejected.type]: (state, { meta }) => {
    const campaignType = meta.arg.campaignType as CampaignType;
    state[campaignType].saveAndSendCampaign.isLoading = false;
  },
  [saveAndSendCampaign.fulfilled.type]: (state, { payload, meta }) => {
    const campaignType = meta.arg.campaignType as CampaignType;
    state[campaignType].saveAndSendCampaign.isLoading = false;
    state[campaignType].saveAndSendCampaign.data = payload.data.data;
    state[campaignType].saveAndSendCampaign.data = payload.data.data;
  },
};
