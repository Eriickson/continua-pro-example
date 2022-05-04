import { ItemsReducers } from "@continuapro/redux";
import { createSlice } from "@reduxjs/toolkit";
import { resetPasswordReducers } from "./actions/resetPassword";
import { sendPasswordResetEmailReducers, SendPasswordResetEmailResponse } from "./actions/sendPasswordResetEmail";

const initialStateItemReducer = {
  isLoading: false,
  data: {} as SendPasswordResetEmailResponse,
  err: null,
  hasError: false,
};
export interface InitialState {
  sendPasswordResetEmail: ItemsReducers<SendPasswordResetEmailResponse>;
  resetPassword: any;
}

const initialState: InitialState = {
  sendPasswordResetEmail: initialStateItemReducer,
  resetPassword: initialStateItemReducer,
};

const resetPasswordSlice = createSlice({
  name: "resetPassword",
  initialState,
  reducers: {},
  extraReducers: { ...sendPasswordResetEmailReducers, ...resetPasswordReducers },
});

export const { reducer } = resetPasswordSlice;

export default resetPasswordSlice.reducer;
