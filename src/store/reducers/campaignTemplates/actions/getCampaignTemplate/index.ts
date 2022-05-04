import { apiService } from "@/settings";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { FnReducer, GetCampaignTemplateArgs } from "@continuapro/redux";
import { CampaignTemplate, CampaignType } from "@continuapro/entity";

import { InitialState } from "../..";

export const getCampaignTemplate = createAsyncThunk(
  "campaign_templates/get/details",
  async ({ id, campaignType }: GetCampaignTemplateArgs) =>
    apiService({ method: "get", url: `/${campaignType}/campaign_templates/${id}` })
);

export const getCampaignTemplateReducers: FnReducer<InitialState, CampaignTemplate> = {
  [getCampaignTemplate.pending.type]: (state, { meta }) => {
    const campaignType = meta.arg.campaignType as CampaignType;
    state[campaignType].getCampaignTemplate.isLoading = true;
  },
  [getCampaignTemplate.rejected.type]: (state, { meta }) => {
    const campaignType = meta.arg.campaignType as CampaignType;
    state[campaignType].getCampaignTemplate.isLoading = false;
  },
  [getCampaignTemplate.fulfilled.type]: (state, { payload, meta }) => {
    const campaignType = meta.arg.campaignType as CampaignType;

    state[campaignType].getCampaignTemplate.isLoading = false;
    state[campaignType].campaignTemplate = payload.data.data;
    state[campaignType].getCampaignTemplate.data = payload.data.data;
  },
};
