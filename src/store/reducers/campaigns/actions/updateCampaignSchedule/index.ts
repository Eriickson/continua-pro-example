import { createAsyncThunk } from "@reduxjs/toolkit";

import { apiService } from "@/settings";

import { InitialState } from "../..";
import { FnReducer } from "@continuapro/redux";
import { CampaignSchedule, CampaignType } from "@continuapro/entity";

interface UpdateCampaignScheduleArgs {
  id: number;
  campaignSchedule: Partial<CampaignSchedule>;
}

export const updateCampaignSchedule = createAsyncThunk(
  "campaign_schedules/update",
  async ({ id, campaignSchedule }: UpdateCampaignScheduleArgs) =>
    apiService({
      method: "put",
      url: `/campaign_schedules/${id}`,
      data: { campaign_schedule: campaignSchedule },
    })
);

export const updateCampaignScheduleReducers: FnReducer<InitialState, CampaignSchedule> = {
  [updateCampaignSchedule.pending.type]: (state) => {
    state.mailing.updateCampaignSchedule.isLoading = true;
  },
  [updateCampaignSchedule.rejected.type]: (state) => {
    state.mailing.updateCampaignSchedule.isLoading = false;
  },
  [updateCampaignSchedule.fulfilled.type]: (state, { payload, meta }) => {
    const campaignType = meta.arg.campaignType as CampaignType;
    // state[campaignType].updateCampaignSchedule.data = payload;
    /* (state[campaignType] as any).updateCampaignSchedule.isLoading = false;
    (state[campaignType] as any).updateCampaignSchedule.data = payload.data.data; */
  },
};
