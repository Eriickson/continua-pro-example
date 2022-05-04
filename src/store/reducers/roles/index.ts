import { Role } from "@continuapro/entity";
import { initialStateItemReducerArray } from "@/utils";
import { ItemsReducers } from "@continuapro/redux";
import { createSlice } from "@reduxjs/toolkit";

import { getRolesReducers } from "./actions/getRoles";

export interface InitialState {
  roles: Role[];
  getRoles: ItemsReducers<Role[]>;
}

const initialState: InitialState = {
  roles: [],
  getRoles: initialStateItemReducerArray,
};

const rolesSlice = createSlice({
  name: "roles",
  initialState,
  reducers: {},
  extraReducers: { ...getRolesReducers },
});

export const { reducer } = rolesSlice;
export default rolesSlice.reducer;
