import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import { apiService } from "@/settings";

import { InitialState } from "../..";
import { Profile } from "@continuapro/entity";

interface UpdateProfileArgs {
  profile: Partial<Omit<Profile, "profile_picture_url">>;
}

export const updateProfile = createAsyncThunk("profile/update", async ({ profile }: UpdateProfileArgs) =>
  apiService({
    method: "put",
    url: "/profile/update",
    data: { profile },
  })
);

export const updateProfileReducers: any = {
  [updateProfile.pending.type]: (state: InitialState) => {
    state.updateProfile.isLoading = true;
  },
  [updateProfile.rejected.type]: (state: InitialState) => {
    state.updateProfile.isLoading = false;
  },
  [updateProfile.fulfilled.type]: (state: InitialState, { payload }: PayloadAction<any>) => {
    state.updateProfile.isLoading = false;
    state.profile = payload.data.data;
    state.updateProfile.data = payload.data.data;
  },
};
