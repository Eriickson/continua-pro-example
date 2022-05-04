import { createSlice } from "@reduxjs/toolkit";
import { initialStateItemReducer, initialStateItemReducerArray } from "@/utils";

import { getSystemSettingReducer } from "./actions/getSystemSetting";
import { getSystemSettingsReducers } from "./actions/getSystemSettings";
import { createSettingReducers } from "./actions/createSystemSetting";
import { updateSettingReducers } from "./actions/updateSystemSetting";
import { deleteSettingReducers } from "./actions/deleteSystemSetting";
import { ItemsReducers } from "@continuapro/redux";
import { Setting } from "@continuapro/entity";

export interface InitialState {
  systemSettings: Setting[];
  systemSetting: Setting | null;
  getSystemSettings: ItemsReducers<Setting[]>;
  getSystemSetting: ItemsReducers<Setting>;
  createSystemSetting: ItemsReducers<Setting>;
  updateSystemSetting: ItemsReducers<Setting>;
  deleteSystemSetting: ItemsReducers<Setting>;
}

const initialState = {
  systemSetting: null,
  systemSettings: [],
  getSystemSettings: initialStateItemReducerArray,
  deleteSystemSetting: initialStateItemReducer,
  getSystemSetting: initialStateItemReducer,
  createSystemSetting: initialStateItemReducer,
  updateSystemSetting: initialStateItemReducer,
} as InitialState;

const settingSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {},
  extraReducers: {
    ...getSystemSettingReducer,
    ...getSystemSettingsReducers,
    ...createSettingReducers,
    ...updateSettingReducers,
    ...deleteSettingReducers,
  },
});

export const { reducer } = settingSlice;

export default settingSlice.reducer;
