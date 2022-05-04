import { createAsyncThunk } from "@reduxjs/toolkit";

import { apiService } from "@/settings";

import { InitialState } from "../..";
import { FnReducer } from "@continuapro/redux";
import { Campaign, CampaignStatus, CampaignType } from "@continuapro/entity";

interface UpdateCampaignsArgs {
  id: number;
  status?: CampaignStatus;
  campaignType: CampaignType;
}

export const deleteCampaign = createAsyncThunk("campaigns/delete", async ({ id, campaignType }: UpdateCampaignsArgs) =>
  apiService({
    method: "delete",
    url: `/${campaignType}/campaigns/${id}`,
  })
);

export const deleteCampaignReducers: FnReducer<InitialState, Campaign[]> = {
  [deleteCampaign.pending.type]: (state, { meta }) => {
    const campaignType = meta.arg.campaignType as CampaignType;
    state[campaignType].deleteCampaign.isLoading = true;
  },
  [deleteCampaign.rejected.type]: (state, { meta }) => {
    const campaignType = meta.arg.campaignType as CampaignType;
    state[campaignType].deleteCampaign.isLoading = false;
  },
  [deleteCampaign.fulfilled.type]: (state, { meta }) => {
    const id = meta.arg.id as number;
    const campaignType = meta.arg.campaignType as CampaignType;
    const status = meta.arg.status as CampaignStatus;

    state[campaignType].deleteCampaign.isLoading = false;
    if (status) {
      (state[campaignType].campaigns as any)[status] = (state[campaignType].campaigns as any)[status].filter(
        (campaign: Campaign) => campaign.id !== id
      );
    } else {
      (state[campaignType].campaigns as any) = (state[campaignType].campaigns as any).filter(
        (campaign: Campaign) => campaign.id !== id
      );
    }
  },
};
