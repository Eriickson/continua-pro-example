import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import { apiService } from "@/settings";

import { InitialState } from "../..";

export const getChannels = createAsyncThunk("channels/get", async () =>
  apiService({
    method: "get",
    url: "/channels",
  })
);

export const getChannelsReducers: any = {
  [getChannels.pending.type]: (state: InitialState) => {
    state.getChannels.isLoading = true;
  },
  [getChannels.rejected.type]: (state: InitialState) => {
    state.getChannels.isLoading = false;
  },
  [getChannels.fulfilled.type]: (state: InitialState, { payload }: PayloadAction<any>) => {
    state.getChannels.isLoading = false;
    state.channels = payload.data.data;
    state.getChannels.data = payload.data.data;
  },
};
