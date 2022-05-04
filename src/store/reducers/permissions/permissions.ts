import { getClient } from "@/settings";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import arraySort from "array-sort";
import { ResponseApi, Permission, AccessScopeType, AccessScopesType } from "src/types";

const client = getClient();
interface InitialStateEntityFetch<T> {
  isLoading: boolean;
  data: T;
  err: any;
  hasError: boolean;
}

interface RolePermission {
  id: number;
  name: string;
  access_scopes: AccessScopeType[];
}

const initialState: InitialStateEntityFetch<Permission[]> = {
  isLoading: false,
  data: [],
  err: null,
  hasError: false,
};

export const getPermissions = createAsyncThunk("permissions/get", async ({ roleId }: { roleId: number }) => {
  try {
    const { data } = await client.get<ResponseApi<Permission[]>>(`/roles/${roleId}`);

    if (data.code === 401) {
      return Promise.reject(data);
    }

    return data.data;
  } catch (err) {
    console.log(err);
  }
});
export const updatePermission = createAsyncThunk(
  "permissions/update",
  // prettier-ignore
  async ({ id, granted }: { id: number; granted: boolean }): Promise<boolean> => {
    try {
      const { data } = await client.put(`/access_scopes/${id}`, {
        access_scope: {granted},
      });

      if (data.code === 401) {
        return Promise.reject(data);
      }

      return true
    } catch (err: any) {
      return Promise.reject(err.response.data);
    }
  }
);

const rolesSlice = createSlice({
  name: "permissions",
  initialState,
  reducers: {
    setLoading: (state, { payload }) => {
      state.isLoading = payload;
    },
  },
  extraReducers: {
    [getPermissions.pending.type]: (state) => {
      state.data = [];
      state.isLoading = true;
    },
    [getPermissions.rejected.type]: (state, payload) => {
      state.isLoading = false;
    },
    // prettier-ignore
    [getPermissions.fulfilled.type]: (state,{ payload }: PayloadAction<RolePermission>) => {
      const permissions: Permission[] = payload.access_scopes.map((access_scope) => {
        return Object.keys(access_scope).map((key) => ({
          accessScope: key,
          label: access_scope[key as AccessScopesType][0].label,
          values: arraySort(access_scope[key as AccessScopesType], "id"),
        }))[0];
      });

     state.data = permissions
      state.isLoading = false;
    },
    [updatePermission.pending.type]: (state) => {
      state.isLoading = true;
    },
    [updatePermission.rejected.type]: (state) => {
      state.isLoading = false;
    },
    [updatePermission.fulfilled.type]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { reducer } = rolesSlice;

export default rolesSlice.reducer;
