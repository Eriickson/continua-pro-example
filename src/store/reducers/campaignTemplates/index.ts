import { createSlice } from "@reduxjs/toolkit";
import { CampaignTemplate } from "@continuapro/entity";
import { ItemsReducers } from "@continuapro/redux";
import { initialStateItemReducer, initialStateItemReducerArray } from "@/utils";

import { createCampaignTemplateReducers } from "./actions/createCampaignTemplate";
import { getCampaignTemplateReducers } from "./actions/getCampaignTemplate";
import { getCampaignTemplatesReducers } from "./actions/getCampaignTemplates";
import { updateCampaignTemplateReducers } from "./actions/updateCampaignTemplate";
import { deleteCampaignTemplateReducers } from "./actions/deleteCampaignTemplate";

export interface InitialState {
  mailing: {
    campaignTemplates: CampaignTemplate[];
    campaignTemplate: CampaignTemplate | null;
    getCampaignTemplates: ItemsReducers<CampaignTemplate[]>;
    getCampaignTemplate: ItemsReducers<CampaignTemplate>;
    createCampaignTemplate: ItemsReducers<CampaignTemplate>;
    updateCampaignTemplate: ItemsReducers<CampaignTemplate>;
    deleteCampaignTemplate: ItemsReducers<CampaignTemplate>;
  };
  sms: {
    campaignTemplates: CampaignTemplate[];
    campaignTemplate: CampaignTemplate | null;
    getCampaignTemplates: ItemsReducers<CampaignTemplate[]>;
    getCampaignTemplate: ItemsReducers<CampaignTemplate>;
    createCampaignTemplate: ItemsReducers<CampaignTemplate>;
    deleteCampaignTemplate: ItemsReducers<CampaignTemplate>;
    updateCampaignTemplate: ItemsReducers<CampaignTemplate>;
  };
}

export const initialState: InitialState = {
  mailing: {
    campaignTemplates: [],
    campaignTemplate: null,
    getCampaignTemplates: initialStateItemReducerArray,
    createCampaignTemplate: initialStateItemReducer,
    getCampaignTemplate: initialStateItemReducer,
    updateCampaignTemplate: initialStateItemReducer,
    deleteCampaignTemplate: initialStateItemReducer,
  },
  sms: {
    campaignTemplates: [],
    campaignTemplate: null,
    getCampaignTemplates: initialStateItemReducerArray,
    getCampaignTemplate: initialStateItemReducer,
    createCampaignTemplate: initialStateItemReducer,
    updateCampaignTemplate: initialStateItemReducer,
    deleteCampaignTemplate: initialStateItemReducer,
  },
};

const campaignTemplateSlice = createSlice({
  name: "campaignTemplates",
  initialState,
  reducers: {},
  extraReducers: {
    ...createCampaignTemplateReducers,
    ...getCampaignTemplateReducers,
    ...getCampaignTemplatesReducers,
    ...updateCampaignTemplateReducers,
    ...deleteCampaignTemplateReducers,
  },
});

export const { reducer } = campaignTemplateSlice;

export default campaignTemplateSlice.reducer;
