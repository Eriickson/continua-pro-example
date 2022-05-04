import { createAsyncThunk } from "@reduxjs/toolkit";

import { ChannelServiceProvider } from "@continuapro/entity";
import { CreateChannelServiceProvider, FnReducer } from "@continuapro/redux";

import { apiService } from "@/settings";

import { InitialState } from "../..";

export const createChannelServiceProvider = createAsyncThunk(
  "channel_service_providers/create",
  async ({ channel_service_provider }: CreateChannelServiceProvider) =>
    apiService({
      method: "post",
      url: "/channel_service_providers",
      data: { channel_service_provider },
    })
);

export const createChannelServiceProviderReducer: FnReducer<InitialState, ChannelServiceProvider> = {
  [createChannelServiceProvider.pending.type]: (state) => {
    state.createChannelServiceProvider.isLoading = true;
  },
  [createChannelServiceProvider.rejected.type]: (state) => {
    state.createChannelServiceProvider.isLoading = false;
  },
  [createChannelServiceProvider.fulfilled.type]: (state, { payload }) => {
    state.createChannelServiceProvider.isLoading = false;
    state.createChannelServiceProvider.data = payload.data.data;
  },
};
