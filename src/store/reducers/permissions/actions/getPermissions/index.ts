import { apiService } from "@/settings";
import { Permission } from "@/types";
import { FnReducer } from "@continuapro/redux";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { InitialState } from "../..";

interface GetPermissionsArgs {
  roleId: number;
}

export const getPermissions = createAsyncThunk("permissions/get", async ({ roleId }: GetPermissionsArgs) =>
  apiService({ method: "get", url: `/roles/${roleId}` })
);

export const getPermissionsReducers: FnReducer<InitialState, Permission[]> = {
  [getPermissions.pending.type]: (state) => {
    state.getPermissions.isLoading = true;
  },
  [getPermissions.rejected.type]: (state) => {
    state.getPermissions.isLoading = false;
  },
  [getPermissions.fulfilled.type]: (state, { payload }) => {
    /* const permissions: Permission[] = payload.access_scopes.map((access_scope) => {
        return Object.keys(access_scope).map((key) => ({
          accessScope: key,
          label: access_scope[key as AccessScopesType][0].label,
          values: arraySort(access_scope[key as AccessScopesType], "id"),
        }))[0];
      });

     state.data = permissions
      state.isLoading = false; */
    state.getPermissions.isLoading = false;
    state.getPermissions.data = payload.data.data;
  },
};
