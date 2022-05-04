import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import { apiService } from "@/settings";

import { InitialState } from "../..";

interface UpdatePaymentGatewayArgs {
  id: number;
  payment_gateway_setting: { value: string };
}

export const updatePaymentGateway = createAsyncThunk(
  "payment_gateways/update",
  async ({ id, payment_gateway_setting }: UpdatePaymentGatewayArgs) =>
    apiService({
      method: "put",
      url: `/payment_gateway_settings/${id}`,
      data: { payment_gateway_setting },
    })
);

export const updatePaymentGatewayReducers: any = {
  [updatePaymentGateway.pending.type]: (state: InitialState) => {
    state.updatePaymentGateway.isLoading = true;
  },
  [updatePaymentGateway.rejected.type]: (state: InitialState) => {
    state.updatePaymentGateway.isLoading = false;
  },
  [updatePaymentGateway.fulfilled.type]: (state: InitialState, { payload }: PayloadAction<any>) => {
    state.updatePaymentGateway.isLoading = false;
    state.updatePaymentGateway.data = payload.data.data;
  },
};
