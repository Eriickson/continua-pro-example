import { Profile } from "@continuapro/entity";
import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { InitialState } from "../..";

interface setCurrentProfileArgs {
  profile: Profile;
}

export const setCurrentProfile = createAsyncThunk("profile/get", async ({ profile }: setCurrentProfileArgs) => {
  localStorage.setItem("current_user", JSON.stringify(profile));
  return profile;
});

export const setCurrentProfileReducers: any = {
  [setCurrentProfile.pending.type]: (state: InitialState) => {
    state.setCurrentProfile.isLoading = true;
  },
  [setCurrentProfile.rejected.type]: (state: InitialState) => {
    state.setCurrentProfile.isLoading = false;
  },
  [setCurrentProfile.fulfilled.type]: (state: InitialState, { payload }: PayloadAction<any>) => {
    state.setCurrentProfile.isLoading = false;
    state.profile = payload;
    state.setCurrentProfile.data = payload;
  },
};
