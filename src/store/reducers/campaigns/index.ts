import { initialStateItemReducer, initialStateItemReducerArray } from "@/utils";
import { createSlice } from "@reduxjs/toolkit";

import { getCampaignReducers } from "./actions/getCampaign";
import { getCampaignsReducers } from "./actions/getCampaigns";
import { createCampaignReducers } from "./actions/createCampaign";
import { getCampaignStatsLogReducers } from "./actions/getCampaignStatsLog";
import { updateCampaignReducers } from "./actions/updateCampaign";
import {
  Campaign,
  CampaignSchedule,
  CampaignStatsLog,
  CampaignStatus,
  CampaignSumary,
  MailingCampaign,
  SmsCampaign,
} from "@continuapro/entity";
import { ItemsReducers } from "@continuapro/redux";
import { createCampaignScheduleReducers } from "./actions/createCampaignSchedule";
import { updateCampaignScheduleReducers } from "./actions/updateCampaignSchedule";
import { deleteCampaignReducers } from "./actions/deleteCampaign";
import { sentTestCampaignReducers } from "./actions/sentTestCampaign";
import { validateSynchronizationCampaignReducers } from "./actions/validateSynchronizationCampaign";
import { saveAndSendCampaignReducers } from "./actions/saveAndSendCampaign";

export interface InitialState {
  mailing: {
    campaigns: Record<CampaignStatus, Campaign[]>;
    campaign: MailingCampaign | null;
    campaignStatsLog: CampaignStatsLog | null;
    getCampaign: ItemsReducers<MailingCampaign>;
    getCampaigns: ItemsReducers<MailingCampaign[]>;
    getCampaignStatsLog: ItemsReducers<CampaignStatsLog>;
    createCampaign: ItemsReducers<MailingCampaign>;
    updateCampaign: ItemsReducers<MailingCampaign>;
    updateCampaignSchedule: ItemsReducers<CampaignSchedule>;
    createCampaignSchedule: ItemsReducers<CampaignSchedule>;
    deleteCampaign: ItemsReducers<MailingCampaign>;
    sentTestCampaign: ItemsReducers<any>;
    validateSynchronizationCampaign: ItemsReducers<MailingCampaign>;
    saveAndSendCampaign: ItemsReducers<MailingCampaign>;
  };
  sms: {
    campaigns: SmsCampaign[];
    campaign: CampaignSumary | null;
    campaignStatsLog: CampaignStatsLog | null;
    getCampaign: ItemsReducers<SmsCampaign>;
    getCampaigns: ItemsReducers<SmsCampaign[]>;
    createCampaign: ItemsReducers<SmsCampaign>;
    updateCampaign: ItemsReducers<SmsCampaign>;
    updateCampaignSchedule: ItemsReducers<CampaignSchedule>;
    createCampaignSchedule: ItemsReducers<CampaignSchedule>;
    deleteCampaign: ItemsReducers<SmsCampaign>;
    getCampaignStatsLog: ItemsReducers<CampaignStatsLog>;
    sentTestCampaign: ItemsReducers<any>;
    validateSynchronizationCampaign: ItemsReducers<SmsCampaign>;
    saveAndSendCampaign: ItemsReducers<SmsCampaign>;
  };
}

const initialState = {
  mailing: {
    campaigns: { all: [], active: [], draft: [], paused: [], scheduled: [], sent: [] },
    campaign: null,
    campaignStatsLog: null,
    getCampaign: initialStateItemReducer,
    getCampaigns: initialStateItemReducerArray,
    getCampaignStatsLog: initialStateItemReducer,
    createCampaign: initialStateItemReducer,
    updateCampaign: initialStateItemReducer,
    updateCampaignSchedule: initialStateItemReducer,
    createCampaignSchedule: initialStateItemReducer,
    deleteCampaign: initialStateItemReducer,
    sentTestCampaign: initialStateItemReducer,
    validateSynchronizationCampaign: initialStateItemReducer,
    saveAndSendCampaign: initialStateItemReducer,
  },
  sms: {
    campaigns: [],
    campaign: null,
    campaignStatsLog: null,
    getCampaign: initialStateItemReducer,
    getCampaigns: initialStateItemReducerArray,
    updateCampaign: initialStateItemReducer,
    createCampaign: initialStateItemReducer,
    updateCampaignSchedule: initialStateItemReducer,
    createCampaignSchedule: initialStateItemReducer,
    deleteCampaign: initialStateItemReducer,
    getCampaignStatsLog: initialStateItemReducer,
    sentTestCampaign: initialStateItemReducer,
    validateSynchronizationCampaign: initialStateItemReducer,
    saveAndSendCampaign: initialStateItemReducer,
  },
} as InitialState;

const campaignSlice = createSlice({
  name: "campaigns",
  initialState,
  reducers: {},
  extraReducers: {
    ...getCampaignReducers,
    ...getCampaignsReducers,
    ...getCampaignStatsLogReducers,
    ...createCampaignReducers,
    ...updateCampaignReducers,
    ...updateCampaignScheduleReducers,
    ...createCampaignScheduleReducers,
    ...deleteCampaignReducers,
    ...sentTestCampaignReducers,
    ...validateSynchronizationCampaignReducers,
    ...saveAndSendCampaignReducers,
  },
});

export const { reducer } = campaignSlice;
export default campaignSlice.reducer;
