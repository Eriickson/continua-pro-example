import { createAsyncThunk } from "@reduxjs/toolkit";

import { apiService } from "@/settings";

import { InitialState } from "../..";
import { CreateCampaignsArgs, FnReducer } from "@continuapro/redux";
import { Campaign, CampaignStatus, CampaignType } from "@continuapro/entity";

export const createCampaign = createAsyncThunk(
  "campaigns/create",
  async ({ campaign, campaignType }: CreateCampaignsArgs) =>
    apiService({
      method: "post",
      url: `/${campaignType}/campaigns`,
      data: { campaign },
    })
);

export const createCampaignReducers: FnReducer<InitialState, Campaign[]> = {
  [createCampaign.pending.type]: (state, { meta }) => {
    const campaignType = meta.arg.campaignType as CampaignType;

    state[campaignType].getCampaign.isLoading = true;
  },
  [createCampaign.rejected.type]: (state, { meta }) => {
    const campaignType = meta.arg.campaignType as CampaignType;
    state[campaignType].getCampaign.isLoading = false;
  },
  [createCampaign.fulfilled.type]: (state, { payload, meta }) => {
    const campaignType = meta.arg.campaignType as CampaignType;
    const status = meta.arg.status as CampaignStatus;

    state[campaignType].createCampaign.isLoading = false;

    if (status) {
      (state[campaignType].campaigns as any)[status] = [
        ...(state[campaignType].campaigns as any)[status],
        payload.data.data,
      ];
    } else {
      // (state[campaignType].campaigns as any) = [...(state[campaignType].campaigns as any), payload.data.data];
    }
  },
};
