import { createAsyncThunk } from "@reduxjs/toolkit";
import { getSchedulesAxios, getSchedulesOfMonthAxios } from "./schedule";

export const getScheduleAction = createAsyncThunk(
  "schedules/schedules/get",
  async (params, { rejectWithValue }) => {
    try {
      const { data } = await getSchedulesAxios({
        params: {
          // page: "0",
          // size: "6",
          sort: "date,ASC",
        },
      });
      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const getScheduleOfMonthAction = createAsyncThunk(
  "schedules/schedules/month/get",
  async (params, { rejectWithValue }) => {
    try {
      const { data } = await getSchedulesOfMonthAxios({
        params: {
          ...params,
        },
      });
      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
