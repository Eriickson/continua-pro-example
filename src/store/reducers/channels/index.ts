import { initialStateItemReducer, initialStateItemReducerArray } from "@/utils";
import { Channel, ItemsReducers } from "@continuapro/redux";
import { createSlice } from "@reduxjs/toolkit";

import { getChannelReducers } from "./actions/getChannel";
import { getChannelsReducers } from "./actions/getChannels";

export interface InitialState {
  channels: Channel[];
  channel: Channel | null;
  getChannels: ItemsReducers<Channel[]>;
  getChannel: ItemsReducers<Channel | null>;
}
const initialState: InitialState = {
  channels: [],
  channel: null,
  getChannels: initialStateItemReducerArray,
  getChannel: initialStateItemReducer,
};

const channelSlice = createSlice({
  name: "channels",
  initialState,
  reducers: {},
  extraReducers: { ...getChannelsReducers, ...getChannelReducers },
});

export const { reducer } = channelSlice;

export default channelSlice.reducer;
