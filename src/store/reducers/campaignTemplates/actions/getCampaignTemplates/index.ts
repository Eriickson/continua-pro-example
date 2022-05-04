import { apiService } from "@/settings";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { FnReducer } from "@continuapro/redux";
import { CampaignTemplate, CampaignType } from "@continuapro/entity";

import { InitialState } from "../..";

interface GetCampaignTemplatesArgs {
  campaignType: "mailing" | "sms";
}

export const getCampaignTemplates = createAsyncThunk(
  "campaign_templates/get",
  async ({ campaignType }: GetCampaignTemplatesArgs) =>
    apiService({ method: "get", url: `/${campaignType}/campaign_templates` })
);

export const getCampaignTemplatesReducers: FnReducer<InitialState, CampaignTemplate[]> = {
  [getCampaignTemplates.pending.type]: (state, { meta }) => {
    const campaignType = meta.arg.campaignType as CampaignType;
    state[campaignType].getCampaignTemplates.isLoading = true;
  },
  [getCampaignTemplates.rejected.type]: (state, { payload, meta }) => {
    const campaignType = meta.arg.campaignType as CampaignType;
    state[campaignType].getCampaignTemplates.isLoading = false;
  },
  [getCampaignTemplates.fulfilled.type]: (state, { payload, meta }) => {
    const campaignType = meta.arg.campaignType as CampaignType;
    state[campaignType].getCampaignTemplates.isLoading = false;
    state[campaignType].campaignTemplates = payload.data.data;
    state[campaignType].getCampaignTemplates.data = payload.data.data;
  },
};
