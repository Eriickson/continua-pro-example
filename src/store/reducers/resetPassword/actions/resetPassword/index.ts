import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import { apiService } from "@/settings";

import { InitialState } from "../..";

interface ResetPasswordArgs {
  user: {
    password: string;
    password_confirmation: string;
  };
  query: {
    token: string;
  };
}

export interface ResetPasswordResponse {
  code: number;
  message: string;
  data: null;
}

export const resetPassword = createAsyncThunk(
  "password/send_password_reset_email",
  async ({ user, query }: ResetPasswordArgs) => {
    return apiService({
      method: "patch",
      url: "/password/reset/edit",
      data: { user },
      config: { params: { ...query } },
    });
  }
);

export const resetPasswordReducers: any = {
  [resetPassword.pending.type]: (state: InitialState) => {
    state.resetPassword.isLoading = true;
  },
  [resetPassword.rejected.type]: (state: InitialState) => {
    state.resetPassword.isLoading = false;
  },
  [resetPassword.fulfilled.type]: (state: InitialState, payload: PayloadAction<ResetPasswordResponse>) => {
    state.resetPassword.isLoading = false;
    state.resetPassword.data = payload.payload;
  },
};
