import { apiService } from "@/settings";
import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { InitialState } from "../..";

interface DeleteSettingArgs {
  id: number;
}

export const deleteSystemSetting = createAsyncThunk("setting/delete", async ({ id }: DeleteSettingArgs) =>
  apiService({ method: "delete", url: `/setting/${id}` })
);

export const deleteSettingReducers: any = {
  [deleteSystemSetting.pending.type]: (state: InitialState) => {
    state.deleteSystemSetting.isLoading = true;
  },
  [deleteSystemSetting.rejected.type]: (state: InitialState) => {
    state.deleteSystemSetting.isLoading = false;
  },
  [deleteSystemSetting.fulfilled.type]: (state: InitialState, payload: PayloadAction<any>) => {
    state.deleteSystemSetting.isLoading = false;
    // state.setting = state.setting.filter((user) => user.id !== (payload as any).meta.arg.id);
  },
};
