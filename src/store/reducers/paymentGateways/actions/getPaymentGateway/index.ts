import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import { apiService } from "@/settings";

import { InitialState } from "../..";

interface GetPaymentGatewayArgs {
  id: number;
}

export const getPaymentGateway = createAsyncThunk(
  "payment_gateways/get/details",
  async ({ id }: GetPaymentGatewayArgs) =>
    apiService({
      method: "get",
      url: `/payment_gateways/${id}`,
    })
);

export const getPaymentGatewayReducers: any = {
  [getPaymentGateway.pending.type]: (state: InitialState) => {
    state.getPaymentGateway.isLoading = true;
  },
  [getPaymentGateway.rejected.type]: (state: InitialState) => {
    state.getPaymentGateway.isLoading = false;
  },
  [getPaymentGateway.fulfilled.type]: (state: InitialState, { payload }: PayloadAction<any>) => {
    state.getPaymentGateway.isLoading = false;
    state.paymentGateway = payload.data.data;
    state.getPaymentGateway.data = payload.data.data;
  },
};
