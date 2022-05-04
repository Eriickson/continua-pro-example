import { initialStateItemReducer } from "@/utils";
import { ItemsReducers } from "@continuapro/redux";
import { ChannelServiceProvider, ChannelServiceProvidersSetting } from "@continuapro/entity";
import { createSlice } from "@reduxjs/toolkit";

import { getChannelServiceProviderReducers } from "./actions/getChannelServiceProvider";
import { updateChannelServiceProviderReducer } from "./actions/updateChannelServiceProvider";

export interface InitialState {
  channelServiceProvider: ChannelServiceProvider | null;
  getChannelServiceProvider: ItemsReducers<ChannelServiceProvider>;
  createChannelServiceProvider: ItemsReducers<ChannelServiceProvider>;
  updateChannelServiceProvider: ItemsReducers<ChannelServiceProvidersSetting>;
}
const initialState: InitialState = {
  channelServiceProvider: null,
  getChannelServiceProvider: initialStateItemReducer,
  createChannelServiceProvider: initialStateItemReducer,
  updateChannelServiceProvider: initialStateItemReducer,
};

const channelSlice = createSlice({
  name: "channelServiceProviders",
  initialState,
  reducers: {},
  extraReducers: { ...getChannelServiceProviderReducers, ...updateChannelServiceProviderReducer },
});

export const { reducer } = channelSlice;

export default channelSlice.reducer;
