import { apiService } from "@/settings";
import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { InitialState } from "../..";

export const getProfile = createAsyncThunk("profile/get", async () =>
  apiService({
    method: "get",
    url: "/profile",
  })
);

export const getProfileReducers: any = {
  [getProfile.pending.type]: (state: InitialState) => {
    state.getProfile.isLoading = true;
  },
  [getProfile.rejected.type]: (state: InitialState) => {
    state.getProfile.isLoading = false;
  },
  [getProfile.fulfilled.type]: (state: InitialState, { payload }: PayloadAction<any>) => {
    console.log({ payload });

    state.getProfile.isLoading = false;
    state.profile = payload.data.data;
    state.getProfile.data = payload.data.data;
  },
};
