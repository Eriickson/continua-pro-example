import { createAsyncThunk } from "@reduxjs/toolkit";

import { apiService } from "@/settings";

import { InitialState } from "../..";
import { ChannelServiceProvidersSetting } from "@continuapro/entity";
import { FnReducer } from "@continuapro/redux";

interface UpdateSettingArgs {
  id: number;
  channel_service_provider_setting: { value: string | number };
}

export const updateChannelServiceProvider = createAsyncThunk(
  "channel_service_provider_settings/update",
  async ({ id, channel_service_provider_setting }: UpdateSettingArgs) =>
    apiService({
      method: "put",
      url: `/channel_service_provider_settings/${id}`,
      data: { channel_service_provider_setting },
    })
);

export const updateChannelServiceProviderReducer: FnReducer<InitialState, ChannelServiceProvidersSetting> = {
  [updateChannelServiceProvider.pending.type]: (state) => {
    state.updateChannelServiceProvider.isLoading = true;
  },
  [updateChannelServiceProvider.rejected.type]: (state) => {
    state.updateChannelServiceProvider.isLoading = false;
  },
  [updateChannelServiceProvider.fulfilled.type]: (state, { payload }) => {
    state.updateChannelServiceProvider.isLoading = false;
    state.updateChannelServiceProvider.data = payload.data.data;
  },
};
