import { getClient } from "@/settings";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { ResponseApi, ResponseThunk } from "src/types";

import { NotificationSchedule } from "@continuapro/entity";

const client = getClient();
interface InitialStateEntityFetch<T> {
  isLoading: boolean;
  data: T;
  err: any;
  hasError: boolean;
  show: NotificationSchedule | null;
}

const initialState: InitialStateEntityFetch<NotificationSchedule[]> = {
  isLoading: false,
  data: [],
  err: null,
  hasError: false,
  show: null,
};

export const getNotificationSchedule = createAsyncThunk("notification_schedules/get", async () => {
  try {
    const { data } = await client.get<ResponseApi<NotificationSchedule[]>>("/notification_schedules");

    if (data.code === 401) {
      return Promise.reject(data);
    }

    return data.data;
  } catch (err) {
    console.log(err);
  }
});
export const createNotificationSchedule = createAsyncThunk(
  "notification_schedules/create",
  async (notification_schedule: Omit<NotificationSchedule, "id">) => {
    try {
      const { data } = await client.post<ResponseApi<NotificationSchedule>>("/notification_schedules", {
        notification_schedule,
      });

      if (data.code === 401) {
        return Promise.reject(data);
      }

      return data.data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const updateCampaigns = createAsyncThunk(
  "campaigns/update",
  // prettier-ignore
  async ({ id, campaign }: { id: number; campaign: NotificationSchedule }): Promise<ResponseThunk<NotificationSchedule>> => {
    try {
      const { data } = await client.put<ResponseApi<NotificationSchedule>>(`/mailing/campaigns/${id}`, {
        campaign: campaign,
      });

      if (data.code === 401) {
        return Promise.reject(data);
      }

      return {
        data: data.data,
        successful: true
      }
    } catch (err: any) {
      return Promise.reject(err.response.data);
    }
  }
);

const campaignsSlice = createSlice({
  name: "campaigns",
  initialState,
  reducers: {
    setLoading: (state, { payload }) => {
      state.isLoading = payload;
    },
  },
  extraReducers: {
    [getNotificationSchedule.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getNotificationSchedule.rejected.type]: (state, payload) => {
      state.isLoading = false;
    },
    // prettier-ignore
    [getNotificationSchedule.fulfilled.type]: (state,{ payload }: PayloadAction<NotificationSchedule[]>) => {
      state.data = payload;
      state.isLoading = false;
    },
    [updateCampaigns.pending.type]: (state) => {
      state.isLoading = true;
    },
    [updateCampaigns.rejected.type]: (state, payload) => {
      state.isLoading = false;
    },

    // prettier-ignore
    [updateCampaigns.fulfilled.type]: (state,{ payload }: PayloadAction<ResponseThunk<NotificationSchedule>>) => {
      state.isLoading = false;
      state.data = state.data.map((campaign) => campaign.id  === payload.data.id ? payload.data : campaign )
    },
    [createNotificationSchedule.pending.type]: (state) => {
      state.isLoading = true;
    },
    [createNotificationSchedule.rejected.type]: (state) => {
      state.isLoading = true;
    },
    [createNotificationSchedule.fulfilled.type]: (state, { payload }: PayloadAction<NotificationSchedule>) => {
      state.isLoading = false;

      state.data = [...state.data, payload];
    },
  },
});

export const { reducer } = campaignsSlice;

export default campaignsSlice.reducer;
