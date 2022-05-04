import { apiService } from "@/settings";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { DeleteCampaignTemplateArgs, FnReducer } from "@continuapro/redux";
import { CampaignTemplate, CampaignType } from "@continuapro/entity";

import { InitialState } from "../..";

export const deleteCampaignTemplate = createAsyncThunk(
  "campaign_templates/delete",
  async ({ id, campaignType }: DeleteCampaignTemplateArgs) =>
    apiService({ method: "delete", url: `/${campaignType}/campaign_templates/${id}` })
);

export const deleteCampaignTemplateReducers: FnReducer<InitialState, CampaignTemplate> = {
  [deleteCampaignTemplate.pending.type]: (state, { meta }) => {
    const campaignType = meta.arg.campaignType as CampaignType;
    state[campaignType].deleteCampaignTemplate.isLoading = true;
  },
  [deleteCampaignTemplate.rejected.type]: (state, { meta }) => {
    const campaignType = meta.arg.campaignType as CampaignType;
    state[campaignType].deleteCampaignTemplate.isLoading = false;
  },
  [deleteCampaignTemplate.fulfilled.type]: (state, { payload, meta }) => {
    const campaignType = meta.arg.campaignType as CampaignType;
    state[campaignType].deleteCampaignTemplate.isLoading = false;
    state[campaignType].deleteCampaignTemplate.data = payload.data.data;
    state[campaignType].campaignTemplates = state[campaignType].campaignTemplates.filter(
      (campaignTemplate) => campaignTemplate.id !== meta.arg.id
    );
  },
};
