import { createAsyncThunk } from "@reduxjs/toolkit";

import { apiService } from "@/settings";

import { InitialState } from "../..";
import { FnReducer } from "@continuapro/redux";
import { Campaign, CampaignStatus, CampaignSumary, CampaignType } from "@continuapro/entity";

interface UpdateCampaignsArgs {
  id: number;
  campaign: Partial<CampaignSumary> & {
    contact_segment_id?: number;
    sender_id?: number;
    campaign_template_id?: number;
  };
  campaignType: CampaignType;
}

export const updateCampaign = createAsyncThunk(
  "campaigns/update",
  async ({ id, campaign, campaignType }: UpdateCampaignsArgs) =>
    apiService({
      method: "put",
      url: `/${campaignType}/campaigns/${id}`,
      data: { campaign },
    })
);

export const updateCampaignReducers: FnReducer<InitialState, Campaign> = {
  [updateCampaign.pending.type]: (state, { meta }) => {
    const campaignType = meta.arg.campaignType as CampaignType;
    state[campaignType].updateCampaign.isLoading = true;
  },
  [updateCampaign.rejected.type]: (state, { meta }) => {
    const campaignType = meta.arg.campaignType as CampaignType;
    state[campaignType].updateCampaign.isLoading = false;
  },
  [updateCampaign.fulfilled.type]: (state, { payload, meta }) => {
    const campaignType = meta.arg.campaignType as CampaignType;
    const status = meta.arg.status as CampaignStatus;

    state[campaignType].updateCampaign.isLoading = false;

    // if (status) {
    //   (state[campaignType] as any).campaigns[status] = payload.data.data;
    // } else {
    //   (state[campaignType].campaigns as any) = payload.data.data;
    // }
  },
};
