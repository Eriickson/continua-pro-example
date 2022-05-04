import { createAsyncThunk } from "@reduxjs/toolkit";

import { FnReducer } from "@continuapro/redux";
import { CampaignTemplate, CampaignType } from "@continuapro/entity";

import { apiService } from "@/settings";

import { InitialState } from "../..";

interface UpdateCampaignTemplateArgs {
  id: number;
  campaign_template: Omit<CampaignTemplate, "id">;
  campaignType: CampaignType;
}

export const updateCampaignTemplate = createAsyncThunk(
  "campaign_templates/update",
  async ({ id, campaign_template, campaignType }: UpdateCampaignTemplateArgs) =>
    apiService({ method: "put", url: `/${campaignType}/campaign_templates/${id}`, data: { campaign_template } })
);

export const updateCampaignTemplateReducers: FnReducer<InitialState, CampaignTemplate> = {
  [updateCampaignTemplate.pending.type]: (state, { meta }) => {
    const campaignType = meta.arg.campaignType as CampaignType;
    state[campaignType].updateCampaignTemplate.isLoading = true;
  },
  [updateCampaignTemplate.rejected.type]: (state, { meta }) => {
    const campaignType = meta.arg.campaignType as CampaignType;
    console.log(campaignType);

    state[campaignType].updateCampaignTemplate.isLoading = false;
  },
  [updateCampaignTemplate.fulfilled.type]: (state, { payload, meta }) => {
    const campaignType = meta.arg.campaignType as CampaignType;

    state[campaignType].updateCampaignTemplate.isLoading = false;
    state[campaignType].updateCampaignTemplate.data = payload.data.data;
    // state.campaignTemplates = [...state.campaignTemplates, payload.data.data];
  },
};
