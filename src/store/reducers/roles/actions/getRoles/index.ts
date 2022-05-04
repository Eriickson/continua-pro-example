import { createAsyncThunk } from "@reduxjs/toolkit";

import { apiService } from "@/settings";

import { InitialState } from "../..";
import { FnReducer } from "@continuapro/redux";
import { Role } from "@continuapro/entity";

export const getRoles = createAsyncThunk("roles/get", async () =>
  apiService({
    method: "get",
    url: "/roles",
  })
);

export const getRolesReducers: FnReducer<InitialState, Role[]> = {
  [getRoles.pending.type]: (state) => {
    state.getRoles.isLoading = true;
  },
  [getRoles.rejected.type]: (state) => {
    state.getRoles.isLoading = false;
  },
  [getRoles.fulfilled.type]: (state, { payload }) => {
    state.getRoles.isLoading = false;
    state.roles = payload.data.data;
    state.getRoles.data = payload.data.data;
  },
};
