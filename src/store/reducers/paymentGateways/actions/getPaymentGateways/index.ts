import { createAsyncThunk } from "@reduxjs/toolkit";

import { PaymentGateway } from "@continuapro/entity";
import { FnReducer } from "@continuapro/redux";

import { apiService } from "@/settings";

import { InitialState } from "../..";

export const getPaymentGateways = createAsyncThunk("payment_gateways/get", async () =>
  apiService({
    method: "get",
    url: "/payment_gateways",
  })
);

export const getPaymentGatewaysReducers: FnReducer<InitialState, PaymentGateway[]> = {
  [getPaymentGateways.pending.type]: (state) => {
    state.getPaymentGateways.isLoading = true;
  },
  [getPaymentGateways.rejected.type]: (state) => {
    state.getPaymentGateways.isLoading = false;
  },
  [getPaymentGateways.fulfilled.type]: (state, { payload }) => {
    state.getPaymentGateways.isLoading = false;
    state.paymentGateways = payload.data.data;
    state.getPaymentGateways.data = payload.data.data;
  },
};
