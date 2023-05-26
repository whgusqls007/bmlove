import { createSlice } from "@reduxjs/toolkit";
import { getScheduleAction } from "./scheduleAction";

const initialState = {
  schedules: [],
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
  },
});

export default scheduleSlice.reducer;
