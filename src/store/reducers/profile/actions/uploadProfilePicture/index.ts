import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import { apiService } from "@/settings";

import { InitialState } from "../..";

interface UpdateProfileArgs {
  newProfilePicture: FormData;
}

export const uploadProfilePicture = createAsyncThunk(
  "profile/upload_profile_picture",
  async ({ newProfilePicture }: UpdateProfileArgs) => {
    return apiService({
      method: "put",
      url: "/profile/upload_profile_picture",
      config: { headers: { "Content-Type": "multipart/form-data" } },
      data: newProfilePicture,
    });
  }
);

export const uploadProfilePictureReducers: any = {
  [uploadProfilePicture.pending.type]: (state: InitialState) => {
    state.uploadProfilePicture.isLoading = true;
  },
  [uploadProfilePicture.rejected.type]: (state: InitialState) => {
    state.uploadProfilePicture.isLoading = false;
  },
  [uploadProfilePicture.fulfilled.type]: (state: InitialState, { payload }: PayloadAction<any>) => {
    let currentUser = JSON.parse(localStorage.getItem("current_user") || "{}");
    currentUser = {
      ...currentUser,
      ...payload.data.data,
    };

    localStorage.setItem("current_user", JSON.stringify({ ...currentUser, ...payload.data.data }));
    state.uploadProfilePicture.isLoading = false;
    state.profile = payload.data.data;
    state.uploadProfilePicture.data = payload.data.data;
  },
};
