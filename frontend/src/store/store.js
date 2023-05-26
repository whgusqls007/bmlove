import { configureStore } from "@reduxjs/toolkit";
import placeReducer from "../api/placeApi/placeSlice";
import scheduleReducer from "../api/scheduleApi/scheduleSlice";

const store = configureStore({
  reducer: {
    place: placeReducer,
    schedule: scheduleReducer,
  },
});

export default store;
