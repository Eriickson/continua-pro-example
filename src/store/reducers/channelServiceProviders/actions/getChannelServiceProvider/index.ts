import { createAsyncThunk } from "@reduxjs/toolkit";

import { apiService } from "@/settings";

import { InitialState } from "../..";
import { FnReducer } from "@continuapro/redux";
import { ChannelServiceProvider } from "@continuapro/entity";

interface GetChannelArgs {
  id: number;
}

export const getChannelServiceProvider = createAsyncThunk(
  "channel_service_providers/get/detail",
  async ({ id }: GetChannelArgs) => apiService({ method: "get", url: `/channel_service_providers/${id}` })
);

export const getChannelServiceProviderReducers: FnReducer<InitialState, ChannelServiceProvider> = {
  [getChannelServiceProvider.pending.type]: (state) => {
    state.getChannelServiceProvider.isLoading = true;
  },
  [getChannelServiceProvider.rejected.type]: (state) => {
    state.getChannelServiceProvider.isLoading = false;
  },
  [getChannelServiceProvider.fulfilled.type]: (state, { payload }) => {
    state.getChannelServiceProvider.isLoading = false;
    state.channelServiceProvider = payload.data.data;
    state.getChannelServiceProvider.data = payload.data.data;
  },
};
