import { createAsyncThunk } from "@reduxjs/toolkit";

import { apiService } from "@/settings";

import { InitialState } from "../..";
import { FnReducer } from "@continuapro/redux";
import { Campaign, CampaignStatus, CampaignType } from "@continuapro/entity";

interface GetCampaignsArgs {
  campaignType: "mailing" | "sms";
  status?: "draft" | "scheduled" | "sent" | "all";
}

export const getCampaigns = createAsyncThunk("campaigns/get", async ({ campaignType, status }: GetCampaignsArgs) =>
  apiService({
    method: "get",
    url: `/${campaignType}/campaigns${status ? `?status=${status}` : ""}`,
  })
);

export const getCampaignsReducers: FnReducer<InitialState, Campaign[]> = {
  [getCampaigns.pending.type]: (state, { meta }) => {
    const campaignType = meta.arg.campaignType as CampaignType;

    state[campaignType].getCampaign.isLoading = true;
  },
  [getCampaigns.rejected.type]: (state, { meta }) => {
    const campaignType = meta.arg.campaignType as CampaignType;
    state[campaignType].getCampaign.isLoading = false;
  },
  [getCampaigns.fulfilled.type]: (state, { payload, meta }) => {
    const campaignType = meta.arg.campaignType as CampaignType;
    const status = meta.arg.status as CampaignStatus;
    state[campaignType].getCampaigns.isLoading = false;

    if (status) {
      (state[campaignType].campaigns as any)[status] = payload.data.data;
    } else {
      (state[campaignType].campaigns as any) = payload.data.data;
    }
  },
};
