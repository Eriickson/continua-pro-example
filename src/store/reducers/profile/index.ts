import { createSlice } from "@reduxjs/toolkit";

import { getProfileReducers } from "./actions/getProfile";
import { updateProfileReducers } from "./actions/updateProfile";
import { uploadProfilePictureReducers } from "./actions/uploadProfilePicture";
import { setCurrentProfileReducers } from "./actions/setCurrentProfile";
import { Profile } from "@continuapro/entity";
import { ItemsReducers } from "@continuapro/redux";

const initialStateItemReducer = {
  isLoading: false,
  data: {} as Profile,
  err: null,
  hasError: false,
};

export interface InitialState {
  profile: Profile;
  getProfile: ItemsReducers<Profile>;
  updateProfile: ItemsReducers<Profile>;
  uploadProfilePicture: ItemsReducers<Profile>;
  setCurrentProfile: ItemsReducers<Profile>;
}

const initialState: InitialState = {
  profile: {} as Profile,
  getProfile: initialStateItemReducer,
  updateProfile: initialStateItemReducer,
  uploadProfilePicture: initialStateItemReducer,
  setCurrentProfile: initialStateItemReducer,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: {
    ...getProfileReducers,
    ...updateProfileReducers,
    ...uploadProfilePictureReducers,
    ...setCurrentProfileReducers,
  },
});

export const { reducer } = profileSlice;

export default profileSlice.reducer;
