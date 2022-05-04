import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import { apiService } from "@/settings";

import { InitialState } from "../..";

interface SendPasswordResetEmailArgs {
  user: {
    email: string;
  };
}

export interface SendPasswordResetEmailResponse {
  code: number;
  message: string;
  data: null;
}

export const sendPasswordResetEmail = createAsyncThunk(
  "password/send_password_reset_email",
  async ({ user }: SendPasswordResetEmailArgs) => {
    return apiService({ method: "post", url: "/password/reset", data: { user } });
  }
);

export const sendPasswordResetEmailReducers: any = {
  [sendPasswordResetEmail.pending.type]: (state: InitialState) => {
    state.sendPasswordResetEmail.isLoading = true;
  },
  [sendPasswordResetEmail.rejected.type]: (state: InitialState) => {
    state.sendPasswordResetEmail.isLoading = false;
  },
  [sendPasswordResetEmail.fulfilled.type]: (
    state: InitialState,
    payload: PayloadAction<SendPasswordResetEmailResponse>
  ) => {
    state.sendPasswordResetEmail.isLoading = false;
    state.sendPasswordResetEmail.data = payload.payload;
  },
};
