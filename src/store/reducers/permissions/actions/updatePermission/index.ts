import { apiService } from "@/settings";
import { Permission } from "@/types";
import { FnReducer } from "@continuapro/redux";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { InitialState } from "../..";

interface GetPermissionsArgs {
  id: number;
  access_scope: { granted: boolean };
}

export const updatePermission = createAsyncThunk("permissions/update", async ({ id }: GetPermissionsArgs) =>
  apiService({ method: "put", url: `/access_scopes/${id}` })
);

export const updatePermissionReducers: FnReducer<InitialState, Permission> = {
  [updatePermission.pending.type]: (state) => {
    state.updatePermission.isLoading = true;
  },
  [updatePermission.rejected.type]: (state) => {
    state.updatePermission.isLoading = false;
  },
  [updatePermission.fulfilled.type]: (state, { payload }) => {
    state.updatePermission.isLoading = false;
    state.updatePermission.data = payload.data.data;
  },
};
