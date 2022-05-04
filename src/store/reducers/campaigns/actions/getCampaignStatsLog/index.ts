import { createAsyncThunk } from "@reduxjs/toolkit";

import { apiService } from "@/settings";

import { InitialState } from "../..";
import { FnReducer } from "@continuapro/redux";
import { CampaignStatsLog, CampaignType } from "@continuapro/entity";

interface GetCampaignArgs {
  id: number;
  campaignType: "mailing" | "sms";
}

export const getCampaignStatsLog = createAsyncThunk(
  "campaigns/get/details/stats_log/get",
  async ({ campaignType, id }: GetCampaignArgs) =>
    apiService({
      method: "get",
      url: `/${campaignType}/campaigns/${id}/stats_log`,
    })
);

export const getCampaignStatsLogReducers: FnReducer<InitialState, CampaignStatsLog> = {
  [getCampaignStatsLog.pending.type]: (state, { meta }) => {
    const campaignType = meta.arg.campaignType as CampaignType;
    state[campaignType].getCampaignStatsLog.isLoading = true;
  },
  [getCampaignStatsLog.rejected.type]: (state, { meta }) => {
    const campaignType = meta.arg.campaignType as CampaignType;
    state[campaignType].getCampaignStatsLog.isLoading = false;
  },
  [getCampaignStatsLog.fulfilled.type]: (state, { payload, meta }) => {
    const campaignType = meta.arg.campaignType as CampaignType;
    state[campaignType].getCampaignStatsLog.isLoading = false;
    state[campaignType].getCampaignStatsLog.data = payload.data.data;
    state[campaignType].campaignStatsLog = payload.data.data;
  },
};
