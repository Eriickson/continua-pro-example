import { createAsyncThunk } from "@reduxjs/toolkit";

import { apiService } from "@/settings";

import { InitialState } from "../..";
import { SendTestCampaignArgs, FnReducer } from "@continuapro/redux";
import { Campaign, CampaignStatus, CampaignType } from "@continuapro/entity";

export const sentTestCampaign = createAsyncThunk(
  "campaigns/get/details/send_test",
  async ({ campaignId, campaignType, recipient }: SendTestCampaignArgs) =>
    apiService({
      method: "post",
      url: `/${campaignType}/campaigns/${campaignId}/send_test`,
      data: { recipient },
    })
);

export const sentTestCampaignReducers: FnReducer<InitialState, Campaign[]> = {
  [sentTestCampaign.pending.type]: (state, { meta }) => {
    const campaignType = meta.arg.campaignType as CampaignType;

    state[campaignType].sentTestCampaign.isLoading = true;
  },
  [sentTestCampaign.rejected.type]: (state, { meta }) => {
    const campaignType = meta.arg.campaignType as CampaignType;
    state[campaignType].sentTestCampaign.isLoading = false;
  },
  [sentTestCampaign.fulfilled.type]: (state, { payload, meta }) => {
    const campaignType = meta.arg.campaignType as CampaignType;
    const status = meta.arg.status as CampaignStatus;

    state[campaignType].sentTestCampaign.isLoading = false;

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
