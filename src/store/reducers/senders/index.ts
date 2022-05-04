import { createSlice } from "@reduxjs/toolkit";

import { getSendersReducers } from "./actions/getSenders";
import { createSenderReducers } from "./actions/createSender";
import { updateSenderReducers } from "./actions/updateSender";
import { deleteSenderReducers } from "./actions/deleteSender";
import { ItemsReducers } from "@continuapro/redux";
import { Sender } from "@continuapro/entity";

const initialStateItemReducer = {
  isLoading: false,
  data: [],
  err: null,
  hasError: false,
};

export interface InitialState {
  senders: Sender[];
  getSenders: ItemsReducers<Sender[]>;
  createSender: ItemsReducers<Sender[]>;
  updateSender: ItemsReducers<Sender[]>;
  deleteSender: ItemsReducers<Sender[]>;
}

const initialState: InitialState = {
  senders: [],
  getSenders: initialStateItemReducer,
  createSender: initialStateItemReducer,
  updateSender: initialStateItemReducer,
  deleteSender: initialStateItemReducer,
};

const senderslice = createSlice({
  name: "senders",
  initialState,
  reducers: {},
  extraReducers: { ...getSendersReducers, ...createSenderReducers, ...updateSenderReducers, ...deleteSenderReducers },
});

export const { reducer } = senderslice;

export default senderslice.reducer;
