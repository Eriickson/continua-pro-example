import { createSlice } from "@reduxjs/toolkit";

import { PaymentGateway } from "@continuapro/entity";
import { ItemsReducers } from "@continuapro/redux";
import { initialStateItemReducer, initialStateItemReducerArray } from "@/utils";

import { getPaymentGatewayReducers } from "./actions/getPaymentGateway";
import { getPaymentGatewaysReducers } from "./actions/getPaymentGateways";
import { updatePaymentGatewayReducers } from "./actions/updatePaymentGateway";

export interface InitialState {
  paymentGateways: PaymentGateway[];
  paymentGateway: PaymentGateway | null;
  getPaymentGateway: ItemsReducers<PaymentGateway>;
  getPaymentGateways: ItemsReducers<PaymentGateway[]>;
  updatePaymentGateway: ItemsReducers<PaymentGateway>;
  deletePaymentGateway: ItemsReducers<PaymentGateway>;
}

const initialState: InitialState = {
  paymentGateways: [],
  paymentGateway: null,
  getPaymentGateways: initialStateItemReducerArray,
  getPaymentGateway: initialStateItemReducer,
  updatePaymentGateway: initialStateItemReducer,
  deletePaymentGateway: initialStateItemReducer,
};

const paymentGatewayslice = createSlice({
  name: "paymentGateways",
  initialState,
  reducers: {},
  extraReducers: {
    ...getPaymentGatewayReducers,
    ...getPaymentGatewaysReducers,
    ...updatePaymentGatewayReducers,
  },
});

export const { reducer } = paymentGatewayslice;

export default paymentGatewayslice.reducer;
