import { createAsyncThunk } from "@reduxjs/toolkit";

import { apiService } from "@/settings";

import { InitialState } from "../..";
import { CreateCampaignTemplateArgs, FnReducer } from "@continuapro/redux";
import { CampaignTemplate, CampaignType } from "@continuapro/entity";

export const createCampaignTemplate = createAsyncThunk(
  "campaign_templates/create",
  async ({ campaign_template, campaignType }: CreateCampaignTemplateArgs) =>
    apiService({ method: "post", url: `/${campaignType}/campaign_templates`, data: { campaign_template } })
);

export const createCampaignTemplateReducers: FnReducer<InitialState, CampaignTemplate> = {
  [createCampaignTemplate.pending.type]: (state, { meta }) => {
    const campaignType = meta.arg.campaignType as CampaignType;

    state[campaignType].createCampaignTemplate.isLoading = true;
  },
  [createCampaignTemplate.rejected.type]: (state, { meta }) => {
    const campaignType = meta.arg.campaignType as CampaignType;

    state[campaignType].createCampaignTemplate.isLoading = false;
  },
  [createCampaignTemplate.fulfilled.type]: (state, { payload, meta }) => {
    const campaignType = meta.arg.campaignType as CampaignType;

    state[campaignType].createCampaignTemplate.isLoading = false;
    state[campaignType].createCampaignTemplate.data = payload.data.data;
    state[campaignType].campaignTemplates = [...state[campaignType].campaignTemplates, payload.data.data];
  },
};
