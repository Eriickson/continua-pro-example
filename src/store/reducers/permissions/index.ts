import { Permission } from "@/types";
import { initialStateItemReducer, initialStateItemReducerArray } from "@/utils";
import { ItemsReducers } from "@continuapro/redux";
import { createSlice } from "@reduxjs/toolkit";

import { getPermissionsReducers } from "./actions/getPermissions";
import { updatePermissionReducers } from "./actions/updatePermission";

export interface InitialState {
  permissions: Permission[];
  getPermissions: ItemsReducers<Permission[]>;
  updatePermission: ItemsReducers<Permission>;
}

const initialState: InitialState = {
  permissions: [],
  getPermissions: initialStateItemReducerArray,
  updatePermission: initialStateItemReducer,
};

const permissionsSlice = createSlice({
  name: "permissions",
  initialState,
  reducers: {},
  extraReducers: { ...getPermissionsReducers, ...updatePermissionReducers },
});

export const { reducer } = permissionsSlice;

export default permissionsSlice.reducer;
