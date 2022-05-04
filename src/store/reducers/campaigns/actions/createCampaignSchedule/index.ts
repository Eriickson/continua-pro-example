import { createAsyncThunk } from "@reduxjs/toolkit";

import { apiService } from "@/settings";

import { InitialState } from "../..";
import { FnReducer } from "@continuapro/redux";
import { CampaignSchedule } from "@continuapro/entity";

interface GetCampaignsArgs {
  campaignSchedule: Partial<CampaignSchedule>;
}

export const createCampaignSchedule = createAsyncThunk(
  "campaign_schedule/create",
  async ({ campaignSchedule }: GetCampaignsArgs) =>
    apiService({
      method: "post",
      url: `/campaign_schedules`,
      data: { campaign_schedule: campaignSchedule },
    })
);

export const createCampaignScheduleReducers: FnReducer<InitialState, CampaignSchedule> = {
  [createCampaignSchedule.pending.type]: (state) => {
    state.mailing.createCampaignSchedule.isLoading = true;
  },
  [createCampaignSchedule.rejected.type]: (state) => {
    state.mailing.createCampaignSchedule.isLoading = false;
  },
  [createCampaignSchedule.fulfilled.type]: (state, { payload }) => {
    state.mailing.createCampaignSchedule.isLoading = false;
    state.mailing.createCampaignSchedule.data = payload.data.data;
  },
};
