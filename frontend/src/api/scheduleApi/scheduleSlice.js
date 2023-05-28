import { createSlice } from "@reduxjs/toolkit";
import { getScheduleAction, getScheduleOfMonthAction } from "./scheduleAction";

const initialState = {
  schedules: [],
  monthSchedules: [],
};

const scheduleSlice = createSlice({
  name: "schedule",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getScheduleAction.fulfilled, (state, { payload }) => {
      state.schedules = payload;
    });
    builder.addCase(getScheduleAction.rejected, (state, { payload }) => {
      state.schedules = payload;
    });
    builder.addCase(
      getScheduleOfMonthAction.fulfilled,
      (state, { payload }) => {
        state.monthSchedules = payload;
      }
    );
    builder.addCase(getScheduleOfMonthAction.rejected, (state, { payload }) => {
      state.monthSchedules = payload;
    });
  },
});

export default scheduleSlice.reducer;
