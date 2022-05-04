import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import { apiService } from "@/settings";

import { InitialState } from "../..";

interface GetChannelArgs {
  id: number;
}

export const getChannel = createAsyncThunk("channels/get/detail", async ({ id }: GetChannelArgs) =>
  apiService({
    method: "get",
    url: `/channels/${id}`,
  })
);

export const getChannelReducers: any = {
  [getChannel.pending.type]: (state: InitialState) => {
    state.getChannel.isLoading = true;
  },
  [getChannel.rejected.type]: (state: InitialState) => {
    state.getChannel.isLoading = false;
  },
  [getChannel.fulfilled.type]: (state: InitialState, { payload }: PayloadAction<any>) => {
    state.getChannel.isLoading = false;
    state.channel = payload.data.data;
    state.getChannel.data = payload.data.data;
  },
};
